'use client'

import React, { useMemo, useState } from 'react'
import Navbaruser from '../../../Component/navbaruser'


export default function Page() {
  const [selectedTahap, setSelectedTahap] = useState('')
  const [selectedJam, setSelectedJam] = useState('')
  const [selectedTanggal, setSelectedTanggal] = useState<number | null>(7)
  const [catatan, setCatatan] = useState('')

  // progress tahapan
  const [progress, setProgress] = useState({
    proposal: 0,
    hasil: 0,
    skripsi: 0,
  })

  // kalender Januari 2026
  const days = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']

  {/* kalender Mei 2026 */}
const dates = [
  { day: 27, faded: true, valid: false },
  { day: 28, faded: true, valid: false },
  { day: 29, faded: true, valid: false },
  { day: 30, faded: true, valid: false },

  { day: 1, faded: false, valid: true }, // Jumat
  { day: 2, faded: true, valid: false },
  { day: 3, faded: true, valid: false },

  { day: 4, faded: true, valid: false },
  { day: 5, faded: true, valid: false },

  { day: 6, faded: false, valid: true }, // Rabu

  { day: 7, faded: true, valid: false },

  { day: 8, faded: false, valid: true }, // Jumat

  { day: 9, faded: true, valid: false },
  { day: 10, faded: true, valid: false },

  { day: 11, faded: true, valid: false },
  { day: 12, faded: true, valid: false },

  { day: 13, faded: false, valid: true }, // Rabu

  { day: 14, faded: true, valid: false },

  { day: 15, faded: false, valid: true }, // Jumat

  { day: 16, faded: true, valid: false },
  { day: 17, faded: true, valid: false },

  { day: 18, faded: true, valid: false },
  { day: 19, faded: true, valid: false },

  { day: 20, faded: false, valid: true }, // Rabu

  { day: 21, faded: true, valid: false },

  { day: 22, faded: false, valid: true }, // Jumat

  { day: 23, faded: true, valid: false },
  { day: 24, faded: true, valid: false },

  { day: 25, faded: true, valid: false },
  { day: 26, faded: true, valid: false },

  { day: 27, faded: false, valid: true }, // Rabu

  { day: 28, faded: true, valid: false },

  { day: 29, faded: false, valid:true }, // Jumat

  { day: 30, faded: true, valid: false },
  { day: 31, faded: true, valid: false },
]
  const jamList = [
    '10:00 - 11:00',
    '11:00 - 12:00',
    '13:00 - 14:00',
    '14:00 - 15:00',
  ]

  // dropdown bertahap
  const tahapan = useMemo(() => {
    const result = []

    if (progress.proposal < 3) {
      result.push('Proposal Penelitian')
    }

    if (progress.proposal === 3 && progress.hasil < 3) {
      result.push('Hasil Penelitian')
    }

    if (
      progress.proposal === 3 &&
      progress.hasil === 3 &&
      progress.skripsi < 1
    ) {
      result.push('Penyusunan Skripsi')
    }

    return result
  }, [progress])

  const handleSubmit = () => {
    if (!selectedTahap || !selectedJam || !selectedTanggal) {
      alert('Lengkapi data terlebih dahulu')
      return
    }

    if (selectedTahap === 'Proposal Penelitian') {
      setProgress((prev) => ({
        ...prev,
        proposal: prev.proposal + 1,
      }))
    }

    if (selectedTahap === 'Hasil Penelitian') {
      setProgress((prev) => ({
        ...prev,
        hasil: prev.hasil + 1,
      }))
    }

    if (selectedTahap === 'Penyusunan Skripsi') {
      setProgress((prev) => ({
        ...prev,
        skripsi: prev.skripsi + 1,
      }))
    }

    alert('Pengajuan berhasil')
  }

  return (
    <div className="relative w-full h-[588px]  font-poppins">
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
           <img src="/assets/leftarrow.png"
        alt="About"
        className='h-10 w-10 mt-  cursor-pointer hover:scale-110 transition-all duration-300'
        
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
              {days.map((day) => (
                <p
                  key={day}
                  className="font-semibold text-[#232379] text-[16px]"
                >
                  {day}
                </p>
              ))}
            </div>

            {/* Dates */}
            <div className="grid grid-cols-7 gap-y-4 text-center">
              {dates.map((date, index) => (
                <button
                  key={index}
                  disabled={!date.valid}
                  onClick={() => setSelectedTanggal(date.day)}
                  className={`w-[35px] h-[35px] mx-auto rounded-[10px] text-[18px] transition-all
                  ${date.faded
                      ? 'text-[#B7B7E5]'
                      : 'text-[#232379] font-medium'
                    }
                  ${selectedTanggal === date.day
                      ? 'border border-[#FF7A00]'
                      : ''
                    }
                  ${!date.valid
                      ? 'cursor-not-allowed opacity-50'
                      : 'hover:bg-[#ECECFF]'
                    }
                `}
                >
                  {date.day}
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="w-[550px] h-[350px] bg-[#F7F7FB] border border-[#7C7CB4] rounded-[25px] shadow-md px-6 py-5 -mt-4 mr-17">
            {/* Jenis Konsultasi */}
            <div className="">
              <h1 className="text-[20px] font-bold text-[#232379] mb-3">
                Pilih Jenis Konsultasi
              </h1>

              <select
                value={selectedTahap}
                onChange={(e) => setSelectedTahap(e.target.value)}
                className="w-full h-[45px] px-4 border border-[#2C4C74] rounded-[8px] outline-none text-[#2C4C74]"
              >
                <option value="">Pilih Jenis Konsultasi</option>

                {tahapan.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Jam */}
            <div className="mb-6">
              <h1 className="text-[20px] font-bold text-[#232379] mb-3">
                Pilih Jam Konsultasi
              </h1>

              <select
                value={selectedJam}
                onChange={(e) => setSelectedJam(e.target.value)}
                className="w-full h-[45px] px-4 border border-[#2C4C74] rounded-[8px] outline-none text-[#2C4C74]"
              >
                <option value="">Pilih Jam Konsultasi</option>

                {jamList.map((jam, index) => (
                  <option key={index} value={jam}>
                    {jam}
                  </option>
                ))}
              </select>
            </div>

            {/* Catatan */}
            <div>
              <h1 className="text-[20px] font-bold text-[#232379] mb-3">
                Catatan
              </h1>

              <textarea
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
                className="w-full h-[70px] border border-[#7C7CB4] rounded-[8px] resize-none outline-none px-4 py-3"
              />
            </div>

            {/* Button */}
            <div className="flex justify-center mt-6">
              <button
                onClick={handleSubmit}
                className="w-[170px] h-[60px] bg-[#FF7A00] rounded-full text-white text-[20px] font-bold border border-[#232379] hover:scale-105 transition-all"
              >
                Ajukan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}