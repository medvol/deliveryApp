"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

function ShopsList() {
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
    <asside className="basis-1/5 md:basis-1/4">
      <ul className="p-4">
        {shops.map((shop) => (
          <li key={shop._id} className="shop_link py-6 cursor-pointer">
            <div className=" flex items-center  gap-2 mb-1">
              <Image src={shop.logo} alt={shop.name} width={30} height={30} />
              <p>{shop.name}</p>
            </div>

            <p>{shop.address}</p>
          </li>
        ))}
      </ul>
    </asside>
  );
}

export default ShopsList;
