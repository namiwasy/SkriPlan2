"use client"

import React, { useState } from 'react'
import Navbar5 from '../Component/navbar5'
import { useRouter } from 'next/navigation'

export default function page() {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email:", email)
    console.log("Password:", password)
    alert("Login berhasil")
    router.push('/coba/home')
  }

  return (
    <div className='bg-[#FEB9C8] min-h-screen'>
      <Navbar5 />
      <div className="flex flex-1 justify-center items-center">
        <img
          src="/assets/bunnie.jpg"
          alt="Latian Lagi"
          className="object-cover w-70 h-80 mt-21 mr-7 rounded-2xl border-2 border-white shadow-2xl hover:scale-105 duration-300"
        />
        <div className="bg-white w-96 h-80 rounded-2xl shadow-2xl p-8 mt-21">
          <h2 className="text-2xl font-bold font-serif text-center text-gray-900">
            Login
          </h2>
          <h3 className="font-serif text-xs text-center text-gray-900">
            Sign in to your account
          </h3>

          <form onSubmit={handleSubmit} className='px-8'>
            <label className='block text-sm font-semibold text-gray-700 font-serif mb-2'>
              Email
            </label>
            <input
              type="email"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-900'
              required
            />
            <label className='block text-sm font-semibold text-gray-700 mb-2'>
              Password
            </label>
            <input
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-900"
              required
            />
            <button
              type="submit"
              className='bg-[#C1F4C5] h-10 w-40  rounded-2xl overflow-hidden shadow-2xl hover:bg-[#57a779] hover:scale-110 transition duration-200 ml-10 cursor-pointer'
            >
              <h1 className='text-center text-green-900 font-bold font-serif hover:text-[#CDF2CA]'>Login</h1>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
