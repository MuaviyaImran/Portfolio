"use client";
import React from "react";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";
import footerData from "@/data/footer.js";

export default function Footer() {
  const icons = [FaMailBulk, FaLinkedin, FaGithub];
  return (
    <section className="lg:flex lg:justify-evenly py-5 px-5">
      {footerData.map(({ title, link }, index) => {
        const Icon = icons[index];
        return (
          <div key={title} className="flex items-center py-2">
            <Icon size="1.5em " />
            <Link
              className="text-center lg:px-2  font-bold px-4 lg:text-[16px] xl:text-lg text-xs md:text-md py-1"
              href={link}
            >
              {title}
            </Link>
          </div>
        );
      })}
    </section>
  );
}
