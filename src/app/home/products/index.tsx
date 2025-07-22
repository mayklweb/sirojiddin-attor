"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProductsDesktop from "./components/ProductsDesktop";
import ProductsMobile from "./components/ProductsMobile";
gsap.registerPlugin(ScrollTrigger);

function Products() {
  const [isMobile, setIsMobile] = useState(false);


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
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  return (
    <section className="w-full">
      <div className="container">
        <ProductsDesktop />
        <ProductsMobile />
      </div>
    </section>
  );
}

export default Products;
