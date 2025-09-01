"use client";
import { useState, useEffect } from "react";
import { About, Address, Banner, Brands, Categories, Info, Products } from "./home";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3 sekund kutadi
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center fixed z-[100] bg-white">
          <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="font-aboreto text-lg lg:text-4xl text-[#]">
              SIROJIDDIN
            </h1>
            <p className="font-aboreto text-lg lg:text-4xl text-[#030303]">
              ATTOR
            </p>
          </div>
      </div>
    );
  }

  return (
    <>
      <Banner />
      <Brands />
      <Categories />
      <Info />
      <Products />
      <About />
      <Address />
    </>
  );
}
