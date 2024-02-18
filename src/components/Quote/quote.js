"use client";
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import "animate.css";

export default function Quote() {
  return (
    <div className="md:grid md:grid-cols-2 md:mt-20 md:visible hidden">
      <animated.div className="col-span-1">
        <img src="./quoteimg.png" alt="Quote" />
      </animated.div>

      <animated.div className="col-span-1 mt-20">
        <h3 className="text-center md:text-[38px] text-[20px] font-extrabold text-blue-950 md:mt-10  p-6 md:p-0">
          From Novice to Navigator - Embarking on a Development Journey Fueled
          by Curiosity.
        </h3>
      </animated.div>
    </div>
  );
}
