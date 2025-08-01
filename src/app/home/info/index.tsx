"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Info() {

  useEffect(() => {
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
    <section className="w-full mt-10 relative ">
      <div className="container">
        <div className="mt-5 lg:mt-20 w-full h-full flex flex-col items-center gap-24 bg-[#fdfdfd]">
          <div className="w-full lg:w-[100%] flex lg:flex-col gap-5 items-center relative mix-blend-difference">
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
