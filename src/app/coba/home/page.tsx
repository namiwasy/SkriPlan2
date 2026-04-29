import React from 'react'
import Navbar5 from '../../Component/navbar5'

export default function page() {
    return (

        <div className='bg-[#FEB9C8] h-screen w-full'>
            <Navbar5 />
            <div className=' flex items-center justify-center'>
                <div className='bg-red-100 h-90 w-69 border-rose-100 border-8 rounded-3xl mt-15 shadow-2xl overflow-hidden hover:scale-105 transition duration-200 cursor-pointer'>
                    <img src="/assets/Strawberry.jpg" alt="logo" className="h-45 w-full object-cover" />
                    <h1 className='text-green-900 font-bold text-center mt-5 font-serif'>Strawberry Matcha Latte</h1>
                    <p className='text-green-900 font-light text-xs text-center p-2 mt-2 font-sans'>The sweetness of strawberries meets the smoothness of matcha,
                        creating a Strawberry Matcha Latte that is fresh, creamy,
                        and will make you fall in love at the first sip.</p>
                </div>


                <div className='bg-red-100 h-90 w-69 border-rose-100 border-8 rounded-3xl mt-15 shadow-2xl overflow-hidden hover:scale-105 transition duration-200 ml-10 cursor-pointer'>
                    <img src="/assets/donut.jpg" alt="logo" className="h-45 w-full object-cover" />
                    <h1 className='text-green-900 font-bold text-center mt-5 font-serif'>Strawberry and matcha donut</h1>
                    <p className='text-green-900 font-light text-xs text-center p-2 mt-2 font-sans'>The sweet, fresh taste of Strawberry Donuts blends perfectly with the soft,
                        aromatic Matcha Donuts. Two distinct flavors,
                        one joy in every bite.</p>
                </div>

                <div className='bg-red-100 h-90 w-69 border-rose-100 border-8 rounded-3xl mt-15 shadow-2xl overflow-hidden hover:scale-105 transition duration-200 ml-10 cursor-pointer'>
                    <img src="/assets/outfit.jpg" alt="logo" className="h-45 w-full object-cover" />
                    <h1 className='text-green-900 font-bold text-center mt-5 font-serif'>Strawberry matcha like outfit</h1>
                    <p className='text-green-900 font-light text-xs text-center p-2 mt-2 font-sans'>The matcha-strawberry theme combines soft green and sweet pink,
                        creating a fresh, aesthetic, and joyful feel. Whether in drinks, food, or outfits,
                        this combination always looks harmonious and improves your mood.</p>
                </div>
            </div>
            <div className='flex'>
                <div className='bg-[#C1F4C5] h-10 w-40 mt-4 rounded-2xl overflow-hidden shadow-2xl hover:bg-[#57a779] hover:scale-110 transition duration-200 ml-62 cursor-pointer'>
                    <h1 className='text-center text-green-900 font-bold font-serif mt-2 hover:text-[#CDF2CA]'>See more</h1></div>

                    <div className='bg-[#C1F4C5] h-10 w-40 mt-4 rounded-2xl overflow-hidden shadow-2xl hover:bg-[#57a779] hover:scale-110 transition duration-200 ml-38 cursor-pointer'>
                    <h1 className='text-center text-green-900 font-bold font-serif mt-2 hover:text-[#CDF2CA]'>See more</h1></div>

                    <div className='bg-[#C1F4C5] h-10 w-40 mt-4 rounded-2xl overflow-hidden shadow-2xl hover:bg-[#57a779] hover:scale-110 transition duration-200 ml-38 cursor-pointer'>
                    <h1 className='text-center text-green-900 font-bold font-serif mt-2 hover:text-[#CDF2CA]'>See more</h1></div>
            </div>

        </div>
    )
}
