import React from 'react'

export default function navbar5() {
  return (
    <div>
      <div className='flex h-18 w-full bg-[#9fdeb9] border-1 border-white shadow-2xl '>
                <div className='flex flex-row items-center'>
                    <img src="/assets/pinme2.png" alt="Logo" className='h-17 w-17  items-center justify-start hover:scale-110 transition-all duration-400 cursor-pointer ' />
                    <h1 className='text-white text-2xl font-bold hover:text-[#34664b] hover:scale-110 transition-all duration-400 cursor-pointer '>𝗺𝗶𝘄𝗮</h1>
                </div>
                <div className='flex flex-row ml-auto mr-10 space-x-8 items-center justify-center text-white'>
                    <a href="/" className='font-medium hover:text-[#34664b] hover:scale-110 hover:underline transition-all duration-400'>Home</a>
                    <a href="/coba/about" className='font-medium hover:text-[#34664b] hover:scale-110 hover:underline transition-all duration-400'>About</a>
                    <a href="../services" className='font-medium hover:text-[#34664b] hover:scale-110 hover:underline transition-all duration-400'>Services</a>
                    <a href="../contact" className='font-medium hover:text-[#34664b] hover:scale-110 hover:underline transition-all duration-400'>Contact</a>
                </div>
            </div>
    </div>
  )
}
