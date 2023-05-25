import { Schema, model, models } from "mongoose";
import { addressRegexp } from "@utils/regExp";

const ShopSchema = new Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 30,
      required: [true, "Shop name is required!"],
    },

    logo: {
      type: String,
    },
    description: {
      type: String,
      minlength: 8,
      maxlength: 80,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
      match: addressRegexp,
      required: [true, "Address is required"],
    },
    rating: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Shop = models.Shop || model("Shop", ShopSchema);

export default Shop;
