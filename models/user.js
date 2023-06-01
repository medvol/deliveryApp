import { Schema, model, models } from "mongoose";
import { phoneRegexp, addressRegexp } from "@utils/regExp";

const UserSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: [true, "Email already exists!"],
      required: [true, "Email is required!"],
    },
    username: {
      type: String,
      minlength: 1,
      maxlength: 50,
      required: [true, "Username is required!"],
      match: [
        /^(?=.{2,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
        "Username invalid, it should contain 2-20 alphanumeric letters and be unique!",
      ],
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      match: phoneRegexp,
      required: true,
    },
    address: {
      type: String,
      match: addressRegexp,
      default: "",
    },
    token: {
      type: String,
      default: null,
    },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dxrvhhpki/image/upload/v1685033891/deliveryapp/shops/the-flavor-factory-low-resolution-color-logo_enh3zr.png",
    },
  },
  { versionKey: false, timestamps: true }
);

const User = models.User || model("User", UserSchema);

export default User;
