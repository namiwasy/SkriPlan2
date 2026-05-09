'use client'
import React, { useState } from 'react'
import Navbar6 from '../../../Component/navbar6'
import { useRouter } from 'next/navigation'

export default function page() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setBaru] = useState('')
  const [konfirmasi, setKonfirmasi] = useState('')
  const [error, setError] = useState('')

  const handleReset = () => {
    // semua field harus terisi
    if (!email || !password || !konfirmasi) {
      setError('Semua field harus diisi.')
      return
    }

    // minimal 6 karakter
    if (password.length < 6) {
      setError('Password minimal 6 karakter.')
      return
    }

    // harus ada huruf kapital
    if (!/[A-Z]/.test(password)) {
      setError('Password harus mengandung minimal 1 huruf kapital.')
      return
    }

    // harus ada angka 0-9
    if (!/[0-9]/.test(password)) {
      setError('Password harus mengandung minimal 1 angka (0-9).')
      return
    }

    // password cocok
    if (password !== konfirmasi) {
      setError('Password baru dan konfirmasi password tidak cocok.')
      return
    }

    setError('')
    router.push('/Skriplan/Admin/ResetWaitingAdmin')
  }

  return (
    <div>
      <Navbar6 />
      <img
        src="/assets/leftarrow.png"
        alt="About"
        className="h-14 w-10 ml-3 mt-14 pt-5 cursor-pointer hover:scale-110 transition-all duration-300"
        onClick={() => router.push('/Skriplan/User/Loginmahasiswa')}
      />
      {/* Text */}
      <div className="flex justify-center">
        <h1 className="font-poppins text-[#1E3E62] text-3xl font-bold ml-2">
          Reset
        </h1>
        <h1 className="font-poppins text-[#FF7F11] text-3xl font-bold ml-2">
          Password
        </h1>
      </div>
      
      {/* content */}
      <div className="mt-4 flex flex-col items-center">
        <h1 className="font-poppins text-[#1E3E62] text-xl font-bold ml-2 mr-85">
          Alamat Email
        </h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-[#F8FDFF] h-13 w-120 px-4 py-2 border rounded-xl shadow-lg mt-2 font-poppins text-[#1E3E62] focus:outline-none focus:ring-2 border-[#1E3E62] focus:ring-[#FF7418]"
        />

        <h1 className="font-poppins text-[#1E3E62] text-xl font-bold ml-2 mr-82 mt-5">
          Password Baru
        </h1>
        <input
          type="password"
          placeholder="Password Baru"
          value={password}
          onChange={(e) => setBaru(e.target.value)}
          className="bg-[#F8FDFF] h-13 w-120 px-4 py-2 border rounded-xl shadow-lg mt-2 font-poppins text-[#1E3E62] focus:outline-none focus:ring-2 border-[#1E3E62] focus:ring-[#FF7418]"
        />
        <p className="font-poppins text-[#1E3E62] text-xs mt-1 w-120 opacity-60">
          * Minimal 6 karakter, mengandung huruf kapital dan angka (0-9)
        </p>

        <h1 className="font-poppins text-[#1E3E62] text-xl font-bold ml-2 mr-66 mt-5">
          Konfirmasi Password
        </h1>
        <input
          type="password"
          placeholder="Konfirmasi Password"
          value={konfirmasi}
          onChange={(e) => setKonfirmasi(e.target.value)}
          className="bg-[#F8FDFF] h-13 w-120 px-4 py-2 border rounded-xl shadow-lg mt-2 font-poppins text-[#1E3E62] focus:outline-none focus:ring-2 border-[#1E3E62] focus:ring-[#FF7418]"
        />

        {/* Pesan error */}
        {error && (
          <p className="font-poppins text-red-500 text-sm mt-3">{error}</p>
        )}

        <button
          className="font-poppins w-40 h-14 px-6 py-3 mt-8 font-semibold text-[#F8FDFF] text-xl bg-[#FF7418] rounded-full border border-[#1E3E62] hover:scale-110 transition-all duration-400 cursor-pointer shadow-2xl"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  )
}