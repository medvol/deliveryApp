"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const Orders = () => {
  const { data: session } = useSession();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch(`/api/orders/${session?.user.id}`);
      const orders = await response.json();
      setOrders(orders);
    };

    fetchOrders();
  }, [session?.user.id]);

  return (
    <section className="flex w-full flex-col items-center gap-2 md:gap-8">
      <h2 className="subtitle_text blue_gradient font-satoshi">Orders</h2>
      <ul className="flex w-full flex-col  gap-2 md:gap-4">
        {orders.map((order) => (
          <li
            key={order._id}
            className=" flex  w-full flex-1 break-inside-avoid flex-row items-center justify-between gap-2 rounded-lg border border-b border-gray-300  bg-white/20 bg-clip-padding p-4 backdrop-blur-lg backdrop-filter md:gap-3"
          >
            <p className="md:text-md basis-1/3  text-center font-inter text-sm">
              {order._id}
            </p>
            <ul className="flex w-full basis-1/2 items-center justify-between gap-1 font-inter">
              {order.items.map((item) => (
                <li key={item._id}>
                  <p className="md:text-md  basis-1/3  font-inter text-sm">
                    {item.name},
                  </p>
                </li>
              ))}
            </ul>
            <p className="md:text-md basis-1/6  text-center font-inter text-sm">
              {new Date(order.createdAt).toLocaleDateString()}
            </p>
            <p className="d:text-md  flex basis-1/6 items-center justify-center font-inter text-sm">
              {order.totalAmount} <span>&nbsp;hrn</span>
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Orders;
