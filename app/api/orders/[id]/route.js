import Order from "@models/order";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

   const orders = await Order.find({ owner: params.id })
     .populate({
       path: "items",
       select: "name",
     })
     .sort({ createdAt: -1 });
    
    console.log(orders)

  
    return new Response(JSON.stringify(orders), { status: 200 });
  } catch (error) {
    return new Response(error, { status: 500 });
  }
};
