import { Schema, model, models } from "mongoose";

const OrderSchema = new Schema(
  {
    items: [
      {
        type: Schema.Types.ObjectId,
        ref: "food",
        required: true,
      },
    ],
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
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
