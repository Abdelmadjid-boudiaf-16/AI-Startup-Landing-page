"use client";
import React, { Dispatch, SetStateAction, useRef } from "react";
import { Card } from "../ui/card";
import {
  DotLottiePlayer,
  DotLottieCommonPlayer,
} from "@dotlottie/react-player";
type Props = {
  icon: string;
  title: string;
  isNew: boolean;
  index: number;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  selected: boolean;
};
import BorderAnimation from "@/components/border-animation";

const FeatureTab = ({
  icon,
  title,
  isNew,
  index,
  setCurrentIndex,
  selected,
}: Props) => {
  const dadRef = useRef<HTMLDivElement>(null);

  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);
  const handleTabHover = () => {
    if (dotLottieRef.current === null) return;
    dotLottieRef.current.seek(0);
    dotLottieRef.current.play();
  };

  return (
    <Card
      className="relative flex items-center space-x-2.5 rounded-xl p-2.5"
      onMouseEnter={handleTabHover}
      ref={dadRef}
      onClick={() => {
        setCurrentIndex(index);
      }}
    >
      {selected && <BorderAnimation dadRef={dadRef} />}
      <Card className="flex h-12 w-12 items-center justify-center rounded-lg">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={icon}
          style={{ height: "20px", width: "20px" }}
          color="#8C44FF"
          className={`${selected ? "text-[#8C44FF]/70" : ""}`}
        />
      </Card>
      <p className="font-medium">{title}</p>
      {isNew && (
        <span className="rounded-full bg-[#8C44FF] px-2 py-0.5 font-semibold text-black">
          new
        </span>
      )}
    </Card>
  );
};

export default FeatureTab;
