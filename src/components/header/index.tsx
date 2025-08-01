import { Instagram, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" w-full bg-transparent fixed top-0 left-0 z-10 border-b-[1px] border-solid border-[#030303] before:absolute before:w-full before:h-full before:backdrop-blur-3xl">
      <div className="container">
        <div className="py-6 lg:py-10 flex bg-transparent items-center justify-between relative ">
          <button className="flex items-center gap-3 cursor-pointer">
            <div
              className=" relative w-10 lg:w-12 h-2 focus:outline-none "
              aria-label="Toggle menu"
            >
              <div className="relative w-10 lg:w-12 h-full flex justify-center items-center ">
                <span
                  className={`w-10 lg:w-12 h-0.5 bg-[#030303] absolute transition-all duration-500 ease-in-out gap-2`}
                ></span>

                <span
                  className={`w-10 lg:w-12 h-0.5 -mt-3 bg-[#030303] absolute transition-all duration-500 ease-in-out gap-2`}
                ></span>
              </div>
            </div>
            <span className="text-xl mb-2 hidden lg:block">MENU</span>
          </button>

          <Link href="/">
            <div className="flex flex-col items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="font-aboreto text-lg lg:text-2xl text-[#]">
                SUROJIDDIN
              </h1>
              <p className="font-aboreto text-lg lg:text-2xl text-[#030303]">
                ATTOR
              </p>
            </div>
          </Link>

          <div className="lg:flex gap-4">
            <button className="cursor-pointer hidden lg:block">
              <Search width={26} height={26} strokeWidth={1.5} />
            </button>
            <button className="cursor-pointer">
              <ShoppingBag width={26} height={26} strokeWidth={1.5} />
            </button>

            <button className="cursor-pointer hidden lg:block">
              <Link target="_blanck" href={'https://www.instagram.com/sirojiddin_attor/'} >
                <Instagram width={26} height={26} strokeWidth={1.5} />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}