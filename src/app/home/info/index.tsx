"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

function Info() {
  const infoImgRef = useRef<HTMLImageElement | null>(null);
  const infoTextRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "center bottom",
        end: "+=800",
        scrub: true,
        pin: true,
      },
      smoothChildTiming: true,
    });

    tl.to(infoTextRef.current, { zIndex: 2, duration: 1 });

    tl.fromTo(
      infoImgRef.current,
      { y: 0, scale: 1 },
      { y: -450, scale: 1.5, zIndex: 1, duration: 1 },
      "-=0.6"
    );
  }, []);

  return (
    <section className="w-full mt-10 relative ">
      <div className="container">
        <div
          ref={sectionRef}
          className="mt-5 lg:mt-20 w-full h-full flex flex-col items-center gap-24 bg-[#fdfdfd]"
        >
          <div className="w-full lg:w-[100%] flex lg:flex-col gap-5 items-center relative z-50 mix-blend-difference">
            <h1
              ref={infoTextRef}
              className="w-full lg:w-[1120px] text-white text-4xl lg:text-8xl font-cormorant-garamond text-center italic tracking-tighter"
            >
              Sizning iforingiz — bu siz haqingizdagi birinchi taassurot va eng
              oxirgi eslatma.
            </h1>
          </div>

          <div className="flex items-center justify-center">
            <div
              ref={infoImgRef}
              className="w-9/10 lg:w-[325px] h-[360px] lg:h-[480px] overflow-hidden rounded-full "
            >
              <Image
                width={300}
                height={400}
                className="w-full h-full object-cover"
                src="/parfume.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
