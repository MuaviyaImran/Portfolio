import Link from "next/link";
import React from "react";
import { FaLinkedin, FaGithub, FaHome, FaPhone, FaInfo } from "react-icons/fa";

export default function Navbar() {
  return (
    <section className="lg:flex lg:justify-evenly lg:py-10 py-5">
      <div className="flex hover:animate-pulse animate__animated animate__bounce px-6 lg:px-0 py-3 lg:py-0">
        <FaHome size="1.5em " />
        <Link href="/" legacyBehavior>
          <a className="text-center lg:px-2  font-bold px-4 lg:text-lg text-sm">
            Home
          </a>
        </Link>
      </div>
      <div className="flex hover:animate-pulse  animate__animated animate__bounce px-6 lg:px-0 py-3 lg:py-0">
        <FaInfo size="1.3em " />
        <Link href="#about" legacyBehavior className="text-center">
          <a className="text-center lg:px-2  font-bold px-4 lg:text-lg text-sm">
            About
          </a>
        </Link>
      </div>
      <div className=" flex hover:animate-pulse  animate__animated animate__bounce px-6 lg:px-0 py-3 lg:py-0">
        <FaPhone size="1.2em" />
        <Link href="#contact-me" legacyBehavior className="text-center">
          <a className="text-center lg:px-2  font-bold px-4 lg:text-lg text-sm">
            Contact Me
          </a>
        </Link>
      </div>
      <div className="flex hover:animate-pulse  animate__animated animate__bounce px-6 lg:px-0 py-3 lg:py-0">
        <FaLinkedin size="1.5em " />
        <Link
          href="https://www.linkedin.com/in/muaviya-imran-4749a7215/"
          legacyBehavior
          className="text-center"
        >
          <a className="text-center lg:px-2  font-bold px-4 lg:text-lg text-sm">
            LinkedIn
          </a>
        </Link>
      </div>
      <div className="flex hover:animate-pulse  animate__animated animate__bounce px-6 lg:px-0 py-3 lg:py-0">
        <FaGithub size="1.5em " />
        <Link
          href="https://github.com/MuaviyaImran"
          legacyBehavior
          className="text-center "
        >
          <a className="text-center lg:px-2  font-bold px-4 lg:text-lg text-sm">
            Github
          </a>
        </Link>
      </div>
    </section>
  );
}
