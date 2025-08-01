"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);

function Products() {
  const images = Array(9).fill("/parfume.png");


  useEffect(() => {
    const parfumes = gsap.utils.toArray<HTMLElement>(".parfume");

    parfumes.forEach((parfume, index) => {
      gsap.from(parfume, {
        scale: 1.1,
        opacity: 0,
        duration: 1.6,
        ease: "power3.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: parfume,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section className="w-full">
      <div className="container">
        <div className="mb-20">
          <div className="grid grid-cols-3 gap-5 lg:gap-10">
            {images.map((src, index) => {
              const columnCount = 3;
              const col = index % columnCount;
              let translateClass = "";

              if (columnCount === 3) {
                if (col === 0) translateClass = "-translate-y-1/6";
                else if (col === 1) translateClass = "translate-y-1/6";
                else if (col === 2) translateClass = "-translate-y-1/6";
                else translateClass = "translate-y-1/6";
              }

              return (
                <div
                  key={index}
                  className={`parfume bg-white rounded-full overflow-hidden flex items-center justify-center shadow-lg transform ${translateClass}`}
                >
                  <Image width={200} height={400} src={src} alt="perfume" className="w-full h-full object-cover" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
