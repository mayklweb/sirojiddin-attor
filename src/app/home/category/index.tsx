"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import Image from "next/image";

function Categories() {
  useEffect(() => {
    const categories = gsap.utils.toArray<HTMLElement>(".category");

    categories.forEach((category, index) => {
      gsap.from(category, {
        scale: 1.08,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: category,
          start: "top bottom",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  return (
    <section className="w-full mt-10">
      <div className="container">
        {/* <h1 className="text-4xl lg:text-6xl font-bold">MENS</h1> */}
        <div className="mt-5 lg:mt-10 w-full grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-10">
          <div className="w-full h-full category">
            <div className="w-full h-[240px] lg:h-[440px] overflow-hidden rounded-full">
              <Image
                width={300}
                height={400}
                className="w-full h-full object-cover"
                src="/parfume.png"
                alt=""
              />
            </div>
            <div className="mt-2 flex flex-col items-center justify-between">
              <h3 className="text-[14px] lg:text-xl">CHANEL</h3>
              <p className="text-[14px] lg:text-xl">1 000 000 USZ</p>
            </div>
          </div>
          <div className="w-full h-full mt-5 lg:mt-10 category">
            <div className="w-full h-[240px] lg:h-[440px] overflow-hidden rounded-full">
              <Image
                width={300}
                height={400}
                className="w-full h-full object-cover"
                src="/parfume.png"
                alt=""
              />
            </div>
            <div className="mt-2 flex flex-col items-center justify-between ">
              <h3 className="text-[14px] lg:text-xl">BLEU DE CHANEL</h3>
              <p className="text-[14px] lg:text-xl">1 000 000 USZ</p>
            </div>
          </div>
          <div className="w-full h-full category">
            <div className="w-full h-[240px] lg:h-[440px] overflow-hidden rounded-full">
              <Image
                width={300}
                height={400}
                className="w-full h-full object-cover"
                src="/parfume.png"
                alt=""
              />
            </div>
            <div className="mt-2 flex flex-col items-center justify-between">
              <h3 className="text-[14px] lg:text-xl">CHANEL</h3>
              <p className="text-[14px] lg:text-xl">1 000 000 USZ</p>
            </div>
          </div>
          <div className="w-full h-full mt-5 lg:mt-10 category">
            <div className="w-full h-[240px] lg:h-[440px] overflow-hidden rounded-full">
              <Image
                width={300}
                height={400}
                className="w-full h-full object-cover"
                src="/parfume.png"
                alt=""
              />
            </div>
            <div className="mt-2 flex flex-col items-center justify-between">
              <h3 className="text-[14px] lg:text-xl">CHANEL</h3>
              <p className="text-[14px] lg:text-xl">1 000 000 USZ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
