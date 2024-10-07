"use client";
import {
  animate, motion,
  useMotionTemplate,
  useMotionValue,
  ValueAnimationOptions
} from "framer-motion";
import React, { useEffect } from "react";

const BorderAnimation = ({
  dadRef,
}: {
  dadRef: React.RefObject<HTMLDivElement>;
}) => {
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);
  const maskImage = useMotionTemplate`radial-gradient(180px 80px at ${xPercentage}% ${yPercentage}%, black, transparent)`;
  useEffect(() => {
    if (!dadRef.current) return;
    const { height, width } = dadRef.current?.getBoundingClientRect();
    const circumference = height * 2 + width * 2;
    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];
    const options1: ValueAnimationOptions = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
      keyframes: [0, 100, 100, 0, 0],
    };
    const options2: ValueAnimationOptions = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
      keyframes: [0, 0, 100, 100, 0],
    };
    animate(xPercentage, [0, 100, 100, 0, 0], options1);
    animate(yPercentage, [0, 0, 100, 100, 0], options2);
  }, [xPercentage, yPercentage, dadRef]);
  return (
    <motion.div
      className="absolute inset-0 -m-px rounded-xl border border-[#8C44FF]"
      style={{ maskImage }}
    ></motion.div>
  );
};

export default BorderAnimation;
