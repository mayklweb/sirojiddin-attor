import React from "react";
import Image from "next/image";

export default function Product() {
  return (
    <section className="w-full mt-5 lg:mt-10">
      <div className="max-w-[1024px] mx-auto">
        <div className="w-full flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-2/4 h-[80vh] rounded-t-[100%] overflow-hidden">
            <Image
              width={500}
              height={600}
              className="object-cover"
              // className="w-full h-full "
              src="/image.jpg"
              alt="Product Image"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="flex  justify-between">
              <h1 className="text-xl lg:text-4xl">
                Mercedes Benz Woman In Red
              </h1>
              <p className="text-lg lg:text-3xl text-nowrap">650 000 USZ</p>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="border-[1px] border-solid border-black p-4">10</button>
              <button className="border-[1px] border-solid border-black p-4">30</button>
              <button className="border-[1px] border-solid border-black p-4">50</button>
              <button className="border-[1px] border-solid border-black p-4">100</button>
              <button className="border-[1px] border-solid border-black p-4">100+</button>
            </div>
              <button className="mt-4 w-full h-10 lg:h-10 bg-[#090909] text-white flex items-center justify-center pt-2">
                SAVATGA
              </button>
            <div className="mt-4">
              <h2>Характеристики</h2>
              <div>
                <p>тип...............eau de toilette</p>
                <p>аромат...............eau de toilette</p>
                <p>тип...............eau de toilette</p>
              </div>
              Uniseks объем (мл) ml артикул eau de toilette
              <h3>opisaniya</h3>
            </div>

            <div>
              Для весеннего настроения! Текстура Владелец лицензии: Puig Верхние
              ноты Шампанское, фруктовые ноты. Средние ноты Персиковый цвет.
              Низкие ноты Древесные ноты.
            </div>
            <div>
              <h1>recommended</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
