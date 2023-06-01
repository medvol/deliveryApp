"use client";

import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Formik, Field, ErrorMessage } from "formik";
import { toast } from "react-hot-toast";
import { registerSchema } from "@utils/registerSchema";
import { loginSchema } from "@utils/loginSchema";
import { registerUser } from "@utils/registerUser";
import { loginUser } from "@utils/loginUser";
import SignInGoogleButton from "./SignInGoogleButton";

const initialValuesRegister = {
  username: "",
  email: "",
  password: "",
  phone: "",
};
const initialValuesLogin = {
  email: "",
  password: "",
};

const Form = ({ type }) => {
  const router = useRouter();

  const handleSubmitForm = async (values, { setSubmitting, resetForm }) => {
    let response;

    try {
      if (type === "Register") {
        response = await registerUser(type, values);
      }
      if (type === "Login") {
        await signIn("credentials", { ...values, redirect: true, callbackUrl: "/shop"  });
      }
      if (!response.ok) return toast.error("Something went wrong!");

      toast.success("User has been registered!");
      router.push("/shop");
      resetForm();
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmitForm}
        initialValues={
          type === "Register" ? initialValuesRegister : initialValuesLogin
        }
        validationSchema={type === "Register" ? registerSchema : loginSchema}
      >
        {({ values, handleBlur, handleChange, handleSubmit, isSubmitting }) => (
          <form className="space-y-6" onSubmit={handleSubmit}>
            {type === "Register" && (
              <div>
                <label
                  htmlFor="username"
                  className="block font-inter text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <Field
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Please type your name..."
                    required
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.username}
                    className="form_input"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="md:text-md mt-1 font-inter text-xs text-red-500"
                  />
                </div>
              </div>
            )}
            <div>
              <label
                htmlFor="email"
                className="block font-inter text-sm font-medium leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2">
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Please type your email..."
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  className="form_input"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="md:text-md mt-1 font-inter text-xs text-red-500"
                />
              </div>
            </div>
            {type === "Register" && (
              <div>
                <label
                  htmlFor="phone"
                  className="block font-inter text-sm font-medium leading-6 text-gray-900"
                >
                  Phone
                </label>
                <div className="mt-2">
                  <Field
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+380"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    className="form_input"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="md:text-md mt-1 font-inter text-xs text-red-500"
                  />
                </div>
              </div>
            )}

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block font-inter text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <Field
                  id="password"
                  name="password"
                  type="password"
                  required
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  className="form_input"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="md:text-md mt-1 font-inter text-xs text-red-500"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="black_btn w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? `Submitting...` : type}
              </button>
              <p className="my-3 block text-center font-inter text-sm font-medium leading-6 text-gray-900">
                --- or ---
              </p>

              <SignInGoogleButton />
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
