import { Schema, model, models } from "mongoose";

const CouponSchema = new Schema(
  {
    description: {
      type: String,
    },
    code: {
      type: String,
    },
    discount: {
      type: Number,
    },
  },
  { versionKey: false, timestamps: true }
);

const Coupon = models.Coupon || model("Coupon", CouponSchema);

export default Coupon;
