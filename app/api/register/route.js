import bcrypt from "bcrypt";
import { connectToDB } from "@utils/database";
import User from "@models/user";

export async function POST(request) {
    const { username, email, password, phone } = await request.json();
    console.log(username, email, password, phone)

  if (!username || !email || !password || !phone) {
    return new Response("Missing Fields", { status: 400 });
  }

  await connectToDB();

  const user = await User.findOne({ email });

  if (user) {
    throw new Error("Email in use", { status: 409 });
  }

  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    email,
    password: passwordHash,
    phone
  });

  const savedUser = await newUser.save();

    const userWithoutPassword = await User.findById(savedUser._id, "-password");
    
  return new Response(JSON.stringify(userWithoutPassword), { status: 201 });
}
