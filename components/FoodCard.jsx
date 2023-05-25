import React from "react";
import Image from "next/image";

function FoodCard({ foods }) {
  return (
    <ul>
      {foods.map((food) => (
        <li key={food._id}>
          <p>{food.name}</p>
          <p>{food.price}</p>
          <Image src={food.image} alt={food.name} width={250} height={250} />
        </li>
      ))}
    </ul>
  );
}

export default FoodCard;
