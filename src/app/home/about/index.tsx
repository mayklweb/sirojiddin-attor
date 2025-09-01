import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <section>
      <div className="container">
        <div className='pt-20 mt-16 lg:mt-40'>
          <h1 className="text-[#DAC289] text-center text-4xl font-bold lg:text-6xl font-cormorant-garamond"><span className="italic">BIZ</span> <span>  </span>  <span>  HAQIMIZDA</span></h1>
          <div className='w-full flex flex-col mt-10 items-center'>
            <h3 className='w-full lg:w-[1024px] text-center text-xl lg:text-5xl font-cormorant-garamond'>SIROJIDDIN ATTOR — bu original va sifatli parfumlar uyi. Biz dunyo brendlarini bir joyga jamlab, sizga o‘ziga xos va unutilmas iforlarni taqdim etamiz. Har bir mijozimizga e’tiborli yondashuv va ishonchli xizmat kafolatlanadi.</h3>
            <div className='w-full mt-10 rounded-full overflow-hidden'>
              <Image width={1390} height={713} className='w-full h-full object-contain' src="/IMG_7295.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About