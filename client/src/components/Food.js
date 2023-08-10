import React from "react";
import { BiSolidHeart } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
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
          className="w-96 h-72 object-cover rounded-2xl"
        />
        <button className="flex justify-center items-center absolute top-3 right-3 h-10 w-10 bg-white/[.75] rounded-full">
          <BiSolidHeart color="red" size={20} className="text-white" />
        </button>
        <button
          className="bottom-3 right-3 absolute p-1.5 hidden group-hover:flex justify-between items-center
         px-5 bg-black/[.75] gap-x-3 rounded-lg text-white font-[500]"
        >
          <span>ORDER NOW</span>
          <img
            src={add}
            alt="order"
            className="h-10 w-10 bg-white/[.8] rounded-full p-1"
          />
        </button>
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">{food.name}</h1>
          <p className="font-[500]">${food.price}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-bold text-gray-500 my-1">{food.country}</p>
          <p
            className={
              food.isAvailable
                ? "text-green-500 text-sm font-[500]"
                : "text-red-500 text-sm font-[500]"
            }
          >
            {food.isAvailable ? "Available" : "Not Available"}
          </p>
        </div>
        <div className="text-slate-500">
          <div className="flex items-center gap-x-1">
            <GoLocation />
            <p>{food.restaurant.name}</p>
          </div>
          <p className="mt-1 text-xs">{food.restaurant.address}</p>
        </div>
      </div>
    </div>
  );
}
