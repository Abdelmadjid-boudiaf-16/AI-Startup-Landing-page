import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import MarqueeWrapper from "@/components/wrappers/marquee-wrapper";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-center text-[48px] font-medium tracking-[-1px] md:text-[60px]">
          Beyond Expectations.
        </h2>
        <p className="mx-auto max-w-[672px] pt-5 text-center text-lg leading-7 text-white/70 md:text-xl">
          Our revolutionary AI SEO tools have transformed our clients'
          strategies.
        </p>
        <div>
          <div className="flex items-center overflow-hidden pt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <MarqueeWrapper className="flex items-center space-x-5">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  className="max-w-md flex-none -translate-x-1/2 rounded-xl border border-white/15 bg-[linear-gradient(to_bottom_left,rgb(140,69,255,0.3),black)] p-6 pr-14 md:p-10"
                  key={index}
                >
                  <p className="max-w-xs text-lg tracking-tight md:max-w-sm md:text-2xl">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center space-x-3 pt-5">
                    <Avatar className="relative h-11 w-11 after:absolute after:inset-0 after:bg-[#8C45FF] after:mix-blend-soft-light after:content-['']">
                      <AvatarImage
                        src={testimonial.avatarImg.src}
                        className="grayscale"
                      />
                    </Avatar>
                    <div className="flex flex-col items-start">
                      <h1 className="text-[16px] tracking-tight">
                        {testimonial.name}
                      </h1>
                      <h2 className="text-sm tracking-tight text-white/50">
                        {testimonial.title}
                      </h2>
                    </div>
                  </div>
                </div>
              ))}
            </MarqueeWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};
