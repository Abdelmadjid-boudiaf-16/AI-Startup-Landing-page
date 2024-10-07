"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

const MarqueeWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <motion.div
      className={className}
      initial={{
        translateX: "-50%",
      }}
      animate={{
        translateX: "0",
      }}
      transition={{
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MarqueeWrapper;
