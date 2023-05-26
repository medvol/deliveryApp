"use client";

import { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import SignInButton from "./SignInButton";

const Nav = () => {
  const { data: session } = useSession();

  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex-between mb-16 w-full pt-3">
      <Link href="/" className="flex-center flex gap-2">
        <Image
          src="/assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">GoDeliver</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex">
        {session?.user ? (
          <div className="flex-center gap-3 md:gap-9">
            <Link href="/shop" className="logo_text">
              Shop
            </Link>
            <Link href="/orders" className="logo_text">
              Orders
            </Link>

            <Link href="/coupons" className="logo_text">
              Coupons
            </Link>
            <Link href="/cart" className="black_btn">
              Cart
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/shop">
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          <div className="flex-center gap-3 md:gap-9">
            <Link href="/shop" className="logo_text">
              Shop
            </Link>
            <SignInButton />
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="relative flex sm:hidden">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link
                  href="/shop"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Shop
                </Link>
                <Link
                  href="/orders"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Orders
                </Link>

                <Link
                  href="/coupons"
                  className="dropdown_link"
                  onClick={() => setToggleDropdown(false)}
                >
                  Coupons
                </Link>
                <Link href="/cart" className="black_btn">
                  Cart
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="black_btn mt-5 w-full"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex">
            <Image
              src={"/assets/icons/menu.svg"}
              width={37}
              height={37}
              className="rounded-full"
              alt="menu"
              onClick={() => setToggleDropdown(!toggleDropdown)}
              />
              {toggleDropdown && (
                <div className="dropdown">
                  <Link
                    href="/shop"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    Shop
                  </Link>
                  <SignInButton
                    toggleDropdown={toggleDropdown}
                    setToggleDropdown={setToggleDropdown}
                  />
                </div>
              )}
            
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
