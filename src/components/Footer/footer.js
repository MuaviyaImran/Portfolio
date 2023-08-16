"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="flex justify-evenly py-5">
      <div className="flex hover:animate-pulse animate__animated animate__bounce cursor-pointer">
        <FaMailBulk size="1.5em " />
        <a className="text-center px-2 font-bold">muaviyaimran1122@gmail.com</a>
      </div>
      <div className="flex hover:animate-pulse animate__animated animate__bounce">
        <FaLinkedin size="1.5em " />
        <Link
          href="https://www.linkedin.com/in/muaviya-imran-4749a7215/"
          legacyBehavior
          className="text-center"
        >
          <a className="text-center px-2 font-bold">
            https://www.linkedin.com/in/muaviya-imran-4749a7215/
          </a>
        </Link>
      </div>
      <div className="flex hover:animate-pulse animate__animated animate__bounce">
        <FaGithub size="1.5em " />
        <Link
          href="https://github.com/MuaviyaImran"
          legacyBehavior
          className="text-center "
        >
          <a className="text-center px-2 font-bold">
            https://github.com/MuaviyaImran
          </a>
        </Link>
      </div>
    </section>
  );
}
