"use client";
import { useState, useEffect } from "react";
import { Banner, About, Address, Brands, Categories, Info, Products } from "./home";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Barcha resurslar yuklanishini kutamiz
    const handleLoad = () => {
      setLoading(false);
      setTimeout(() => setShowContent(true), 100); // smooth transition
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center fixed z-[100] bg-[#00311f]">
        <div className="text-[#E6D8AD] flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="font-aboreto text-2xl lg:text-4xl">SIROJIDDIN</h1>
          <p className="font-aboreto text-2xl lg:text-4xl">
            ATTOR
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`transition-opacity duration-700 ${
        showContent ? "opacity-100" : "opacity-0"
      }`}
    >
      <Banner />
      <Brands />
      <Categories />
      <Info />
      <Products />
      <About />
      <Address />
    </div>
  );
}
