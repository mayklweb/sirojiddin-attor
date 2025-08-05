import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="w-full bg-[#00311f] py-5">
      <div className="container">
        <div className="w-full text-[#fdfdfd] flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
          <div className="flex flex-col items-center">
            <h1 className="font-aboreto text-4xl lg:text-2xl text-[#]">
              SUROJIDDIN
            </h1>
            <p className="font-aboreto text-4xl lg:text-2xl">
              ATTOR
            </p>
          </div>

          <div className="flex gap-6 text-4xl">
            <div>
              <p>MEN</p>
              <p>WOMEN</p>
              <p>SPRING</p>
            </div>
            <div>
              <p>SUMMER</p>
              <p>AUTUMN</p>
              <p>Winter</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 text-4xl">
            <Link href={'https://www.instagram.com/sirojiddin_attor/'} >Instagram</Link>
            <Link href={'https://telegram.com'} >Telegram</Link>
            <p>+998 99 999 99 99</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer