"use client";

import Image from "next/image";
import React from "react";

function CartItem({ order, handleIncrement, handleDecrement, handleDelete }) {
  return (
    <li className=" flex h-fit w-full flex-1 break-inside-avoid flex-row items-center justify-between gap-2 rounded-lg border border-b border-gray-300  bg-white/20 bg-clip-padding p-2 pb-2 backdrop-blur-lg backdrop-filter md:gap-3">
      <div className="aspect-square w-[50px] shrink-0  md:w-[120px]">
        <Image
          src={order.image}
          alt={order.name}
          width={120}
          height={120}
          className="h-30 w-30  rounded-xl object-cover"
        />
      </div>
      <p className="basis-1/3 font-inter text-lg font-semibold text-black/[0.8] md:text-2xl">
        {order.name}
      </p>
      <p className=" basis-1/6 font-inter text-base font-semibold text-black/[0.8] md:text-xl">
        {order.price}
      </p>
      <div className="black_btn basis-1/6">
        <button
          className="px-1 font-inter text-base font-semibold md:text-base"
          onClick={() => handleDecrement(order._id)}
        >
          -
        </button>
        <p className="px-3 font-inter text-base font-semibold md:text-base">
          {order.quantity}
        </p>
        <button
          className="px-1 font-inter text-base font-semibold md:text-base"
          onClick={() => handleIncrement(order._id)}
        >
          +
        </button>
      </div>
      <button
        className="basis-1/6 font-inter"
        onClick={() => handleDelete(order._id)}
      >
        Delete
      </button>
    </li>
  );
}

export default CartItem;
