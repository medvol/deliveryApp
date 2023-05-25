import React from "react";
import Image from "next/image";

function FoodCard({ foods }) {
  return (
    <ul className="grid  grid-cols-1 gap-4 p-2 md:grid-cols-3 md:p-8">
      {foods.map((food) => (
        <li key={food._id} className="food_card">
          <Image
            src={food.image}
            alt={food.name}
            width={250}
            height={250}
            className="mb-5 h-56 w-56 rounded-xl object-fill"
          />
          <div className="mb-5 flex items-center justify-between px-2">
            {" "}
            <p>{food.name} </p>
            <p>{food.price} hrn</p>
          </div>
          <div className="flex justify-end">
            <button className="black_btn">Add to card</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FoodCard;
