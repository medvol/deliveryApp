"use client";

import { useEffect, useState } from "react";
import { signIn, getProviders } from "next-auth/react";

const SignInButton = () => {
  const [providers, setProviders] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <>
      {providers &&
        Object.values(providers).map((provider) => (
          <button
            type="button"
            key={provider.name}
            onClick={() => {
              signIn(provider.id);
            }}
            className="black_btn"
          >
            Sign in
          </button>
        ))}
    </>
  );
};
export default SignInButton;
