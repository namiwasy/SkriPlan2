'use client'
import React, { useState } from 'react'
import Navbar6 from '../../Component/navbar6'

export default function page() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="relative w-full h-[588px] overflow-hidden">
      {/* Background */}
      <img
        src="/assets/phinisi.jpg"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/70 z-0" />

      <Navbar6 />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between px-16 h-full">
        
        {/* LEFT TEXT */}
        <div className="max-w-xl mt-8">
          <div className="font-poppins mt-3 text-5xl font-bold">
            <span className="text-[#1E3E62]">Dosen</span>
            <span className="text-[#1E3E62] ml-2">Skri</span>
            <span className="text-[#FF7F11]">Plan</span>
          </div>

          <p className=" font-poppins mt-6 text-lg font-medium text-[#FF7F11]">
            <span className="text-[#1E3E62] font-bold">Ibu Dr. Citra Ayni Kamaruddin, S.P., M.Si.</span>
            <span className="text-[#1E3E62] font-normal"> adalah seorang akademisi dan peneliti Indonesia yang merupakan dosen tetap di </span>
            <span className="text-[#1E3E62] font-bold">Universitas Negeri Makassar (UNM).</span>
            <span className="text-[#1E3E62] font-normal">Beliau menjabat sebagai dosen di </span>
            <span className="text-[#1E3E62] font-bold"> Fakultas Ekonomi dan Bisnis, dengan spesialisasi di bidang Kewirausahaan Pertanian</span>
          </p>

          <p className=" font-poppins mt-4 text-lg font-medium text-[#FF7F11]">
            <span className="text-[#1E3E62] font-normal">Dengan fokus penelitian pada literasi </span>
            <span className="text-[#1E3E62] font-bold">kewirausahaan sektor pertanian,</span>
            <span className="text-[#1E3E62] font-normal"> Beliau aktif menerbitkan karya ilmiah dan terlibat dalam pengelolaan jurnal akademik </span>
            <span className="text-[#1E3E62] font-bold">UNM, </span>
            <span className="text-[#1E3E62] font-normal">serta berperan aktif dalam kegiatan penjaminan mutu </span>
            <span className="text-[#1E3E62] font-bold">Universitas Negeri Makassar.</span>
          </p>

          <button 
            onClick={() => setIsModalOpen(true)}
            className=" font-poppins px-6 py-3 mt-6 text-lg font-semibold text-[#1E3E62] bg-gradient-to-b from-[#FF7418] to-[#FDDC95] rounded-full border border-[#1E3E62] hover:scale-110 transition-all duration-400 cursor-pointer shadow-2xl">
            Hubungi
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex flex-col items-center">
          <img
            src="/assets/Fotomama.png"
            alt="foto"
            className="w-[500px] object-cover mt-10 opacity-75"
          />

          {/* Nama */}
          <h1 className="absolute bottom-8 font-poppins px-4 py-2  text-lg font-bold text-[#1E3E62] mt-2">
            Dr. Citra Ayni Kamaruddin, S.P., M.Si.
          </h1>
        </div>

      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="rounded-3xl p-8 w-96 shadow-2xl animate-fadeIn" style={{ background: 'linear-gradient(to bottom, #B8D8F0 0%, #E8E0D0 33%, #FFEDD4 100%)' }}>
            {/* Header */}
            <h2 className="text-3xl font-poppins font-bold text-center">
              <span className="text-[#1E3E62]">Kontak</span>
              <span className="text-[#FF7F11] ml-2">Dosen</span>
            </h2>

            {/* Phone Icon & Number */}
            <div className="flex items-center justify-center mt-8">
              <img src="/assets/Orangephone.jpg" 
              alt="phone" 
              className="h-10 w-10 mr-4 rounded-full" />
              <p className="font-poppins text-2xl font-bold text-[#1E3E62]">+6282189592562</p>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="flex-1 font-poppins px-6 py-3 text-lg font-semibold text-[#1E3E62] bg-gradient-to-b from-[#FF7418] to-[#FDDC95] rounded-full border border-[#1E3E62] hover:scale-105 transition-all duration-300 cursor-pointer">
                Kembali
              </button>
              <a 
                href="https://wa.me/6282189592562"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 font-poppins px-6 py-3 text-lg font-semibold text-[#148E12] bg-gradient-to-b from-[#FF7418] to-[#FDDC95] rounded-full border border-[#1E3E62] hover:scale-105 transition-all duration-300 cursor-pointer text-center">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
