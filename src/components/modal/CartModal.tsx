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
          className={`h-full  flex flex-col bg-[#00311f] transition-all duration-700 ease-in-out ${cartOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="w-full p-6 flex items-center justify-between">
            <h3 className="text-[#E6D8AD] text-4xl">SAVAT</h3>
            <button
              onClick={closeCart}
              className=" cursor-pointer"
            >
              <X size={36} color="#E6D8AD" strokeWidth={1} />
            </button>
          </div>
          <div className="p-6 flex flex-auto bg-white">

          </div>
          <div className="bg-black w-full h-10">

          </div>
        </div>
      </div>
    </div>
  )
}

export default CartModal
