"use client";
import { Card } from "@/components/ui/card";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import ProductImg from "@/assets/product-image.png";

import Image from "next/image";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-center text-[48px] font-medium tracking-[-1px] md:text-[60px]">
          Elevate your SEO efforts.
        </h2>
        <p className="mx-auto max-w-[672px] pt-5 text-center text-lg md:text-xl leading-7 text-white/70">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div>
          <div className="grid grid-cols-1 gap-3 pt-10 lg:grid-cols-3">
            {tabs.map((tab, index) => (
              <Card
                className="flex items-center space-x-2.5 rounded-lg p-2.5"
                key={index}
              >
                <Card className="flex h-12 w-12 items-center justify-center rounded-lg">
                  <DotLottieReact
                    src={tab.icon}
                    autoplay
                    speed={0.7}
                    className="h-5 w-5"
                  />
                </Card>
                <p className="font-medium">{tab.title}</p>
                {tab.isNew && (
                  <span className="rounded-full bg-[#8C44FF] px-2 py-0.5 font-semibold text-black">
                    new
                  </span>
                )}
              </Card>
            ))}
          </div>
          <div className="pt-3">
            {" "}
            <Card className="h-[190px] rounded-[12px] p-2.5 md:h-[418px] lg:h-[593px]">
              <Card className="aspect-video rounded-[8px] bg-cover overflow-hidden h-full">
                <Image src={ProductImg} alt="product image"  priority />
              </Card>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
