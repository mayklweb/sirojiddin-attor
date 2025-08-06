"use client"

import useModal from "@/store/modal"
import { X } from "lucide-react"

function CartModal() {
  const { cartOpen, closeCart } = useModal()

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out ${cartOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-black/50 transition-all duration-500 ease-in-out ${cartOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}></div>

      <div className="absolute top-0 right-0 h-full w-full sm:w-[500px] z-[52]">
        <div
          className={`h-full p-6 flex flex-col bg-[#fdfdfd] transition-all duration-700 ease-in-out ${cartOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="w-full flex items-center justify-between">
            <h3 className="text-[#030303] text-3xl">SAVAT</h3>
            <button
              onClick={closeCart}
              className=" cursor-pointer"
            >
              <X size={36} color="#030303" strokeWidth={1} />
            </button>
          </div>
          <div className="mt-10 flex flex-auto flex-col gap-6 ">
            <div className="w-full flex gap-5 items-center">
              <div className="w-[80px] h-[100px] rounded-t-full overflow-hidden">
                <img src="/parfume.png" alt="" className="w-full h-full" />
              </div>
              <div className="w-8/10">
                <div className="w-full flex flex-col items-cente justify-between">
                  <h5 className="text-base lg:text-xl">TOM FORD TABACCO VANILLE</h5>

                  <p className="text-base lg:text-lg">1 500 000 USZ</p>
                </div>
                <div className="w-full flex items-cente justify-between">
                  <p className="text-xs">Для весеннего настроения!</p>
                </div>
              </div>
            </div>
            <div className="w-full flex gap-5 items-center">
              <div className="w-[80px] h-[100px] rounded-t-full overflow-hidden">
                <img src="/parfume.png" alt="" className="w-full h-full" />
              </div>
              <div className="w-8/10">
                <div className="w-full flex flex-col items-cente justify-between">
                  <h5 className="text-lg lg:text-xl">TOM FORD TABACCO VANILLE</h5>

                  <p className="text-base lg:text-lg">1 500 000 USZ</p>
                </div>
                <div className="w-full flex items-cente justify-between">
                  <p className="text-sm">Для весеннего настроения!</p>
                </div>
              </div>
            </div>
            <div className="w-full flex gap-5 items-center">
              <div className="w-[80px] h-[100px] rounded-t-full overflow-hidden">
                <img src="/parfume.png" alt="" className="w-full h-full" />
              </div>
              <div className="w-8/10">
                <div className="w-full flex flex-col items-cente justify-between">
                  <h5 className="text-lg lg:text-xl">TOM FORD TABACCO VANILLE</h5>

                  <p className="text-base lg:text-lg">1 500 000 USZ</p>
                </div>
                <div className="w-full flex items-cente justify-between">
                  <p className="text-sm">Для весеннего настроения!</p>
                </div>
              </div>
            </div>



          </div>
          <div className=" ">
            <button className="w-full h-12 text-[#E6D8AD] bg-[#00311f] cursor-pointer">BUYURTMA QILISH</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartModal
