import { Card } from "@/components/ui/card";
import LogoIcon from "@/assets/logo.svg";

import MagicButton from "@/components/button";
import MobileNavbar from "@/components/header/mobile-navbar";
import DesktopNavbar from "@/components/header/desktop-navbar";

export const Header = () => {
  return (
    <header className="sticky top-0 z-10 mx-auto max-w-2xl border-b border-white/15 py-4 backdrop-blur md:border-0 md:backdrop-blur-none">
      <Card className="container border-0 md:rounded-xl md:border md:p-2.5 md:backdrop-blur-lg">
        <div className="flex items-center justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15">
            <LogoIcon className="h-8 w-8" />
          </div>
          <DesktopNavbar />
          <div className="flex items-center space-x-4">
            <MagicButton text="Join waitlist" />
            <MobileNavbar />
          </div>
        </div>
      </Card>
    </header>
  );
};
