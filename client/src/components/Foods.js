import React from "react";
import data from "../data.json";
import Food from "./Food";

export default function Foods() {
  return (
    <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {data.map((food) => (
        <Food key={food.id} food={food} />
      ))}
    </div>
  );
}
