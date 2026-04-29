"use client"

import React, { useState } from 'react'
import Navbar from '../Component/navbar4'
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
    router.push('/latianlagi')
  }

  return (
    <div className='bg-amber-100 min-h-screen'>
      <Navbar />
      <div className="flex flex-1 justify-center items-center">
        <img
          src="/assets/beachlogin.jpg"
          alt="Latian Lagi"
          className="object-cover w-70 h-80 mt-21 mr-7 rounded-2xl border-2 border-gray-300 shadow-2xl hover:scale-105 duration-300"
        />
        <div className="bg-white w-96 rounded-2xl shadow-2xl p-8 mt-20">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Login
          </h2>

          <form onSubmit={handleSubmit} className='px-8'>
            <label className='block text-sm font-semibold text-gray-700 mb-2'>
              Email
            </label>
            <input
              type="email"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full px-3 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-900'
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
              className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-900"
              required
            />
            <button
              type="submit"
              className='w-full bg-blue-300 hover:bg-blue-900 text-white font-semibold py-2 rounded-lg transition duration-300'>
              Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
