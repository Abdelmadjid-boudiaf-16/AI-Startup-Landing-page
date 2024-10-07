"use client";
import { Card } from "@/components/ui/card";
import ProductImg from "@/assets/product-image.png";

import Image from "next/image";
import FeatureTab from "@/components/features/feature-tab";
import { useState } from "react";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
  },
];

export const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-center text-[48px] font-medium tracking-[-1px] md:text-[60px]">
          Elevate your SEO efforts.
        </h2>
        <p className="mx-auto max-w-[672px] pt-5 text-center text-lg leading-7 text-white/70 md:text-xl">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div>
          <div className="grid grid-cols-1 gap-3 pt-10 lg:grid-cols-3">
            {tabs.map((tab, index) => (
              <FeatureTab
                key={index}
                {...tab}
                index={index}
                selected={index === currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
            ))}
          </div>
          <div className="pt-3">
            {" "}
            <Card className="h-[190px] rounded-[12px] p-2.5 md:h-[418px] lg:h-[593px]">
              <Card className="aspect-video h-full overflow-hidden rounded-[8px] bg-cover">
                <Image src={ProductImg} alt="product image" priority />
              </Card>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
