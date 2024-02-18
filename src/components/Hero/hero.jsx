"use client";
import React from "react";
export default function Hero() {
  return (
    <section className="">
      <div className="lg:grid lg:grid-cols-2 justify-center">
        <div className="col-span-1 lg:my-9 my-1">
          <h1 className="font-bold lg:text-[32px] text-[20px] my-4 text-center lg:text-left">
            Hi! I am
          </h1>

          <div
            className="flex flex-col justify-center items-center bg-cover bg-clip-text bg-center uppercase text-transparent lg:text-7xl text-[26px] text-center lg:text-left font-extrabold tracking-wide antialiased my-4"
            style={{
              backgroundImage:
                "url(https://media.giphy.com/media/xTiTniuHdUjpOlNo1q/source.gif)",
            }}
          >
            Muaviya Imran
          </div>
          <p className="lg:text-left font-extrabold text-center">
            A Full Stack Web and Mobile Application Developer
          </p>
        </div>

        <div className="col-span-1 grid  h-min-fit justify-center ">
          <div className="flex justify-center w-[90%] h-[60%] lg:w-full lg:h-full lg:grid">
            <img src="./Saly-10.png" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
}
