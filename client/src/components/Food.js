import React from "react";
import { BiSolidHeart } from "react-icons/bi";
import add from "../assets/add.png";


export default function Food({ food }) {
  return (
    <div
      key={food.id}
      className="bg-white p-2.5 rounded-2xl max-w-[400px] mx-auto shadow-2xl group text-gray-700"
    >
      <div className="flex justify-center items-center relative">
        <img
          src={food.img}
          alt={food.name}
          className="w-96 h-80 object-cover rounded-2xl"
        />
        <button className="flex justify-center items-center absolute top-3 right-3 h-10 w-10 bg-white/[.75] rounded-full">
          <BiSolidHeart color="red" size={20} className="text-white" />
        </button>
        <button className="bottom-3 right-3 absolute h-10 w-10 bg-white/[.8] rounded-full p-1.5 hidden group-hover:block">
          <img src={add} alt="order" />
        </button>
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">{food.name}</h1>
          <p className="font-[500]">${food.price}</p>
        </div>
        <p className="font-bold text-gray-500 mt-3">{food.country}</p>
      </div>
    </div>
  );
}
