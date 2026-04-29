'use client'
import React, { useState } from 'react'
import Navbaradmin from '../../../Component/navbaradmin'

export default function Page() {
  const students = [
    { username: "Username 1", nim: "NIM 1234567", prodi: "Ekonomi Pembangunan" },
    { username: "Username 2", nim: "NIM 7654321", prodi: "Ekonomi Pembangunan" },
    { username: "Username 3", nim: "NIM 1122334", prodi: "Ekonomi Pembangunan" },
    { username: "Username 4", nim: "NIM 9988776", prodi: "Ekonomi Pembangunan" },
    { username: "Username 5", nim: "NIM 8877665", prodi: "Ekonomi Pembangunan" },
    { username: "Username 6", nim: "NIM 7766554", prodi: "Ekonomi Pembangunan" },
  ];

  const consultations = [
    { status: "Belum ada jadwal konsultasi", date: "--/--/--", time: "--:-- - --:--" },
    { status: "Belum ada jadwal konsultasi", date: "--/--/--", time: "--:-- - --:--" },
    { status: "Belum ada jadwal konsultasi", date: "--/--/--", time: "--:-- - --:--" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null)

  return (
    <div className=" font-poppins relative w-full min-h-screen">
      {/* Background */}
      <img
        src="/assets/phinisi.jpg"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-white/70 z-0" />

      {/* Navbar */}
      <div className="relative z-20">
        <Navbaradmin />
      </div>

      {/* Greeting */}
      <div className='px-12 py-8 relative z-10'>
        <div className='flex items-center gap-2'>
          <h1 className="font-poppins text-4xl font-bold text-[#1E3E62] mt-15">
            Selamat Datang,
          </h1>
          <h1 className="font-poppins text-4xl font-bold text-[#FF7F11] mt-15">
            Ibu
          </h1>
          <img src="/assets/Wavingicon.png" alt="halo" className="w-12 h-12 mt-15" />
        </div>
      </div>

      {/* Content */}
      <div className='px-12 pb-12 flex flex-col gap-8 relative z-10'>

        {/* Top */}
        <div className='flex-1'>
          <div className="bg-white h-100 w-290 border-2 border-[#1E3E62] rounded-2xl p-8 shadow-2xl overflow-hidden">

            <div className='flex items-center gap-3 mb-6'>
              <img src="/assets/Profileicon.png" className="w-10 h-10" />
              <h2 className="text-2xl font-bold text-[#1E3E62]">Akun</h2>
              <h2 className="text-2xl font-bold text-[#FF7F11]">Mahasiswa</h2>
            </div>

            <div className='space-y-4 h-[300px] overflow-y-auto pr-2 pb-4'>
              {students.map((student, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedStudent(student) 
                    setIsModalOpen(true)
                  }}
                  className="bg-white border-2 border-[#1E3E62] rounded-2xl p-5 flex items-center justify-between cursor-pointer"
                >
                  <div className='flex items-center gap-3'>
                    <img src="/assets/Profileicon.png" className="w-8 h-8" />
                    <div>
                      <p className="font-semibold text-[#1E3E62]">
                        {student.username}
                      </p>
                      <p className="text-sm text-[#1E3E62]">
                        {student.nim}
                      </p>
                      <p className="text-sm text-[#1E3E62]">
                        {student.prodi}
                      </p>
                    </div>
                  </div>

                  <div className='text-right'>
                    <p className="font-semibold text-[#1E3E62] mb-2">
                      SK Pembimbing
                    </p>
                    <div className='flex items-center gap-2 text-[#FF7F11]'>
                      <img src="/assets/Icondokumen.png" className="w-5 h-5" />
                      <span className="text-sm">→ Lihat SK</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className='flex-1'>
          <div className="bg-white border-2 border-[#1E3E62] rounded-2xl p-8 shadow-2xl">

            <div className='flex items-center gap-3 mb-6'>
              <img src="/assets/Iconkalender.png" className="w-10 h-10" />
              <h2 className="text-2xl font-bold text-[#1E3E62]">Jadwal</h2>
              <h2 className="text-2xl font-bold text-[#FF7F11]">Konsultasi</h2>
            </div>

            <div className='space-y-4'>
              {consultations.map((item, index) => (
                <div key={index} className="border-2 border-[#1E3E62] rounded-2xl p-6">
                  <p className="font-semibold text-[#1E3E62] mb-4">
                    {item.status}
                  </p>

                  <div className='flex gap-4'>
                    <div className='flex items-center gap-2'>
                      <img src="/assets/Iconkalendernavy.png" className="w-6 h-6" />
                      <p>{item.date}</p>
                    </div>

                    <div className='flex items-center gap-2'>
                      <img src="/assets/Iconjamnavy.png" className="w-6 h-6" />
                      <p>{item.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
      {isModalOpen && selectedStudent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div
            className="rounded-3xl p-8 w-[400px] shadow-2xl"
            style={{
              background: 'linear-gradient(to bottom, #B8D8F0, #E8E0D0, #FFEDD4)'
            }}
          >
            <div className='flex flex-col items-center mb-6'>
              <img src="/assets/Profileicon.png" className="w-16 h-16 mb-2" />
              <h2 className="text-3xl font-bold text-[#1E3E62]">
                {selectedStudent.username}
              </h2>
            </div>

            <div className='text-center mb-6'>
              <p className="font-semibold text-[#1E3E62]">
                {selectedStudent.nim}
              </p>
              <p className="font-semibold text-[#1E3E62]">
                {selectedStudent.prodi}
              </p>
            </div>

            <div className='flex justify-center items-center gap-2 mb-6 text-[#FF7F11] font-semibold'>
              <img src="/assets/Icondokumen.png" className="w-5 h-5" />
              <span>→ Lihat SK</span>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-3 rounded-full border-2 border-[#1E3E62] text-[#1E3E62] bg-[#F5E6D3] hover:scale-105 transition"
              >
                Tolak
              </button>

              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-3 rounded-full text-white bg-gradient-to-b  border-2 border-[#1E3E62] from-[#FF7418] to-[#FDDC95] hover:scale-105 transition"
              >
                <h1 className='font-semibold'>Terima</h1>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}