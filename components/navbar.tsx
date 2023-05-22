import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl bg-gray-900   top-0 '>
        <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16'>
            <div className='text-white font-mono font-bold'>
            Easy Chatgpt
            </div>
             <div className='text-white font-mono font-bold'>
             <a
            className="flex place-items-center gap-2 p-8"
            href="https://github.com/ABAKAR-IBRAHIM/easy-chatgpt"
            target="_blank"
            rel="noopener noreferrer"
          >
           
            <Image 
              src="/github-mark-white.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={50}
              height={24}
              priority
            />
          </a>
            </div>
   
        </div>
    </div>
  )
}

export default Navbar
