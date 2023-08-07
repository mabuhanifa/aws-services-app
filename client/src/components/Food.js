import React from "react";
import { BiSolidHeart } from "react-icons/bi";
import order from '../assets/add.png';

export default function Food({ food }) {
  return (
    <div
      key={food.id}
      className="bg-white p-3 rounded-2xl max-w-[400px] mx-auto"
    >
      <div className="flex justify-center items-center relative ">
        <img
          src={food.img}
          alt={food.name}
          className="w-96 h-80 object-cover rounded-2xl"
        />
        <div className="flex justify-center items-center absolute top-3 right-3 h-10 w-10 bg-white/[.75] rounded-full">
          <BiSolidHeart color="red" size={20} className="text-white" />
        </div>
        <div className="bottom-3 right-3 absolute h-10 w-10 bg-white/[.7] rounded-full p-1">
            <img src={order} alt="order" />
        </div>
      </div>
      <h1>{food.name}</h1>
      <p>{food.country}</p>
      <p>{food.price}</p>
      <hr />
      <button>Add to Cart</button>
      <hr />
      <button>Buy Now</button>
    </div>
  );
}
