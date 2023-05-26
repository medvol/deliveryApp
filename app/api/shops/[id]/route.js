import Food from "@models/food";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const foods = await Food.find({ owner: params.id});

    return new Response(JSON.stringify(foods), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all shops", { status: 500 });
  }
};
