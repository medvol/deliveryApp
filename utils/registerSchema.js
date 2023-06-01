import * as yup from "yup";
import { userRegexp, emailRegexp, phoneRegexp } from "./regExp";

export const registerSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .matches(
      userRegexp,
      "Username invalid, it should contain 2-20 alphanumeric letters and be unique!"
    )
    .required("Name is required"),

  email: yup
    .string()
    .matches(
      emailRegexp,
      "Email must use only letters, numbers, dots, underscores or hyphens and contain @ and com"
    )
    .email("Invalid email")
    .required("Email is required"),

  password: yup.string().min(6, 'Should be atleast 6 characters').required("Password is required"),

  phone: yup
    .string()
    .required("Phone is required"),
});
