import acmeLogo from "@/assets/logo-acme.png";
import pulseLogo from "@/assets/logo-pulse.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import apexLogo from "@/assets/logo-apex.png";
import quantumLogo from "@/assets/logo-quantum.png";
import MarqueeWrapper from "@/components/wrappers/marquee-wrapper";
export const LogoTicker = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div className="flex items-center space-x-5">
          <div className="flex-1 md:flex-none">
            <h2 className="w-full text-[16px]">
              Trusted by top innovative teams
            </h2>
          </div>
          <div className="flex flex-1 items-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <MarqueeWrapper className="flex flex-none -translate-x-1/2 items-center space-x-14 overflow-hidden pr-14">
              {[
                acmeLogo,
                pulseLogo,
                echoLogo,
                celestialLogo,
                apexLogo,
                quantumLogo,
                acmeLogo,
                pulseLogo,
                echoLogo,
                celestialLogo,
                apexLogo,
                quantumLogo,
              ].map((logo, index) => (
                <div key={index} className="h-6 w-auto">
                  <img
                    src={logo.src}
                    alt={logo.src}
                    className="h-full w-full"
                  />
                </div>
              ))}
            </MarqueeWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
