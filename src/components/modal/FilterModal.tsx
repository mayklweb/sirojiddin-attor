"use client"

import useModal from "@/store/modal"
import { X } from "lucide-react"

function FilterModal() {
  const { filterOpen, closeFilter } = useModal()

  return (
    <div
      className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out ${filterOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
      <div
        onClick={closeFilter}
        className={`absolute inset-0 bg-black/50 transition-all duration-500 ease-in-out ${filterOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}></div>

      <div className="absolute top-0 right-0 w-full sm:w-[500px] h-[80%] z-[52]">
        <div
          className={`h-full p-5 flex flex-col gap-5 bg-[#fdfdfd] transition-all duration-700 ease-in-out ${filterOpen ? "translate-y-1/4" : "translate-y-full"
            }`}
        >
          <div className="w-full flex items-center justify-between">
            <h3 className="text-[#030303] text-3xl">Filter</h3>
            <button
              onClick={closeFilter}
              className=" cursor-pointer"
            >
              <X size={36} color="#030303" strokeWidth={1} />
            </button>
          </div>
          <div className="flex gap-5 flex-wrap">
            <button className="py-2 px-6 bg-[#00311f] border-[1px] border-solid border-[#00311f] text-[#E6D8AD]">WOMEN</button>
            <button className="py-2 px-6 border-[1px] border-solid border-[#00311f] text-[#00311f]">MEN</button>
            <button className="py-2 px-6 border-[1px] border-solid border-[#00311f] text-[#00311f]">WINTER</button>
            <button className="py-2 px-6 border-[1px] border-solid border-[#00311f] text-[#00311f]">SUMMER</button>
            <button className="py-2 px-6 border-[1px] border-solid border-[#00311f] text-[#00311f]">SPRING</button>
            <button className="py-2 px-6 border-[1px] border-solid border-[#00311f] text-[#00311f]">AUTUMN</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterModal
