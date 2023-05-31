"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function ShopsList({ handleClick, shopId }) {
  const [shops, setShops] = useState([]);
  useEffect(() => {
    const fetchShops = async () => {
      const response = await fetch(`/api/shops`);
      const data = await response.json();

      setShops(data);
    };
    fetchShops();
  }, []);
  

  return (
    <>
      {shops.length > 1 && (
        <aside className="basis-1/3 rounded-md border border-gray-300 bg-white/20 bg-clip-padding p-2 pb-5 backdrop-blur-lg backdrop-filter md:basis-1/5 md:p-1">
          <ul className="p-4">
            {shops.map((shop) => (
              <li key={shop._id} className="shop_link  cursor-pointer  py-4 ">
                <button
                  className="flex  cursor-pointer items-center gap-2 disabled:opacity-60"
                  disabled={shopId === null ? false : shop._id !== shopId}
                  onClick={() => {
                    handleClick(shop._id);
                  }}
                >
                  <Image
                    src={shop.logo}
                    alt={shop.name}
                    width={30}
                    height={30}
                    className="rounded"
                  />
                  <p className="md:text-md hidden text-center font-inter text-xs md:block">
                    {shop.name}
                  </p>
                </button>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </>
  );
}

export default ShopsList;
