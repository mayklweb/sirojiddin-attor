"use client";
import gsap from "gsap";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

function Banner() {
  const imageRef = useRef<HTMLImageElement | null>(null);
  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    gsap.fromTo(
      image,
      {
        clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)",
      },
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power3.inOut",
        duration: 3,
        scrollTrigger: {
          trigger: image,
          start: "top center",
          end: "bottom top",
          toggleActions: "restart none none none",
        },
      }
    );

    gsap.fromTo(
      ".blur-target",
      { filter: "blur(10px)", opacity: 0 },
      { filter: "blur(0px)", opacity: 1, duration: 3, ease: "power3.out" }
    );
  }, []);

  return (
    <section>
      <div className="w-full h-[100vh] overflow-hidden flex items-center justify-center">
        <div className="w-full h-full flex items-center lg:items-end justify-center relative">
          <div className="w-10/12 lg:w-1/3 h-[60%] lg:h-[80%] rounded-t-full overflow-hidden relative flex z-[3]">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[1]">
              {/* <Link href="/product"> */}
              <Image
                priority={false}
                loading="lazy"
                ref={imageRef}
                width={1000}
                height={1000}
                src="/parfume.png"
                alt=""
                className="w-full h-full object-contaain rounded-t-full absolute top-0 left-0 z-[1]"
              />
              {/* </Link> */}
            </div>
          </div>
          <div className="w-full h-full absolute top-0 left-0 flex flex-col lg:flex-row items-center justify-around z-[3] mix-blend-difference">
            <div className="h-full flex items-center justify-evenly flex-col">
              <h1 className="font-cormorant-garamond text-4xl text-center lg:text-6xl rounded-full inline-block text-white italic tracking-tight blur-target">
                Har bir iforda o‘ziga xoslik <br /> Biz bilan go‘zallikni his
                eting!
              </h1>
              <p></p>
            </div>
            <div className="h-full flex items-center justify-between flex-col">
              <p></p>
              <h1 className="hidden lg:block mb-14 text-center font-cormorant-garamond text-2xl lg:text-6xl text-white italic tracking-tight blur-target">
                Nafosat va joziba <br /> har bir tomchisida!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
