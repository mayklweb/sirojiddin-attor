import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="w-full bg-[#00311f] py-5">
      <div className="container">
        <div className="w-full text-[#fdfdfd] flex items-center justify-between">
          <div className="flex flex-col items-center">
            <h1 className="font-aboreto text-lg lg:text-2xl text-[#]">
              SUROJIDDIN
            </h1>
            <p className="font-aboreto text-lg lg:text-2xl">
              ATTOR
            </p>
          </div>

          <div className="flex gap-6">
            <div>
              <p>Winter</p>
              <p>Winter</p>
              <p>Winter</p>
            </div>
            <div>
              <p>Winter</p>
              <p>Winter</p>
              <p>Winter</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
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