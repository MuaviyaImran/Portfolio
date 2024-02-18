import Link from "next/link";
import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaHome,
  FaPhone,
  FaInfoCircle,
} from "react-icons/fa";
import navbarData from "@/data/navbar.js";
export default function Navbar() {
  const icons = [FaHome, FaInfoCircle, FaPhone, FaLinkedin, FaGithub];

  return (
    <section className="md:flex md:justify-evenly lg:py-10 py-5">
      {navbarData.map(({ title, link }, index) => {
        const Icon = icons[index];
        return (
          <div
            key={title}
            className="flex items-center px-6 lg:px-0 py-3 lg:py-0"
          >
            <Icon size="1.5em" />
            <Link
              href={link}
              className="text-center lg:px-2 font-bold px-4 lg:text-lg text-sm"
            >
              {title}
            </Link>
          </div>
        );
      })}
    </section>
  );
}
