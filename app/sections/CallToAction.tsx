import MagicButton from "@/components/button";

import gridLines from '@/assets/grid-lines.png'
import starsBg from '@/assets/stars.png'

export const CallToAction = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <div
          className="relative overflow-hidden rounded-xl border border-white/20 py-20 md:py-24"
          style={{
            backgroundImage: `url(${starsBg.src})`,
          }}
        >
          <div
            className="absolute inset-0 bg-[#4A208A] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{ backgroundImage: `url(${gridLines.src})` }}
          ></div>
          <div className="relative">
            <h2 className="text-center text-5xl font-medium tracking-[-1px] md:text-6xl">
              AI-driven SEO for everyone.
            </h2>
            <p className="mx-auto max-w-[320px] px-4 pt-5 text-center text-lg leading-7 text-white/70 md:text-xl">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="mx-auto w-fit py-5">
              <MagicButton text="Join waitlist" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
