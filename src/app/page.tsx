"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const bannerRight = useRef<HTMLDivElement | null>(null);
  const bannerLeft = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => {
        console.warn("Video autoplay failed:", err);
      });
    }
  }, []);

  useEffect(() => {
    gsap.set([bannerRight.current, bannerLeft.current], {
      x: "0%",
    });

    const tl = gsap.timeline({
      defaults: {
        delay: 0.5,
        duration: 2,
        ease: "power3.inOut",
        stagger: 1,
        smoothOrigin: true,
      },
    });

    tl.to(
      bannerRight.current,
      {
        x: "100%",
        duration: 3,
      },
      "2"
    );

    tl.to(
      bannerLeft.current,
      {
        x: "-100%",
        duration: 3,
      },
      "2"
    );

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <>
      {/* <section>
        <div className="w-full h-[100vh] overflow-hidden flex items-center justify-center ">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="w-screen h-[125vh] object-cover"
          >
            <source src="/m.mp4" type="video/mp4" />
          </video>
        </div>
      </section> */}

      <section>
        <div className="w-full h-[100vh] overflow-hidden flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="w-2/3 lg:w-1/3 h-[80%] rounded-t-full overflow-hidden relative flex z-[3]">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[1]">
                <Image
                  width={1000}
                  height={1000}
                  src="/image.jpg"
                  alt=""
                  className="w-full h-full object-contaain rounded-t-full absolute top-0 left-0 z-[1]"
                />
              </div>
              <div
                ref={bannerLeft}
                className="w-1/2 h-screen bg-white absolute top-[-1] left-0 z-[2]"
              ></div>
              <div
                ref={bannerRight}
                className="w-1/2 h-screen bg-white absolute top-[-1] right-0 z-[2]"
              ></div>
            </div>
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-evenly z-[3] mix-blend-difference">
              <div className="h-full flex items-center justify-evenly flex-col">
                <h1 className="font-cormorant-garamond text-2xl lg:text-6xl text-white italic tracking-tight">
                  Har bir iforda o‘ziga xoslik <br /> Biz bilan go‘zallikni his
                  eting!
                </h1>
                <p></p>
              </div>
              <div className="h-full flex items-center justify-between flex-col">
                <p></p>
                <h1 className="mb-14 font-cormorant-garamond text-2xl lg:text-6xl text-white italic tracking-tight">
                  Nafosat va joziba <br /> har bir tomchisida!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-10 hidden">
        <div className="container">
          <h1 className="text-6xl font-bold">WOMEN</h1>
          <div className="mt-10 w-full flex gap-5">
            <div className="w-[40%]">
              <div className="w-full h-[700px] overflow-hidden rounded-t-[100%]">
                <img
                  className="w-full h-full object-cover"
                  src="/image.jpg"
                  alt=""
                />
              </div>
              <div className="mt-2 flex justify-between items-center">
                <h3 className="text-3xl">CHANEL</h3>
                <p className="text-2xl">1 000 000 USZ</p>
              </div>
            </div>
            <div className="w-[60%] grid grid-cols-3 grid-rows-2 flex-col gap-5">
              <div className="w-full h-full">
                <div className="w-[250px] h-[320px] overflow-hidden rounded-t-[100%]">
                  <img
                    className="w-full h-full object-cover"
                    src="/image.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <h3 className="text-base">BLEU DE CHANEL</h3>
                  <p className="text-base">1 000 000 USZ</p>
                </div>
              </div>
              <div>
                <div className="w-full h-full">
                  <div className="w-full h-[320px] overflow-hidden rounded-t-[100%]">
                    <img
                      className="w-full h-full object-cover"
                      src="/image.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <h3 className="text-base">BLEU DE CHANEL</h3>
                    <p className="text-base">1 000 000 USZ</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full h-full">
                  <div className="w-full h-[320px] overflow-hidden rounded-t-[100%]">
                    <img
                      className="w-full h-full object-cover"
                      src="/image.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <h3 className="text-base">BLEU DE CHANEL</h3>
                    <p className="text-base">1 000 000 USZ</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-full h-[320px] overflow-hidden rounded-t-[100%]">
                  <img
                    className="w-full h-full object-cover"
                    src="/image.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <h3 className="text-base">BLEU DE CHANEL</h3>
                  <p className="text-base">1 000 000 USZ</p>
                </div>
              </div>
              <div>
                <div>
                  <div className="w-full h-[320px] overflow-hidden rounded-t-[100%]">
                    <img
                      className="w-full h-full object-cover"
                      src="/image.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <h3 className="text-base">BLEU DE CHANEL</h3>
                    <p className="text-base">1 000 000 USZ</p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="w-full h-[320px] overflow-hidden rounded-t-[100%]">
                    <img
                      className="w-full h-full object-cover"
                      src="/image.jpg"
                      alt=""
                    />
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <h3 className="text-base">BLEU DE CHANEL</h3>
                    <p className="text-base">1 000 000 USZ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-10">
        <div className="container">
          <h1 className="text-4xl lg:text-6xl font-bold">MENS</h1>
          <div className="mt-5 lg:mt-10 w-full grid grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="w-full h-full">
              <div className="w-full h-[180px] lg:h-[400px] overflow-hidden rounded-t-[100%]">
                <img
                  className="w-full h-full object-cover"
                  src="/image.jpg"
                  alt=""
                />
              </div>
              <div className="mt-2 flex flex-col items-center justify-between">
                <h3 className="text-[14px] lg:text-xl">CHANEL</h3>
                <p className="text-[14px] lg:text-xl">1 000 000 USZ</p>
              </div>
            </div>
            <div className="w-full h-full mt-5 lg:mt-10">
              <div className="w-full h-[180px] lg:h-[400px] overflow-hidden rounded-t-[100%]">
                <img
                  className="w-full h-full object-cover"
                  src="/image.jpg"
                  alt=""
                />
              </div>
              <div className="mt-2 flex flex-col items-center justify-between ">
                <h3 className="text-[14px] lg:text-xl">BLEU DE CHANEL</h3>
                <p className="text-[14px] lg:text-xl">1 000 000 USZ</p>
              </div>
            </div>
            <div className="w-full h-full">
              <div className="w-full h-[180px] lg:h-[400px] overflow-hidden rounded-t-[100%]">
                <img
                  className="w-full h-full object-cover"
                  src="/image.jpg"
                  alt=""
                />
              </div>
              <div className="mt-2 flex flex-col items-center justify-between">
                <h3 className="text-[14px] lg:text-xl">CHANEL</h3>
                <p className="text-[14px] lg:text-xl">1 000 000 USZ</p>
              </div>
            </div>
            <div className="w-full h-full mt-5 lg:mt-10">
              <div className="w-full h-[180px] lg:h-[400px] overflow-hidden rounded-t-[100%]">
                <img
                  className="w-full h-full object-cover"
                  src="/image.jpg"
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

      <section className="w-full mt-10">
        <div className="container">
          <h1 className="text-4xl lg:text-6xl font-bold">TREND</h1>
          <div className="mt-5 lg:mt-10 w-full flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-[25%] flex lg:flex-col gap-5">
              <div className="w-full h-full lg:mt-10">
                <div className="w-full h-[180px] lg:h-[400px] overflow-hidden rounded-t-[100%]">
                  <img
                    className="w-full h-full object-cover"
                    src="/image.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-2 flex flex-col items-center justify-between">
                  <h3 className="text-[14px] lg:text-xl">CHANEL</h3>
                  <p className="text-[14px] lg:text-xl">1 000 000 USZ</p>
                </div>
              </div>
              <div className="w-full h-full lg:mt-10">
                <div className="w-full h-[180px] lg:h-[400px] overflow-hidden rounded-t-[100%]">
                  <img
                    className="w-full h-full object-cover"
                    src="/image.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-2 flex flex-col items-center justify-between">
                  <h3 className="text-[14px] lg:text-xl">CHANEL</h3>
                  <p className="text-[14px] lg:text-xl">1 000 000 USZ</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[50%] h-full">
              <div className="w-full h-full lg:mt-20">
                <div className="w-full h-[380px] lg:h-[780px] overflow-hidden rounded-t-[100%]">
                  <img
                    className="w-full h-full object-cover"
                    src="/image.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-2 flex flex-col items-center justify-between">
                  <h3 className="text-xl">BLEU DE CHANEL</h3>
                  <p className="text-xl">1 000 000 USZ</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[25%] flex lg:flex-col gap-5">
              <div className="w-full h-full lg:mt-10">
                <div className="w-full h-[180px] lg:h-[400px] overflow-hidden rounded-t-[100%]">
                  <img
                    className="w-full h-full object-cover"
                    src="/image.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-2 flex flex-col items-center justify-between">
                  <h3 className="text-[14px] lg:text-xl">CHANEL</h3>
                  <p className="text-[14px] lg:text-xl">1 000 000 USZ</p>
                </div>
              </div>
              <div className="w-full h-full lg:mt-10">
                <div className="w-full h-[180px] lg:h-[400px] overflow-hidden rounded-t-[100%]">
                  <img
                    className="w-full h-full object-cover"
                    src="/image.jpg"
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
        </div>
      </section>

      <section className="w-full mt-10">
        <div className="container">
          <h1 className="text-4xl lg:text-6xl font-bold">TREND</h1>
          <div className="mt-5 lg:mt-10 w-full flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-[25%] flex lg:flex-col gap-5">
              <div className="w-full h-full lg:mt-10">
                <div className="w-full h-[180px] lg:h-[400px] overflow-hidden rounded-t-[100%]">
                  <img
                    className="w-full h-full object-cover"
                    src="/image.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-2 flex flex-col items-center justify-between">
                  <h3 className="text-[14px] lg:text-xl">CHANEL</h3>
                  <p className="text-[14px] lg:text-xl">1 000 000 USZ</p>
                </div>
              </div>
              <div className="w-full h-full lg:mt-10">
                <div className="w-full h-[180px] lg:h-[400px] overflow-hidden rounded-t-[100%]">
                  <img
                    className="w-full h-full object-cover"
                    src="/image.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-2 flex flex-col items-center justify-between">
                  <h3 className="text-[14px] lg:text-xl">CHANEL</h3>
                  <p className="text-[14px] lg:text-xl">1 000 000 USZ</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[50%] h-full">
              <div className="w-full h-full lg:mt-20">
                <div className="w-full h-[380px] lg:h-[780px] overflow-hidden rounded-t-[100%]">
                  <img
                    className="w-full h-full object-cover"
                    src="/image.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-2 flex flex-col items-center justify-between">
                  <h3 className="text-xl">BLEU DE CHANEL</h3>
                  <p className="text-xl">1 000 000 USZ</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[25%] flex lg:flex-col gap-5">
              <div className="w-full h-full lg:mt-10">
                <div className="w-full h-[180px] lg:h-[400px] overflow-hidden rounded-t-[100%]">
                  <img
                    className="w-full h-full object-cover"
                    src="/image.jpg"
                    alt=""
                  />
                </div>
                <div className="mt-2 flex flex-col items-center justify-between">
                  <h3 className="text-[14px] lg:text-xl">CHANEL</h3>
                  <p className="text-[14px] lg:text-xl">1 000 000 USZ</p>
                </div>
              </div>
              <div className="w-full h-full lg:mt-10">
                <div className="w-full h-[180px] lg:h-[400px] overflow-hidden rounded-t-[100%]">
                  <img
                    className="w-full h-full object-cover"
                    src="/image.jpg"
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
        </div>
      </section>
    </>
  );
}
