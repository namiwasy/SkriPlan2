'use client'

import React from 'react'
import Navbaruser from '../../../Component/navbaruser'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter();
  return (
    <div className="relative w-full h-[588px] font-poppins">
      {/* Background */}
      <img
        src="/assets/phinisi.jpg"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-white/70 z-0" />

      <Navbaruser />

      {/* Content */}
      <div className="relative z-10 px-10 pt-18">
        {/* Header */}
        <div className="flex items-center gap-3 ml-2">
          <img
            src="/assets/leftarrow.png"
            alt="About"
            className="h-10 w-10 cursor-pointer hover:scale-110 transition-all duration-300"
            onClick={() => router.push("/Skriplan/User/Homepageuser")}
          />

          <h1 className="text-[32px] font-bold text-[#232379]">
            Jadwal <span className="text-[#FF7A00]">Konsultasi</span>
          </h1>
        </div>

        {/* Main */}
        <div className="flex justify-between mt-10 px-6">
          {/* Kalender */}
          <div className="w-[340px] h-[397px] bg-[#F7F7FB] border border-[#7C7CB4] rounded-[25px] shadow-md px-6 py-5 ml-25 -mt-4">
            {/* Month */}
            <div className="flex items-center justify-between mb-5">
              <button className="w-10 h-10 rounded-xl shadow bg-white text-[#232379] text-[30px] flex items-center justify-center">
                ‹
              </button>

              <h1 className="text-[20px] font-semibold text-[#232379]">
                Mei 2026
              </h1>

              <button className="w-10 h-10 rounded-xl shadow bg-white text-[#232379] text-[30px] flex items-center justify-center">
                ›
              </button>
            </div>

            <div className="border-b border-[#B5B5D6] mb-5"></div>

            {/* Days */}
            <div className="grid grid-cols-7 text-center mb-4">
              <p className="font-semibold text-[#232379] text-[16px]">Sen</p>
              <p className="font-semibold text-[#232379] text-[16px]">Sel</p>
              <p className="font-semibold text-[#232379] text-[16px]">Rab</p>
              <p className="font-semibold text-[#232379] text-[16px]">Kam</p>
              <p className="font-semibold text-[#232379] text-[16px]">Jum</p>
              <p className="font-semibold text-[#232379] text-[16px]">Sab</p>
              <p className="font-semibold text-[#232379] text-[16px]">Min</p>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-y-4 text-center">
              <p className="text-[#B7B7E5]">27</p>
              <p className="text-[#B7B7E5]">28</p>
              <p className="text-[#B7B7E5]">29</p>
              <p className="text-[#B7B7E5]">30</p>

              <button className="w-[35px] h-[35px] mx-auto rounded-[10px] text-[18px] text-[#232379]">
                1
              </button>

              <p className="text-[#B7B7E5]">2</p>
              <p className="text-[#B7B7E5]">3</p>

              <p className="text-[#B7B7E5]">4</p>
              <p className="text-[#B7B7E5]">5</p>

              <button className="w-[35px] h-[35px] mx-auto rounded-[10px] text-[18px] border border-[#FF7A00] text-[#232379] font-medium">
                6
              </button>

              <p className="text-[#B7B7E5]">7</p>

              <button className="text-[#232379] text-[18px]">8</button>

              <p className="text-[#B7B7E5]">9</p>
              <p className="text-[#B7B7E5]">10</p>

              <p className="text-[#B7B7E5]">11</p>
              <p className="text-[#B7B7E5]">12</p>

              <button className="text-[#232379] text-[18px]">13</button>

              <p className="text-[#B7B7E5]">14</p>

              <button className="text-[#232379] text-[18px]">15</button>

              <p className="text-[#B7B7E5]">16</p>
              <p className="text-[#B7B7E5]">17</p>

              <p className="text-[#B7B7E5]">18</p>
              <p className="text-[#B7B7E5]">19</p>

              <button className="text-[#232379] text-[18px]">20</button>

              <p className="text-[#B7B7E5]">21</p>

              <button className="text-[#232379] text-[18px]">22</button>

              <p className="text-[#B7B7E5]">23</p>
              <p className="text-[#B7B7E5]">24</p>

              <p className="text-[#B7B7E5]">25</p>
              <p className="text-[#B7B7E5]">26</p>

              <button className="text-[#232379] text-[18px]">27</button>

              <p className="text-[#B7B7E5]">28</p>

              <button className="text-[#232379] text-[18px]">29</button>

              <p className="text-[#B7B7E5]">30</p>
              <p className="text-[#B7B7E5]">31</p>
            </div>
          </div>

          {/* Form */}
          <div className="w-[550px] h-[350px] bg-[#F7F7FB] border border-[#7C7CB4] rounded-[25px] shadow-md px-6 py-5 -mt-4 mr-17">
            {/* Jenis Konsultasi */}
            <div>
              <h1 className="text-[20px] font-bold text-[#232379] mb-3">
                Pilih Jenis Konsultasi
              </h1>

              <select className="w-full h-[45px] px-4 border border-[#2C4C74] rounded-[8px] outline-none text-[#2C4C74]">
                <option>Pilih Jenis Konsultasi</option>
                <option>Proposal Penelitian</option>
                <option>Hasil Penelitian</option>
                <option>Penyusunan Skripsi</option>
              </select>
            </div>

            {/* Jam */}
            <div className="mb-6">
              <h1 className="text-[20px] font-bold text-[#232379] mb-3">
                Pilih Jam Konsultasi
              </h1>

              <select className="w-full h-[45px] px-4 border border-[#2C4C74] rounded-[8px] outline-none text-[#2C4C74]">
                <option>Pilih Jam Konsultasi</option>
                <option>10:00 - 11:00</option>
                <option>11:00 - 12:00</option>
                <option>13:00 - 14:00</option>
                <option>14:00 - 15:00</option>
              </select>
            </div>

            {/* Catatan */}
            <div>
              <h1 className="text-[20px] font-bold text-[#232379] mb-3">
                Catatan
              </h1>

              <textarea className="w-full h-[70px] border border-[#7C7CB4] rounded-[8px] resize-none outline-none px-4 py-3" />
            </div>

            {/* Button */}
            <div className="flex justify-center mt-6">
              <button className="w-[170px] h-[60px] bg-[#FF7A00] rounded-full text-white text-[20px] font-bold border border-[#232379] hover:scale-105 transition-all">
                Ajukan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}