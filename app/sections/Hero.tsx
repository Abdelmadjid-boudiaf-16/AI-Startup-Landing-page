import MagicButton from "@/components/button";
import starsBg from "@/assets/stars.png";
import Planet from "@/components/planet";

export const Hero = () => {
  return (
    <section
      className="relative flex h-[492px] md:h-[800px] justify-center items-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] "
      style={{
        backgroundImage: `url(${starsBg.src})`,
      }}
    >
     <Planet />
      <div className="container relative h-[320px]">
        <h1 className="mt-16 bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] bg-clip-text text-center text-8xl md:text-[168px] font-semibold tracking-tighter text-transparent">
          AI SEO
        </h1>
        <p className="mx-auto my-5 max-w-xl text-center text-lg md:text-xl text-white/70">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center">
          <MagicButton text="Join waitlist" />
        </div>
      </div>
    </section>
  );
};
