"use client";
import { MenuIcon } from "lucide-react";
import LogoIcon from "@/assets/logo.svg";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
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
const MobileNavbar = () => {
  return (
    <nav className="flex items-center md:hidden">
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader className="flex flex-col p-10 gap-5">
            <SheetTitle>
              <LogoIcon className="h-8 w-8" />
            </SheetTitle>
            <SheetDescription className="flex flex-col gap-3">
              {linkList.map((item, idx) => (
                <li key={idx} className="list-none transition-all duration-500 hover:translate-x-3 hover:scale-105">
                  <Link
                    href={item.path}
                    className={cn(
                      "font-medium text-white/70 transition-colors duration-300 hover:text-white",
                    )}
                  >
                    <SheetTrigger>{item.link}</SheetTrigger>
                  </Link>
                </li>
              ))}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNavbar;
