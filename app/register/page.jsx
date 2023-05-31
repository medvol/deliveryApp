"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-hot-toast";

const initUser = {
  name: "",
  email: "",
  password: "",
};

const RegisterPage = () => {
  const [data, setData] = useState(initUser);

  const router = useRouter();

  const registerUser = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) return toast.error("Something went wrong!");

    toast.success("User has been registered!");

    router.push("/shop");
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
          <form className="space-y-6" onSubmit={registerUser}>
            <div>
              <label
                htmlFor="name"
                className="block font-inter text-sm font-medium leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  className="form_input"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-inter text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  className="form_input"
                />
              </div>
            </div>

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
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={data.password}
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  className="form_input"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="black_btn w-full "
                onClick={registerUser}
              >
                Register
              </button>
              <p className="my-3 block text-center font-inter text-sm font-medium leading-6 text-gray-900">
                --- or ---
              </p>
              <button type="submit" className="black_btn w-full ">
                Continue with Google
              </button>
            </div>
          </form>

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
