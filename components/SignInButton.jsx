"use client";

import { useEffect, useState } from "react";
import { signIn, getProviders } from "next-auth/react";

const SignInButton = ({ toggleDropdown, setToggleDropdown }) => {
  const [providers, setProviders] = useState(null);

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
              if (toggleDropdown) {
                setToggleDropdown(false)
              }
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
