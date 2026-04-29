import React from 'react'
import Image from 'next/image'

export default function page() {
  return (
    <div>
      <div className='bg-pink-200 min-h-screen w-screen'>
        <div className="bg-white h-18 w-screen flex shadow-2xl">
          <img src="assets/bungaa.png" alt="logo" className="h-12 mt-2.5 ml-3" />
        </div>
        <div className='h-10 w-230 bg- bg-white rounded-2xl mt-4 justify-center items-center flex mx-auto shadow-2xl'>
          <h1 className='text-black font-bold'>Uuk Tes</h1>
        </div>
      </div>
    </div>
  )
}
