"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const Coupons = () => {
  const [coupons, setCoupons] = useState([]);
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const fetchCoupons = async () => {
      const response = await fetch(`/api/coupons`);
      const data = await response.json();

      setCoupons(data);
    };
    fetchCoupons();
  }, []);

  const handleCopy = (value) => {
    setCopied(value.code);
    navigator.clipboard.writeText(value.code);

    localStorage.setItem("discount", JSON.stringify(value));
    setTimeout(() => setCopied(false), 5000);
  };
  return (
    <section className="flex w-full flex-col items-center gap-2 md:gap-8">
      <h2 className="subtitle_text blue_gradient font-satoshi">Coupons</h2>
      <ul className="flex flex-row gap-4 ">
        {coupons.map((coupon) => (
          <li key={coupon.id} className="food_card p-2">
            <p className="px-2 py-5 font-satoshi font-semibold text-gray-900">
              {coupon.description}
            </p>
            <div className="flex flex-row items-center justify-between gap-4 p-2">
              <p className="font-inter text-sm text-gray-500">{coupon.code}</p>
              <div className="copy_btn" onClick={() => handleCopy(coupon)}>
                <Image
                  src={
                    copied === coupon.code
                      ? "/assets/icons/tick.svg"
                      : "/assets/icons/copy.svg"
                  }
                  alt={copied === coupon.code ? "tick_icon" : "copy_icon"}
                  width={12}
                  height={12}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Coupons;
