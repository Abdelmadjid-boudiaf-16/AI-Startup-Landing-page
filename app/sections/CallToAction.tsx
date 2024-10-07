"use client";
import MagicButton from "@/components/button";

import gridLines from "@/assets/grid-lines.png";
import starsBg from "@/assets/stars.png";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const divRef = useRef<RefObject<RefObject<HTMLDivElement>>>(null);
  const useRelativeMousePosition = (to: RefObject<HTMLDivElement>) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
      const updateMousePosition = (e: MouseEvent) => {
        if (!to.current) return null;
        const { top, left } = to.current.getBoundingClientRect();
        mouseX.set(e.x - left);
        mouseY.set(e.y - top);
      };
      window.addEventListener("mousemove", updateMousePosition);
      return () => {
        window.removeEventListener("mousemove", updateMousePosition);
      };
    }, [mouseX, mouseY, to]);
    return [mouseX, mouseY];
  };
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300],
  );
  const [mouseX, mouseY] = useRelativeMousePosition(divRef);
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px,black,transparent)`;
  return (
    <section className="py-20 md:py-24" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={divRef}
          className="group relative overflow-hidden rounded-xl border border-white/20 py-20 md:py-24"
          style={{
            backgroundPositionY: backgroundPositionY,
            backgroundImage: `url(${starsBg.src})`,
          }}
          animate={{
            backgroundPositionX: starsBg.width,
          }}
          transition={{
            repeat: Infinity,
            duration: 120,
            ease: "linear",
          }}
        >
          <div
            className="absolute inset-0 bg-[#4A208A] bg-blend-overlay transition-all duration-500 [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0"
            style={{
              backgroundImage: `url(${gridLines.src})`,
            }}
          ></div>
          <motion.div
            className="absolute inset-0 bg-[#4A208A] opacity-0 bg-blend-overlay transition-all duration-500 group-hover:opacity-100"
            style={{ maskImage, backgroundImage: `url(${gridLines.src})` }}
          ></motion.div>
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
        </motion.div>
      </div>
    </section>
  );
};
