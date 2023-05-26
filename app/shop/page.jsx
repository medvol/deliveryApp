"use client";
import { useState, useEffect } from "react";
import ShopsList from "@components/ShopsList";
import FoodCard from "@components/FoodCard";

const Shop = () => {
  const [foods, setFoods] = useState([]);
  const [shopId, setShopId] = useState(null)

  useEffect(() => {
    const fetchFoods = async () => {
      const response = await fetch(`/api/foods`);
      const data = await response.json();

      setFoods(data);
    };
    fetchFoods();
  }, []);

  useEffect(() => {
    if (!shopId) return
    const fetchFoodsbyShop = async () => {
      const response = await fetch(`/api/shops/${shopId}`);
      const data = await response.json();

      setFoods(data);
    };
    fetchFoodsbyShop();
  }, [shopId]);
    
  const handleClick = (id) => {
  
        setShopId(id)
    }

  return (
    <section className="flex w-full flex-row items-start gap-2 pt-12 md:gap-8">
      <ShopsList handleClick={handleClick} shopId={shopId} />
      <FoodCard foods={foods} />
    </section>
  );
};

export default Shop;
