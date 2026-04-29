import React from 'react'

export default function navbar6() {
  return (
    <div>
      <div className='bg-[#FF7F11] w-screen h-[58px] absolute top-0 left-0 z-50 flex items-center justify-center shadow-2xl'>
      <img src="/assets/SkriplanLogo.jpeg" alt="Logo" className='h-10 w-10 rounded-full items-center justify-start hover:scale-110 transition-all duration-400 cursor-pointer ml-5 ' />
      <h1 className='font-poppins text-[#1E3E62] text-2xl font-bold hover:scale-110 transition-all duration-400 cursor-pointer ml-2 '>Skri</h1>
      <h1 className='font-poppins text-[#ffffff] text-2xl font-bold hover:scale-110 transition-all duration-400 cursor-pointer'>Plan</h1>
      <div className='font-poppins flex flex-row ml-auto mr-10 space-x-8 items-center justify-center text-white font-bold'>
        <a href="/Skriplan/Landingpage" className='hover:text-[#1E3E62] hover:scale-110 transition-all duration-400 cursor-pointer '>Home</a>
        <a href="/Skriplan/About" className='hover:text-[#1E3E62] hover:scale-110 transition-all duration-400 cursor-pointer '>About</a>
        <a href="/Skriplan/Contact" className='hover:text-[#1E3E62] hover:scale-110 transition-all duration-400 cursor-pointer '>Contact</a>
        <div className='h-8 w-20 bg-[#1E3E62] rounded-full'>
            <a href="/Skriplan/User/Registermahasiswa" className='flex items-center justify-center h-full w-full text-white font-bold hover:bg-[#ffffff] hover:text-[#1E3E62] hover:scale-110 transition-all duration-400 cursor-pointer rounded-full text-xs'>Register</a>
        </div>
        </div>
      </div>
    </div>
  )
}
