import React from "react";
import { useSelector } from "react-redux";
import { animated, useSpring } from "react-spring";
import data from "../data.json";
import Food from "./Food";

export default function Foods() {
  const store = useSelector((state) => state);
  console.log(store);
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {data.map((food, index) => (
        <AnimatedProduct key={food.id} index={index} food={food} />
      ))}
    </div>
  );
}

const AnimatedProduct = ({ index, food }) => {
  const animationProps = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-150px)" },
    delay: index * 200,
  });

  return (
    <animated.div style={animationProps}>
      <Food food={food} />
    </animated.div>
  );
};
