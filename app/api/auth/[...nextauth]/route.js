import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { connectToDB } from "@utils/database";
import User from "@models/user";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "email",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials.email || !credentials.password) {
            throw new Error("Please enter an email and password");
          }
          await connectToDB();

          const user = await User.findOne({ email: credentials.email });

          if (!user || !user?.password) {
            throw new Error("No user found", { status: 403 });
          }

          const passwordMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!passwordMatch) {
            throw new Error("Incorrect password");
          }

          return user;
        } catch (error) {
          console.log("Login user ", error.message);
          return false;
        }
      },
    }),
  ],

  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        try {
          await connectToDB();

          const userExists = await User.findOne({ email: profile.email });

          const salt = await bcrypt.genSalt();
          const password = process.env.NEXTAUTH_SECRET;
          const passwordHash = await bcrypt.hash(password, salt);

          if (!userExists) {
            await User.create({
              email: profile.email,
              username: profile.name.replace(" ", "").toLowerCase(),
              image: profile.picture,
              phone: "",
              password: passwordHash,
            });
          }

          return true;
        } catch (error) {
          console.log("Error checking if user exists: ", error.message);
          return false;
        }
      }
      return true;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
