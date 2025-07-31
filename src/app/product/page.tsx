import React from "react";
import Image from "next/image";

export default function Product() {
  return (
    <section className="w-full mt-5 lg:mt-32">
      <div className="mx-auto px-5">
        <div className="w-full flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[40%] h-[70vh] lg:h-[84vh] rounded-t-full overflow-hidden">
            <Image
              width={500}
              height={600}
              // className="object-cover"
              className="w-full h-full "
              src="/parfume.png"
              alt="Product Image"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div className="w-full flex flex-col gap-4 lg:mt-10">
              <h1 className="text-xl lg:text-5xl">
                Mercedes Benz Woman In Red
              </h1>
              <p className="text-lg lg:text-3xl text-nowrap">650 000 USZ</p>
            </div>

            <div>
              <p>Для весеннего настроения!</p>
              <h2>Характеристики</h2>
              <p>Тип: . . . . . . . . . . . . . . . . . . . Парфюмерная вода</p>
              <p>Текстура: . . . . . . . . . . . . . Владелец лицензии: Puig</p>
              <p>
                Верхние ноты: . . . . . . . . . . Шампанское, фруктовые ноты.
              </p>
              <p>
                Средние ноты: . . . . . . . . . . . . . . . Персиковый цвет.
              </p>
              <p>
                Низкие ноты: . . . . . . . . . . . . . . . . Древесные ноты.
              </p>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="w-10 h-10 border-[1px] border-solid border-black relative">
                <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                  30
                </span>
              </button>
              <button className="border-[1px] border-solid border-black p-4">
                50
              </button>
              <button className="border-[1px] border-solid border-black p-4">
                100
              </button>
              <button className="border-[1px] border-solid border-black p-4">
                100+
              </button>
            </div>
            <button className="mt-4 w-full h-10 lg:h-14 bg-[#090909] text-white flex items-center justify-center pt-2">
              SAVATGA
            </button>
            <div>
              <div className="product-content__info">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    aria-hidden="true"
                    className="feather feather-truck"
                    data-acsb-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z"></path>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                  <div className="product-info__text">
                    <h4 className="product-info__title">Shipping Discount</h4>
                    <p className="product-info__subtitle">
                      Reduced rate express shipping on orders over undefined.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    aria-hidden="true"
                    className="feather feather-package"
                    data-acsb-hidden="true"
                    viewBox="0 0 24 24"
                  >
                    <path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12"></path>
                  </svg>
                  <div className="product-info__text">
                    <h4 className="product-info__title">Easy Returns</h4>
                    <p className="product-info__subtitle">
                      null Duties &amp; taxes are non-refundable.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    className="feather feather-gift"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                  </svg>
                  <div className="product-info__text">
                    <h4 className="product-info__title">Send It As A Gift</h4>
                    <p className="product-info__subtitle">
                      Add a free personalized note during checkout.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div>Recomended</div>
      </div>
    </section>
  );
}
