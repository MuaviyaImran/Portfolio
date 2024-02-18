"use client";

export default function Experience() {
  return (
    <section id="experience" className="my-6 ">
      <div className="grid justify-center ">
        <h1 className="text-center font-extrabold text-[32px] mt-10 mb-12 py-2 px-4 text-black border border-gray-600 w-fit rounded-xl">
          My Experience
        </h1>
      </div>
      <div className="grid md:grid-cols-2 h-fit grid-rows-1">
        <div className="col-span-1 md:border-r-2 border-black">
          <div className="border-t-4 border-black border-dotted my-8 p-6 ">
            <h1 className="text-left text-xl font-bold ">Systems Limited</h1>
            <p className="text-center p-3 font-light">Aug 2021 - Oct 2021</p>
            <p className="text-center p-3 font-semibold ">
              Salesforce Developer (Backend Intern)
            </p>
            <div className="text-center p-3 hover:text-[18px]">
              <ul>
                <li>
                  📚 Worked as a Backend Developer on SFRA E-Commerce Website "Everything But Water". 🚀
                </li>
                <li>
                  💻 Created Efficient code blocks
                  ✨
                </li>
                <li>
                  🤝 Collaborated effectively for high-quality app delivery,
                  improving teamwork and communication 🤗
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:border-l-2 border-black h-fit">
          <div className="border-t-4 border-black border-dotted md:mt-[8rem] p-6 ">
            <h1 className="text-left text-xl font-bold ">Shayan Solutions</h1>
            <p className="text-center p-3 font-light">April 2023 - July 2023</p>
            <p className="text-center p-3 font-semibold ">
              MERN Stack Developer Intern
            </p>
            <div className="text-center p-3 hover:text-[18px]">
              <ul>
                <li>
                  📝 Contributed to an article generator AI website, focusing development 🌟
                </li>
                <li>
                  💻 Implemented user-friendly and visually appealing interfaces
                  to enhance user experience 🎨
                </li>
                <li>
                  🤝 Collaborated with the team to ensure the seamless
                  integration of Client side components with backend. 🤗
                </li>
              </ul>
            </div>
          </div>{" "}
        </div>
      </div>
    </section>
  );
}
