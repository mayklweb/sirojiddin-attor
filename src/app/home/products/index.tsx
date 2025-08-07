"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);

function Products() {
  const images = Array(9).fill("/parfume.png");


  useEffect(() => {
    const parfumes = gsap.utils.toArray<HTMLElement>(".parfume");

    parfumes.forEach((parfume, index) => {
      gsap.from(parfume, {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: parfume,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
    });

    gsap.fromTo(
      ".info-blur",
      {
        filter: "blur(10px)",
        opacity: 0,
      },
      {
        filter: "blur(0px)",
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".info-blur",
          start: "top bottom",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section className="w-full">
      <div className="container">
        <div className="mt-20 flex flex-col gap-40 lg:gap-60">
          <div className="w-full lg:w-[100%] flex lg:flex-col gap-5 items-center relative">
            <h1
              className="w-full lg:w-[1120px] text-[#00311f] text-4xl lg:text-8xl font-cormorant-garamond text-center italic tracking-tighter info-blur"
            >
              Sizning iforingiz — bu siz haqingizdagi birinchi taassurot va eng
              oxirgi eslatma.
            </h1>
          </div>
          <div className=" grid grid-cols-3 gap-5 lg:gap-10">
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
                  <Link className="w-full h-full" href={`/product`}>
                    <Image
                      priority={false}
                      loading="lazy"
                      width={200}
                      height={400}
                      src={src}
                      alt="perfume"
                      className="w-full h-full object-cover" />
                  </Link>
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
