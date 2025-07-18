"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Products() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const images = Array(9).fill("/parfume.png");

  useEffect(() => {
    const parfumes = gsap.utils.toArray<HTMLElement>(".parfume");

    parfumes.forEach((parfume, index) => {
      gsap.from(parfume, {
        scale: 1.1,
        opacity: 0,
        duration: 1.6,
        ease: "power3.out",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: parfume,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <section className="w-full">
      <div className="container">
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10">
          {images.map((src, index) => {
            const col = isMobile ? index % 3 : index % 4;

            let translateClass = "";

            if (isMobile) {
              // 3 columns on mobile
              if (col === 0) translateClass = "-translate-y-1/4";
              else if (col === 1) translateClass = "translate-y-1/4";
              else translateClass = "-translate-y-1/4";
            } else {
              // 4 columns on desktop
              if (col === 0) translateClass = "translate-y-1/4";
              else if (col === 1) translateClass = "-translate-y-1/4";
              else if (col === 2) translateClass = "translate-y-1/4";
              else translateClass = "-translate-y-1/4";
            }

            return (
              <div
                key={index}
                className={`bg-white rounded-full overflow-hidden flex items-center justify-center shadow-lg transform ${translateClass} parfume`}
              >
                <img
                  src={src}
                  alt="perfume"
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
