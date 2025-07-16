"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const imageRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const infoImgRef = useRef<HTMLImageElement | null>(null);
  const infoTextRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState<boolean>(false);
 
  const images = Array(8).fill("/parfume.png");


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
      { filter: "blur(100px)", opacity: 0 },
      { filter: "blur(0px)", opacity: 1, duration: 3, ease: "power3.out" }
    );

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

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "60% bottom",
          end: "+=600",
          scrub: true,
          pin: true,
        },
      });

      tl.to(
        infoTextRef.current,
        {  zIndex: 2, duration: 1 }
      );

      tl.fromTo(
        infoImgRef.current,
        { y: 0, scale: 1, },
        { y: -450, scale: 1.5, zIndex: 1, duration: 1 },
        "-=0.6"
      );
    }, [containerRef, sectionRef]);


    const categories = gsap.utils.toArray<HTMLElement>(".category");

    categories.forEach((category, index) => {
      gsap.from(category, {
        // y: 60,
        scale: 1.08,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        delay: index * 0.2,
        scrollTrigger: {
          trigger: category,
          start: "top center",
          toggleActions: "play none none none",
        },
      });
    });


    return () => ctx.revert();

  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);
  

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
                  src="/parfume.png"
                  alt=""
                  className="w-full h-full object-contaain rounded-t-full absolute top-0 left-0 z-[1]"
                />
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
                <h1 className="mb-14 text-center font-cormorant-garamond text-2xl lg:text-6xl text-white italic tracking-tight blur-target">
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
          <div className="mt-5 lg:mt-10 w-full grid grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="w-full h-full category">
              <div className="w-full h-[180px] lg:h-[440px] overflow-hidden rounded-full">
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
            <div className="w-full h-full mt-5 lg:mt-10 category">
              <div className="w-full h-[180px] lg:h-[440px] overflow-hidden rounded-full">
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
            <div className="w-full h-full category">
              <div className="w-full h-[180px] lg:h-[440px] overflow-hidden rounded-full">
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
            <div className="w-full h-full mt-5 lg:mt-10 category">
              <div className="w-full h-[180px] lg:h-[440px] overflow-hidden rounded-full">
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

      <section  className="w-full mt-10 relative ">
        <div className="container">
          <div ref={sectionRef} className="mt-5 lg:mt-20 w-full h-full flex flex-col items-center gap-24 mix-blend-difference">
            <div className="w-full lg:w-[100%] flex lg:flex-col gap-5 items-center">
              <h1 ref={infoTextRef} className="w-full lg:w-[1120px] text-white text-4xl lg:text-8xl font-cormorant-garamond text-center italic tracking-tighter">
              Sizning iforingiz — bu siz haqingizdagi birinchi taassurot va eng oxirgi eslatma.
              </h1>
            </div>

          <div>
            <div ref={infoImgRef} className="w-full lg:w-[325px] h-[380px] lg:h-[480px] overflow-hidden rounded-full ">
              <img
                className="w-full h-full object-cover"
                src="/image.jpg"
                alt=""
                />
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="container">
          {/* <h1 className="text-4xl lg:text-6xl font-bold">TREND</h1> */}
 
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10">
          {images.map((src, index) => {
          let translateClass = "";

          // 👇 Kichik ekranlar uchun (grid-cols-3):
          if (isMobile) {
            const col = index % 3;
            if (col === 0) translateClass = "-translate-y-1/4";
            else if (col === 1) translateClass = "translate-y-1/4";
            else translateClass = "-translate-y-1/6";
          }

          // 👇 Katta ekranlar uchun (grid-cols-4):
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

      <section>
        <div className="container mt-10">
          <div>

          <h1 className="text-[#DAC289] text-center text-6xl font-bold lg:text-6xl font-cormorant-garamond"><span className="italic">ABOUT  </span>  <span>  US</span></h1>
          <div></div>
          </div>
        </div>
      </section>
    </>
  );
}
