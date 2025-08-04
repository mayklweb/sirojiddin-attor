"use client"

import useModal from "@/store/modal"
import gsap from "gsap"
import { X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

function CartModal() {
  const { cartOpen, closeCart } = useModal()
  const modalRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const modal = modalRef.current;
    const image = imageRef.current;
    const texts = textsRef.current;

    const headings = texts?.querySelectorAll("Link");

    if (!modal || !image || !headings) return;

    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    if (cartOpen) {
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
        duration: 0.8,
      },
        0.4
      )
        .to(
          image,
          {
            y: "-100%",
            duration: 1.2,
          },
          0.2
        )
        .to(modal, {
          top: "-100%",
          width: "20%",
          height: "0%",
          duration: 1.4,
          ease: "power2.in",
          // onComplete: closeCart,
        }, 0.2)
    }

    return () => {
      tl.kill();
    };
  }, [cartOpen]);





  return (
    <div
      ref={modalRef}
      className={`w-full h-full fixed -top-full left-1/2 -translate-x-1/2 z-50 bg-[#00311f] overflow-hidden`}
    >
      <div className="container">
        <div className="w-full h-full py-20 flex items-center gap-20 relative overflow-hidden">
          <button
            onClick={closeCart}
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
                priority={false}
                loading="lazy"
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
              <Link onClick={() => closeCart()} href={'/collections'} className="overflow-hidden">MENS</Link>
            </span>
            <span className="overflow-hidden">
              <Link onClick={() => closeCart()} href={'/collections'} className="overflow-hidden">WOMENS</Link>
            </span>
            <span className="overflow-hidden">
              <Link onClick={() => closeCart()} href={'/collections'} className="overflow-hidden">SUMMER</Link>
            </span>
            <span className="overflow-hidden">
              <Link onClick={() => closeCart()} href={'/collections'} className="overflow-hidden">AUTUMN</Link>
            </span>
            <span className="overflow-hidden">
              <Link onClick={() => closeCart()} href={'/collections'} className="overflow-hidden">WINTER</Link>
            </span>
            <span className="overflow-hidden">
              <Link onClick={() => closeCart()} href={'/collections'} className="overflow-hidden">SPRING</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartModal
