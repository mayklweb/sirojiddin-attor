"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const logos = [
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsvCtsMoSgohb1s2BzErTa5aHK2EsKyDZvog&s",
    name: "Logo 1",
    url: "https://example.com/logo1",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCrpA_vzHhtBd6gIDmXqxHVsTDFujxXb3WhQ&s",
    name: "Logo 2",
    url: "https://example.com/logo2",
  },

  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbe9KKiHWbngm9kNhSWZgAQpkpOwlAJ1ze8A&s",
    name: "Logo 3",
    url: "https://example.com/logo3",
  },

  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsvCtsMoSgohb1s2BzErTa5aHK2EsKyDZvog&s",
    name: "Logo 5",
    url: "https://example.com/logo5",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCrpA_vzHhtBd6gIDmXqxHVsTDFujxXb3WhQ&s",
    name: "Logo 6",
    url: "https://example.com/logo6",
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbe9KKiHWbngm9kNhSWZgAQpkpOwlAJ1ze8A&s",
    name: "Logo 7",
    url: "https://example.com/logo7",
  },
];

function Brands() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".logo-item");
      const itemWidth = items[0]?.offsetWidth || 200;
      const totalWidth = itemWidth * items.length;

      // Set initial position
      gsap.set(items, {
        x: (_, i) => i * itemWidth,
      });

      // Infinite loop animation
      gsap.to(items, {
        x: `-=${itemWidth * logos.length}`,
        duration: 20, // slower = smoother
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: (x) => `${parseFloat(x) % totalWidth}px`,
        },
      });
    }, [containerRef]);

    return () => ctx.revert();
  }, []);

  return (
    <section>
      <div className="overflow-hidden w-full py-6 lg:py-10 bg-white border-y-[1px] border-[#E6D8AD]">
        <div ref={containerRef} className="flex w-max gap-5 lg:gap-10">
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="logo-item w-[100px] lg:w-[200px] h-[40px] lg:h-[80px] shrink-0 flex items-center justify-center"
            >
              <Image
                priority={false}
                loading="lazy"
                src={logo.logo}
                alt={`Brand ${idx}`}
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;
