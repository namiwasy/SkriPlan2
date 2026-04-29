'use client'
import React from 'react'
import Navbar6 from '../../Component/navbar6'
import { useRouter } from "next/navigation";
export default function page() {
    const router = useRouter();
    return (
        <div className='min-h-screen' style={{ background: 'linear-gradient(to right, #B8D8F0 0%, #E8E0D0 33%, #FFEDD4 100%)' }}>
            <Navbar6 />
              <img src="/assets/leftarrow.png" 
              alt="About" 
              className='h-14 w-10 ml-3 mt-14 pt-5 cursor-pointer hover:scale-110 transition-all duration-300'
              onClick={() => router.push("/Skriplan/About")}
             />

            
            {/* Logo Section */}
            <div className='flex justify-center'>
                <img src="/assets/Skriplannobg.png" alt="About" className='h-25 w-24' />
                <h1 className='font-poppins text-[#1E3E62] text-4xl font-bold mt-8 ml-2'>
                    Skri
                </h1>
                <h1 className='font-poppins text-[#FF7F11] text-4xl font-bold mt-8'>
                    Plan
                </h1>
            </div>
            
            {/* Content Cards Section */}
            <div className='flex justify-center gap-12 mt-10 px-8'>
                {/* Misi Kami */}
                <div className='flex flex-col items-center w-72 hover:scale-105 transition-all duration-300 cursor-pointer'>
                    <div className='h-20 w-20 bg-[#FFCA9D] rounded-full shadow-lg border-2 border-[#1E3E62] flex items-center justify-center'>
                        <img src="/assets/Orangegraduation.png" alt="Misi" className='h-14 w-14' />
                    </div>
                    <h2 className='font-poppins text-[#1E3E62] text-xl font-bold mt-4'>
                        Misi Kami
                    </h2>
                    <p className='font-poppins text-[#1E3E62] text-center text-sm mt-3 leading-relaxed'>
                        Memudahkan proses bimbingan skripsi agar mahasiswa dapat menyelesaikan tugas akhir tepat waktu dengan bimbingan berkualitas
                    </p>
                </div>

                {/* Visi Kami */}
                <div className='flex flex-col items-center w-72 hover:scale-105 transition-all duration-300 cursor-pointer'>
                    <div className='h-20 w-20 bg-[#FFCA9D] rounded-full shadow-lg border-2 border-[#1E3E62] flex items-center justify-center'>
                        <img src="/assets/Orangetargetnew.png" alt="Visi" className='h-17 w-17' />
                    </div>
                    <h2 className='font-poppins text-[#1E3E62] text-xl font-bold mt-4'>
                        Visi Kami
                    </h2>
                    <p className='font-poppins text-[#1E3E62] text-center text-sm mt-3 leading-relaxed'>
                        Menjadi platform terdepan dalam memfasilitasi komunikasi dan kolaborasi antara mahasiswa dan dosen pembimbing di Indonesia
                    </p>
                </div>

                {/* Nilai Kami */}
                <div className='flex flex-col items-center w-72 hover:scale-105 transition-all duration-300 cursor-pointer'>
                    <div className='h-20 w-20 bg-[#FFCA9D] rounded-full shadow-lg border-2 border-[#1E3E62] flex items-center justify-center'>
                        <img src="/assets/Orangeheartnew.png" alt="Nilai" className='h-12 w-12' />
                    </div>
                    <h2 className='font-poppins text-[#1E3E62] text-xl font-bold mt-4'>
                        Nilai Kami
                    </h2>
                    <p className='font-poppins text-[#1E3E62] text-center text-sm mt-3 leading-relaxed'>
                        Efisiensi, transparansi, dan kepedulian terhadap kesuksesan akademik setiap mahasiswa yang menggunakan platform kami
                    </p>
                </div>
            </div>
        </div>
    )
}
