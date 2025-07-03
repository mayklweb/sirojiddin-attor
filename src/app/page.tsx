"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((err) => {
        console.warn("Video autoplay failed:", err);
      });
    }
  }, []);

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
  }, []);

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

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

  return (
    <>
      <section>
        <div className="w-full h-[100vh] overflow-hidden flex items-center justify-center">
          <div className="w-full h-full flex items-center lg:items-end justify-center relative">
            <div className="w-10/12 lg:w-1/3 h-[60%] lg:h-[80%] rounded-t-full overflow-hidden relative flex z-[3]">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[1]">
                <Image
                  ref={imageRef}
                  width={1000}
                  height={1000}
                  src="/image.jpg"
                  alt=""
                  className="w-full h-full object-contaain rounded-t-full absolute top-0 left-0 z-[1]"
                />
              </div>
            </div>
            <div className="w-full h-full absolute top-0 left-0 flex flex-col lg:flex-row items-center justify-evenly z-[3] mix-blend-difference">
              <div className="h-full flex items-center justify-evenly flex-col">
                <div className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <svg
                    width="600"
                    height="600"
                    viewBox="0 0 600 600"
                    className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                  >
                
                    <defs>
                      <path
                        id="halfArc"
                        d="M 130,0 A 110,190 0 0,1 480,210"
                        fill="none"
                      />
                    </defs>
                    <text
                      className="w-full h-full"
                      fill="#fff"
                      fontSize="44"
                      fontFamily="'Cormorant Garamond', serif"
                      textAnchor="middle"
                    >
                      <textPath
                        href="#halfArc"
                        startOffset="50%"
                        textLength="580"
                      >
                        Go‘zallik ifori bilan boshlanadi.
                      </textPath>
                    </text>
                  </svg>
                </div>
                {/* <h1 className="font-cormorant-garamond text-4xl text-center lg:text-6xl rounded-full inline-block text-white italic tracking-tight">
                  Go‘zallik ifori bilan boshlanadi.
                  Har bir iforda o‘ziga xoslik <br /> Biz bilan go‘zallikni his
                  eting!
                </h1> */}
                <p></p>
              </div>
              <div className="h-full flex items-center justify-between flex-col">
                <p></p>
                <h1 className="mb-14 text-center font-cormorant-garamond text-2xl lg:text-6xl text-white italic tracking-tight">
                  Nafosat va joziba <br /> har bir tomchisida!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="overflow-hidden w-full py-10 bg-white border-y-[1px] border-[#E6D8AD]">
          <div ref={containerRef} className="flex w-max gap-10 ">
            {/* ✅ Duplicate logos to loop */}
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="logo-item w-[200px] h-[80px] shrink-0 flex items-center justify-center"
              >
                <Image
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

      {/* <section className="w-full mt-10 hidden">
        <div className="container">
          <h1 className="text-6xl font-bold">WOMEN</h1>
          <div className="mt-10 w-full flex gap-5">
            <div className="w-[40%]">
              <div className="w-full h-[700px] overflow-hidden rounded-t-full">
                <img
                  className="w-full h-full object-cover"
                  src="/image.jpg"
                  alt=""
                />
              </div>
              <div className="mt-2 flex justify-between items-center text-[#E6D8AD]">
                <h3 className="text-3xl text-[#E6D8AD]">CHANEL</h3>
                <p className="text-2xl">1 000 000 USZ</p>
              </div>
            </div>
            <div className="w-[60%] grid grid-cols-3 grid-rows-2 flex-col gap-5">
              <div className="w-full h-full">
                <div className="w-[250px] h-[320px] overflow-hidden rounded-t-full">
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
                  <div className="w-full h-[320px] overflow-hidden rounded-t-full">
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
                  <div className="w-full h-[320px] overflow-hidden rounded-t-full">
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
                <div className="w-full h-[320px] overflow-hidden rounded-t-full">
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
                  <div className="w-full h-[320px] overflow-hidden rounded-t-full">
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
                  <div className="w-full h-[320px] overflow-hidden rounded-t-full">
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
      </section> */}

      <section className="w-full mt-10">
        <div className="container">
          <h1 className="text-4xl lg:text-6xl font-bold">MENS</h1>
          <div className="mt-5 lg:mt-10 w-full grid grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="w-full h-full">
              <div className="w-full h-[180px] lg:h-[400px] overflow-hidden rounded-t-full">
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
              <div className="w-full h-[180px] lg:h-[400px] overflow-hidden rounded-t-full">
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
              <div className="w-full h-[180px] lg:h-[400px] overflow-hidden rounded-t-full">
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
              <div className="w-full h-[180px] lg:h-[400px] overflow-hidden rounded-t-full">
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
          {/* <h1 className="text-4xl lg:text-6xl font-bold">TREND</h1> */}
          <div className="mt-5 lg:mt-10 w-full flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-[100%] flex lg:flex-col gap-5 items-center">
              <h1 className="w-[1024px] text-4xl font-cormorant-garamond text-center italic">
                Parfyum — bu inson tanasiga, kiyimiga yoki atrof-muhitga yoqimli
                hid berish uchun ishlatiladigan suyuqlik bo‘lib, u turli xildagi
                efir moylari, aromatik birikmalar, erituvchilar (odatda spirt),
                va suvdan iborat bo‘ladi. Uning asosiy vazifasi – hid orqali
                kayfiyatni ko‘tarish, xotiralarni uyg‘otish yoki shaxsiy uslubni
                ifodalashdir.
              </h1>
            </div>

            {/* <div className="w-full lg:w-[30%] h-[380px] lg:h-[620px] overflow-hidden rounded-t-full">
              <img
                className="w-full h-full object-cover"
                src="/image.jpg"
                alt=""
              />
            </div>

            <div className="w-full lg:w-[35%] flex lg:flex-col gap-5">
              <h1 className="text-5xl font-cormorant-garamond text-justify italic">
                Parfyumdan foydalanish tarixi qadimgi Misr, Hindiston va
                Mesopotamiya davrlariga borib taqaladi. Dastlab u diniy
                marosimlarda, keyinchalik esa qirollik zodagonlari orasida
                ishlatilgan. Yevropada parfyum ayniqsa Frantsiyada mashhur
                bo‘lgan, va hozir ham Frantsiya dunyodagi eng yirik parfyumeriya
                markazlaridan biri hisoblanadi.
              </h1>
            </div> */}
          </div>
        </div>
      </section>

      <section className="w-full mt-10">
        <div className="container">
          <h1 className="text-4xl lg:text-6xl font-bold">TREND</h1>
          <div className="mt-5 lg:mt-10 w-full flex flex-col lg:flex-row gap-5">
            <div className="w-full lg:w-[30%] flex lg:flex-col gap-5">
              <div className="w-full h-full lg:mt-10">
                <div className="w-full h-[180px] lg:h-[500px] overflow-hidden rounded-t-full">
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
                <div className="w-full h-[180px] lg:h-[500px] overflow-hidden rounded-t-full">
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
            <div className="w-full lg:w-[40%] h-full flex items-center justify-center">
              <div className="w-full h-full lg:mt-20 flex items-center justify-center flex-col">
                <div className="w-full h-[380px] lg:h-[720px] overflow-hidden rounded-t-full">
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
            <div className="w-full lg:w-[30%] flex lg:flex-col gap-5">
              <div className="w-full h-full lg:mt-10">
                <div className="w-full h-[180px] lg:h-[500px] overflow-hidden rounded-t-full">
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
                <div className="w-full h-[180px] lg:h-[500px] overflow-hidden rounded-t-full">
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
