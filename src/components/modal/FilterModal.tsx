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

      <div className="absolute top-0 right-0 h-full w-full sm:w-[500px] z-[52]">
        <div
          className={`h-full  flex flex-col bg-[#00311f] transition-all duration-700 ease-in-out ${filterOpen ? "translate-y-0" : "translate-y-full"
            }`}
        >
          <div className="w-full p-6 flex items-center justify-between">
            <h3 className="text-[#E6D8AD] text-3xl">Filter</h3>
            <button
              onClick={closeFilter}
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

export default FilterModal
