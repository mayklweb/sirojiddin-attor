import Image from "next/image";
import React from "react";

const items = [
  { name: "CHANEL", price: "1 000 000 USZ", img: "/image.jpg" },
  { name: "BLEU DE CHANEL", price: "1 000 000 USZ", img: "/image.jpg" },
  { name: "CHANEL", price: "1 000 000 USZ", img: "/image.jpg" },
  { name: "CHANEL", price: "1 000 000 USZ", img: "/image.jpg" },
  { name: "CHANEL", price: "1 000 000 USZ", img: "/image.jpg" },
  { name: "CHANEL", price: "1 000 000 USZ", img: "/image.jpg" },
  { name: "CHANEL", price: "1 000 000 USZ", img: "/image.jpg" },
  { name: "CHANEL", price: "1 000 000 USZ", img: "/image.jpg" },
  { name: "CHANEL", price: "1 000 000 USZ", img: "/image.jpg" },
  { name: "CHANEL", price: "1 000 000 USZ", img: "/image.jpg" },
];

const ProductCard = ({
  name,
  price,
  img,
}: {
  name: string;
  price: string;
  img: string;
}) => (
  <div className="w-full">
    <div className="w-full h-[70%] overflow-hidden rounded-t-full">
      <Image
        width={300}
        height={400}
        className="w-full h-full object-cover"
        src={img}
        alt={name}
      />
    </div>
    <div className="mt-2 flex flex-col items-center justify-between">
      <h3 className="text-[14px] lg:text-xl">{name}</h3>
      <p className="text-[14px] lg:text-xl">{price}</p>
    </div>
  </div>
);

export default function Collections() {
  return (
    <div className="w-full mt-28">
      <div className="w-full bg-[#00311f] h-[200px]"></div>
      <div className="container">
        <div className="w-full flex mt-10">
          <aside className="w-2/10 hidden lg:block">
            <div>
              <h1 className="font-black text-xl">CATEGORY</h1>
              <div className="pl-2">
                <p>Women</p>
                <p>Mens</p>
                <p>Spring</p>
                <p>Summer</p>
                <p>Winter</p>
                <p>autumn</p>
                <p>Trends</p>
              </div>
            </div>
            {/* <div>
              <h1 className="font-black text-xl">BRENDS</h1>
              <div className="pl-2">
                <p>Dior</p>
                <p>Luis Vitton</p>
                <p>Chanel</p>
                <p>Zara</p>
              </div>
            </div> */}
            <div>
              <h1 className="font-black text-xl">PRICE</h1>
              <div className="pl-2">
                <p>100+</p>
                <p>500+</p>
                <p>DIOR</p>
                <p>DIOR</p>
                <p>DIOR</p>
                <p>DIOR</p>
                <p>DIOR</p>
                <p>DIOR</p>
              </div>
            </div>
          </aside>
          <main className="w-full lg:w-8/10 lg:px-5 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 grid-rows-3">
            {items.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}
