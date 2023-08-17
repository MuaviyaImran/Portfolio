"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="lg:flex lg:justify-evenly py-5 px-5">
      <div className="flex hover:animate-pulse animate__animated animate__bounce cursor-pointer py-2">
        <FaMailBulk size="1.5em " />
        <a className="text-center lg:px-2  font-bold px-4 lg:text-[16px] xl:text-lg text-xs md:text-md py-1">
          muaviyaimran1122@gmail.com
        </a>
      </div>
      <div className="flex hover:animate-pulse animate__animated animate__bounce py-2">
        <FaLinkedin size="1.5em " />
        <Link
          href="https://www.linkedin.com/in/muaviya-imran-4749a7215/"
          legacyBehavior
          className="text-center"
        >
          <a className="text-center lg:px-2  font-bold px-4 lg:text-[16px] xl:text-lg text-xs md:text-md py-1">
            https://www.linkedin.com/in/muaviya-imran-4749a7215/
          </a>
        </Link>
      </div>
      <div className="flex hover:animate-pulse animate__animated animate__bounce py-2">
        <FaGithub size="1.5em " />
        <Link
          href="https://github.com/MuaviyaImran"
          legacyBehavior
          className="text-center "
        >
          <a className="text-center lg:px-2  font-bold px-4 lg:text-[16px] xl:text-lg text-xs md:text-md py-1">
            https://github.com/MuaviyaImran
          </a>
        </Link>
      </div>
    </section>
  );
}
