import * as yup from "yup";
import { emailRegexp } from "./regExp";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .matches(
      emailRegexp,
      "Email must use only letters, numbers, dots, underscores or hyphens and contain @ and com"
    )
    .email("invalid email")
    .required("Email is required"),

  password: yup
    .string()
    .min(6, "Should be atleast 6 characters")
    .required("Password is required"),
});
