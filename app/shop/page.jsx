"use client";
import { useState, useEffect } from "react";
import ShopsList from "@components/ShopsList";
import FoodCard from "@components/FoodCard";

const Shop = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      const response = await fetch(`/api/foods`);
      const data = await response.json();

      setFoods(data);
    };
    fetchFoods();
  }, []);

  return (
    <section className="flex w-full flex-row items-start gap-2 md:gap-8 pt-12">
      <ShopsList />
      <FoodCard foods={foods} />
    </section>
  );
};

export default Shop;
