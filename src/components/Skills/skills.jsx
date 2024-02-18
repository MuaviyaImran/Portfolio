"use client";
import skillsData from "@/data/skills";
export default function MySkills() {
  return (
    <section className="mb-10 mt-24">
      <div className="grid justify-center">
        <h1 className="text-center font-extrabold text-[32px] mt-10 mb-12 py-2 px-4 text-black border border-gray-600 w-fit rounded-xl">
          My Skills
        </h1>
      </div>

      <div className="grid lg:grid-cols-5 xl:grid-cols-8 grid-cols-2 s:grid-cols-2 md:grid-cols-4 lg:gap-3 grid-rows-1 sm:gap-5 gap-2 items-center justify-center">
        {skillsData.map(({ title, icon }) => {
          return (
            <div
              key={title}
              className="lg:col-span-1 p-5  border-blue-700 border-4 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce grid justify-center cursor-pointer"
            >
              <img src={icon} />
              <span className="flex justify-center items-center">{title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
