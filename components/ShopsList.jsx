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
    <asside className="food_card basis-1/5 md:basis-1/4">
      <ul className="p-4">
        {shops.map((shop) => (
          <li
            key={shop._id}
            className="shop_link cursor-pointer py-6"
            onClick={() => handleClick(shop._id)}
          >
            <button
              className=" mb-1 flex  cursor-pointer items-center gap-2"
              disabled={null ? false : shop._id !== shopId}
            >
              <Image
                src={shop.logo}
                alt={shop.name}
                width={30}
                height={30}
                className="rounded"
              />
              <p>{shop.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </asside>
  );
}

export default ShopsList;
