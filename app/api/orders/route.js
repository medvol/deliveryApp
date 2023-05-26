import Order from "@models/order";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const order = await request.json();

  try {
    await connectToDB();
    const newOrder = new Order(order);
    await newOrder.save();
    return new Response(JSON.stringify(newOrder), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new order", { status: 500 });
  }
};
