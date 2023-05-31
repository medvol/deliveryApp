import bcrypt from "bcrypt";
import { connectToDB } from "@utils/database";
import User from "@models/user";

export async function POST(request) {
  const { name, email, password } = await request.json();

  if (!name || !email || !password) {
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
    username: name,
    email,
    password: passwordHash,
  });

  const savedUser = await newUser.save();

    const userWithoutPassword = await User.findById(savedUser._id, "-password");
    
  return new Response(JSON.stringify(userWithoutPassword), { status: 201 });
}
