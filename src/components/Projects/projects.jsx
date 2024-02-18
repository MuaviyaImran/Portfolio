import Link from "next/link";
import projectsData from "@/data/projects";
export default function Projects() {
  return (
    <section id="projects">
      <div className="grid justify-center text-center">
        <h1 className="text-center font-extrabold text-[32px] mt-10 mb-12 py-2 px-4 text-black border border-gray-600 w-fit rounded-xl">
          My Projects
        </h1>
      </div>
      <div className="grid lg:grid-cols-6 w-fit text-center grid-rows-1 gap-5 lg:mx-5 lg:gap-2">
        {projectsData.map(({ title, link }) => {
          return (
            <Link key={title} href={link}>
              <div className="col-span-1 font-bold border-blue-700 px-3 border-4 rounded-2xl h-full w-full flex-wrap bg-gray-400 bg-clip-padding backdrop-blur-sm bg-opacity-10 hover:animate-bounce text-center items-center flex justify-center shadow-2xl shadow-blue-500/20 py-2">
                {title}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
