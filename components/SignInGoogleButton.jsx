"use client";

import { signIn } from "next-auth/react";

const SignInGoogleButton = () => {
  const onClick = async () => {
    await signIn("google", { redirect: true, callbackUrl: "/shop" });
  };

  return (
    <>
      <button type="button" onClick={onClick} className="black_btn w-full">
        Continue with Google
      </button>
    </>
  );
};
export default SignInGoogleButton;
