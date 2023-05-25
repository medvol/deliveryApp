import Food from "@models/food";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const foods = await Food.find({});

    return new Response(JSON.stringify(foods), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all foods", { status: 500 });
  }
};
