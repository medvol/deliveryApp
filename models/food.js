import { Schema, model, models } from "mongoose";
import { addressRegexp } from "@utils/regExp";

const FoodSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: [true, "Name is required!"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "shop",
      required: true,
    },

    image: {
      type: String,
    },
    description: {
      type: String,
      minlength: 8,
      maxlength: 80,
    },
    category: {
      type: String,
    },
    price: {
      type: Number,
      min: 1,
      required: [true, "Price is required"],
    },
    quantity: {
      type: Number,
    },
    likes: {
      type: Number,
    },
  },
  { versionKey: false, timestamps: true }
);

const Food = models.Food || model("Food", FoodSchema);

export default Food;
