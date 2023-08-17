import Link from "next/link";

export default function Projects() {
  return (
    <section id="projects">
      <div className="grid justify-center text-center">
        <h1 className="text-center font-extrabold text-[32px] mt-10 mb-12 py-2 px-4 text-black border border-gray-600 w-fit rounded-xl">
          My Projects
        </h1>
      </div>
      <div className="grid lg:grid-cols-6 w-fit text-center grid-rows-1 gap-5 lg:mx-5 lg:gap-2">
        <Link href="https://github.com/MuaviyaImran">
          <div className="col-span-1 font-bold border-blue-700 px-3 border-4 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce text-center items-center flex justify-center shadow-2xl shadow-blue-500/20 py-2">
            Flutter Chat App
          </div>
        </Link>

        <Link href="https://github.com/MuaviyaImran/E_Learning_NextJS_Mongo">
          <div className="col-span-1 font-bold border-blue-700 px-3 border-4 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce text-center shadow-2xl shadow-blue-500/20 items-center flex justify-center py-2">
            E-Learning Management Web
          </div>
        </Link>

        <Link href="https://github.com/MuaviyaImran/depression_detection">
          <div className="col-span-1 items-center flex justify-center px-3 font-bold border-blue-700 border-4 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce text-center shadow-2xl shadow-blue-500/20 py-2">
            Depression Detection AI Web
          </div>
        </Link>
        <Link href="https://github.com/MuaviyaImran">
          <div className="col-span-1 items-center flex justify-center px-3 border-blue-700 border-4 rounded-2xl h-full w-full bg-gray-400 font-bold bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce text-center shadow-2xl shadow-blue-500/20 py-2">
            Flutter E-Commerce App
          </div>
        </Link>
        <Link href="https://github.com/MuaviyaImran">
          <div className="col-span-1 items-center flex justify-center px-3  border-blue-700 border-4 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce  font-bold text-center shadow-2xl shadow-blue-500/20 py-2 ">
            PFFT AI Article Generator
          </div>
        </Link>
        <Link href="https://github.com/MuaviyaImran/FYP-NewsApp">
          <div className="col-span-1 items-center flex justify-center px-3 font-bold border-blue-700 border-4 rounded-2xl h-full w-full bg-gray-400 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce text-center shadow-2xl shadow-blue-500/20 py-2">
            Flutter News Feed App
          </div>
        </Link>
      </div>
    </section>
  );
}
