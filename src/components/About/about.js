"use client";

export default function AboutMe() {
  return (
    <section id="about" className="my-6 ">
      <div className="grid justify-center ">
        <h1 className="text-center font-extrabold text-[32px] mt-10 mb-12 py-2 px-4 text-black border border-gray-600 w-fit rounded-xl ">
          About Me
        </h1>
      </div>
      <div className="grid grid-rows-1 ">
        <div className="row-span-1 grid justify-center rounded-full h-50 w-50 mb-8 ">
          <img
            src="./image.png"
            className="rounded-full"
            height={250}
            width={250}
          />
        </div>

        <div className="row-span-1 text-center text-[18px] p-6 hover:text-[20px]">
        🎉Tech Adventurer Seeks Thrills! 🚀 I'm on a quest for a role that lets me wield my coding prowess like a ninja in a high-tech dojo. With experience in Salesforce intrigue, mobile app magic, and MERN & Next-JS enchantments, I'm ready to conquer challenges. My toolbox includes C++, Flutter, React-JS, SFRA, and more, while my projects have spanned SFRA site genesis, MAD Flutter feats, and AI-powered Next-JS marvels. Let's join forces and make the digital world a playground of wonders! 🌟
        </div>
      </div>
    </section>
  );
}
