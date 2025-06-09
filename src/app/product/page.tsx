import React from "react";
import Image from "next/image";

export default function Product() {
  return (
    <section className="w-full">
      <div className="container">
        <div className="flex flex-col gap-2">
          <div className="w-full h-[360px] rounded-t-[100%] overflow-hidden">
            <Image
              width={280}
              height={360}
              className="w-full h-full "
              src="/image.jpg"
              alt="Product Image"
            />
          </div>
          <div>
            <h1 className="text-xl">Mercedes Benz Woman In Red</h1>
            <p className="">650 000 USZ</p>
            <button className="w-full h-10 bg-[#090909]">SAVATGA</button>
          </div>
          <div>
            <h3>opisaniya</h3>
          </div>
          <div>
            <h1>recommended</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
