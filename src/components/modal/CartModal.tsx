"use client"

import useModal from "@/store/modal"
import { X } from "lucide-react"

function CartModal() {
  const { cartOpen, closeCart } = useModal()

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out ${cartOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
      {/* Overlay (black background) */}
      <div
        onClick={closeCart}
        className={`absolute inset-0 bg-black/50 transition-all duration-500 ease-in-out ${cartOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}></div>

      {/* Cart Panel */}
      <div className="absolute top-0 right-0 h-full w-full sm:w-[400px] z-[52]">
        <div
          className={`h-full bg-[#00311f] transition-all duration-700 ease-in-out ${cartOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <button
            onClick={closeCart}
            className="absolute top-6 right-6 z-10"
          >
            <X size={36} color="#E6D8AD" strokeWidth={1} />
          </button>

          {/* Cart content */}
          <div className="p-6 text-[#E6D8AD] text-lg">
            <p>Your cart is empty.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartModal
