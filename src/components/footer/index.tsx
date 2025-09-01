import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="w-full bg-[#00311f] py-5">
      <div className="container">
        <div className="w-full text-[#fdfdfd] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
          <div className="flex flex-col items-center">
            <h1 className="font-aboreto text-4xl lg:text-2xl text-[#]">
              SIROJIDDIN
            </h1>
            <p className="font-aboreto text-4xl lg:text-2xl">
              ATTOR
            </p>
          </div>


          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-6 text-lg">
            <Link href={'https://www.instagram.com/sirojiddin_attor/'} >Instagram</Link>
            <Link href={'https://telegram.com'} >Telegram</Link>
            <p>+998 99 999 99 99</p>
          </div>
        </div>
        <div className='w-full mt-6 pt-6 border-t-[1px] border-solid border-[#E6D8AD]'>
          <p className='text-center text-[#fdfdfd]'>© 2025 MAYKLS STUDIO</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer