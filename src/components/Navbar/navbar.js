import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub, FaHome, FaPhone, FaInfo } from "react-icons/fa";

export default function Navbar() {
  return (
    <section className="flex justify-evenly py-10">
      <div className="flex hover:animate-pulse animate__animated animate__bounce">
        <FaHome size="1.5em " />
        <Link href="/" legacyBehavior>
          <a className="text-center px-2 font-bold">Home</a>
        </Link>
      </div>
      <div className="flex hover:animate-pulse  animate__animated animate__bounce">
        <FaInfo size="1.3em " />
        <Link href="#about" legacyBehavior className="text-center">
          <a className="text-center font-bold">About</a>
        </Link>
      </div>
      <div className=" flex hover:animate-pulse  animate__animated animate__bounce">
        <FaPhone size="1.2em" />
        <Link href="#contact-me" legacyBehavior className="text-center">
          <a className="text-center px-2 font-bold">Contact Me</a>
        </Link>
      </div>
      <div className="flex hover:animate-pulse  animate__animated animate__bounce">
        <FaLinkedin size="1.5em " />
        <Link
          href="https://www.linkedin.com/in/muaviya-imran-4749a7215/"
          legacyBehavior
          className="text-center"
        >
          <a className="text-center px-2 font-bold">LinkedIn</a>
        </Link>
      </div>
      <div className="flex hover:animate-pulse  animate__animated animate__bounce">
        <FaGithub size="1.5em " />
        <Link
          href="https://github.com/MuaviyaImran"
          legacyBehavior
          className="text-center "
        >
          <a className="text-center px-2 font-bold">Github</a>
        </Link>
      </div>
    </section>
  );
}
