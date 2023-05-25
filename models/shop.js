import { Schema, model, models } from "mongoose";
import { addressRegexp } from "@utils/regExp";

const ShopSchema = new Schema({
  name: {
    type: String,
    required: [true, "Shop name is required!"],
  },

  logo: {
    type: String,
  },
  description: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
    // match: addressRegexp,
    required: [true, "Address is required"],
  },
  rating: {
    type: String,
  },
});

const Shop = models.Shop || model("Shop", ShopSchema);

export default Shop;
