"use client";
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

  console.log(shops);

  return (
    <ul>
      {shops.map((shop) => (
        <li key={shop._id}>
          <p>{shop.name}</p>
          <p>{shop.address}</p>
        </li>
      ))}
    </ul>
  );
}

export default ShopsList;
