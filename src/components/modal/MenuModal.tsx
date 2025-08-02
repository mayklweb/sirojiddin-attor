"use client"

import useModal from "@/store/modal"
import gsap from "gsap"
import { X } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef } from "react"

function MenuModal() {
  const { isOpen, closeModal } = useModal()
  const modalRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const modal = modalRef.current;
    const image = imageRef.current;
    const texts = textsRef.current;

    const headings = texts?.querySelectorAll("h1");

    if (!modal || !image || !headings) return;

    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    if (isOpen) {
      gsap.set(modal, {
        top: "-100%",
        width: "20%",
        height: "0%",
      });

      gsap.set(image, {
        y: "-100%",
      });

      gsap.set(headings, {
        y: -100,
      });

      tl.to(modal, {
        top: "0%",
        width: "100%",
        height: "100%",
        duration: 1.4,
      })
        .to(
          image,
          {
            y: "0%",
            duration: 1.2,
          },
          0.4
        )
        .to(
          headings,
          {
            y: "0%",
            duration: 0.8,
          },
          0.8
        );
    } else {
      tl.to(headings, {
        y: -100,
        duration: 0.6,
      },
        0.8
      )
        .to(
          image,
          {
            y: "-100%",
            duration: 1.2,
          },
          0.6
        )
        .to(modal, {
          top: "-100%",
          width: "20%",
          height: "0%",
          duration: 1.6,
          ease: "power2.in",
          onComplete: closeModal,
        });
    }

    return () => {
      tl.kill();
    };
  }, [isOpen]);



  return (
    <div
      ref={modalRef}
      className={`w-full h-full fixed -top-full left-1/2 -translate-x-1/2 z-50 bg-[#00311f] overflow-hidden`}
    >
      <div className="container">
        <div className="w-full h-full py-20 flex items-center gap-20 relative overflow-hidden">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 cursor-pointer z-10"
          >
            <X size={44} color="#E6D8AD" strokeWidth={1} />
          </button>

          <div className="w-1/3 max-w-[600px] h-full max-h-[900px] rounded-t-full overflow-hidden hidden lg:block">
            <div
              ref={imageRef}
              className="w-full h-full"
            >
              <Image
                width={500}
                height={600}
                className="w-full h-full object-cover"
                src="/parfume.png"
                alt="Product Image"
              />
            </div>
          </div>

          <div
            ref={textsRef}
            className="h-full max-h-[1000px] text-4xl lg:text-6xl text-[#E6D8AD] font-[600] flex flex-col justify-end gap-4"
          >
            <span className="overflow-hidden">
              <h1 className="overflow-hidden">MENS</h1>
            </span>
            <span className="overflow-hidden">
              <h1 className="overflow-hidden">WOMENS</h1>
            </span>
            <span className="overflow-hidden">
              <h1 className="overflow-hidden">SUMMER</h1>
            </span>
            <span className="overflow-hidden">
              <h1 className="overflow-hidden">AUTUMN</h1>
            </span>
            <span className="overflow-hidden">
              <h1 className="overflow-hidden">WINTER</h1>
            </span>
            <span className="overflow-hidden">
              <h1 className="overflow-hidden">SPRING</h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuModal
