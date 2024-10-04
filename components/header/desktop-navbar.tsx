"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
const linkList = [
  {
    link: "features",
    path: "#features",
  },
  {
    link: "developers",
    path: "#developers",
  },
  {
    link: "pricing",
    path: "#pricing",
  },
  {
    link: "changelog",
    path: "#changelog",
  },
];
const DesktopNavbar = () => {
  return (
    <nav className="hidden items-center md:flex">
      <ul className="flex items-center space-x-8">
        {linkList.map((item, idx) => (
          <li key={idx}>
            <Link href={item.path} className={cn("font-medium text-white/40 hover:text-white transition-colors duration-300")}>
              {item.link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
