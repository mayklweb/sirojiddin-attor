"use client";
import gsap from "gsap";
import { useEffect, useMemo, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Products() {
  const [isMobile, setIsMobile] = useState<boolean>(false);


  const images = useMemo(() => {
    return isMobile ? Array(9).fill("/parfume.png") : Array(8).fill("/parfume.png");
  }, [isMobile]);

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
  }, [images]);

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
      let translateClass = "";

      if (isMobile) {
        const col = index % 3;
        if (col === 0) translateClass = "-translate-y-1/4";
        else if (col === 1) translateClass = "translate-y-1/4";
        else translateClass = "-translate-y-1/6";
      }

      else {
        const col = index % 4;
        if (col === 0) translateClass = "-translate-y-1/4";
        else if (col === 1) translateClass = "translate-y-1/4";
        else if (col === 2) translateClass = "-translate-y-1/4";
        else translateClass = "translate-y-1/4";
      }

      return (
        <div
          key={index}
          className={`bg-white rounded-full overflow-hidden flex items-center justify-center shadow-lg ${translateClass}`}
        >
          <img src={src} alt="perfume" className="w-full h-full object-cover" />
        </div>
      );
    })}
      </div>
    </div>
  </section>
  );
}

export default Products;
