import MagicButton from "@/components/button";
import Planet from "@/components/planet";
import SectionWrapper from "@/components/wrappers/sectionWrapper";

export const Hero = () => {
  return (
    <SectionWrapper className="relative flex h-[492px] items-center justify-center overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] md:h-[800px]">
      <Planet />
      <div className="container relative h-[320px]">
        <h1 className="mt-16 bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] bg-clip-text text-center text-8xl font-semibold tracking-tighter text-transparent md:text-[168px]">
          AI SEO
        </h1>
        <p className="mx-auto my-5 max-w-xl text-center text-lg text-white/70 md:text-xl">
          Elevate your site&apos;s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center">
          <MagicButton text="Join waitlist" />
        </div>
      </div>
    </SectionWrapper>
  );
};
