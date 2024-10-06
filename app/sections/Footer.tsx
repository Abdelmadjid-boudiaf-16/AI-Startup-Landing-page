import LogoIcon from "@/assets/logo.svg";
import XLogo from "@/assets/social-x.svg";
import InstagramLogo from "@/assets/social-instagram.svg";
import YoutubeLogo from "@/assets/social-youtube.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";
const linkList = [
  {
    link: "features",
    path: "/",
  },
  {
    link: "developers",
    path: "/",
  },
  {
    link: "company",
    path: "/",
  },
  {
    link: "Blog",
    path: "/",
  },
  {
    link: "changelog",
    path: "/",
  },
];
export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/15">
      <div className="container">
        <div className="flex w-[320px] flex-col px-5 lg:w-full lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center space-x-2">
            <LogoIcon className="h-6 w-6" />
            <h1 className="text-sm">AI Startup Landing Page</h1>
          </div>
          <ul className="flex flex-col gap-5 pt-8 lg:flex-row lg:items-center lg:pt-0">
            {linkList.map((item, idx) => (
              <li key={idx} className="list-none">
                <Link
                  href={item.path}
                  className={cn(
                    "text-xs text-white/70 transition-colors duration-300 hover:text-white md:text-sm",
                  )}
                >
                  {item.link}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center space-x-5 pt-8 lg:pt-0">
            <li className="list-none">
              <Link
                href={"/"}
                className={cn(
                  "text-white/40 transition-colors duration-300 hover:text-white",
                )}
              >
                <XLogo className="h-6 w-6" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                href={"/"}
                className={cn(
                  "text-white/40 transition-colors duration-300 hover:text-white",
                )}
              >
                <InstagramLogo className="h-6 w-6" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                href={"/"}
                className={cn(
                  "text-white/40 transition-colors duration-300 hover:text-white",
                )}
              >
                <YoutubeLogo className="h-6 w-6" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
