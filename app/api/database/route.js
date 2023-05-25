import Shop from "@models/shop";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
  const { name, logo, address } = await request.json();

  try {
      await connectToDB();
     
    const newShop = new Shop({ name, logo, address });
    console.log(newShop);
      await newShop.save();
   
    return new Response(JSON.stringify(newShop), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new shop", { status: 500 });
  }
};
