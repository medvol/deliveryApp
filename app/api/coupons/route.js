import Coupon from "@models/coupon";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const coupons = await Coupon.find({});

    return new Response(JSON.stringify(coupons), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all coupons", { status: 500 });
  }
};
