import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema(
  {
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "Food",
        required: true,
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    totalAmount: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Order = models.Order || model("Order", OrderSchema);

export default Order;
