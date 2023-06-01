"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Form from "@components/Form";
import RegisterForm from "@components/RegisterForm";
import { toast } from "react-hot-toast";

const initUser = {
  name: "",
  email: "",
  password: "",
  phone: "",
};

const RegisterPage = () => {
  const [data, setData] = useState(initUser);

  const router = useRouter();

  const registerUser = async (values, { resetForm }) => {
    console.log(values);
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(values),
    });
    console.log("response", response);
    if (!response.ok) return toast.error("Something went wrong!");

    toast.success("User has been registered!");
    router.push("/shop");
    resetForm();
  };

  return (
    <section>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full ">
          <h2 className="subtitle_text blue_gradient font-satoshi">
            Register for an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form type="Register" />

          <p className="mt-10 text-center font-inter text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-inter font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
