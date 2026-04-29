'use client'

import React, { useState } from 'react'
import Navbar6 from '../../../Component/navbar6'   
import { useRouter } from 'next/navigation'

export default function page() {
  const router = useRouter()
  const [nidn, setNidn] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({ password: '' })

  const validatePassword = (pass: string) => {
    const hasCapital = /[A-Z]/.test(pass)
    const hasNumber = /[0-9]/.test(pass)
    
    if (!hasCapital || !hasNumber) {
      setErrors({
        password: 'Password harus memiliki huruf kapital dan nomor'
      })
      return false
    } else {
      setErrors({ password: '' })
      return true
    }
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setPassword(value)
    if (value) {
      validatePassword(value)
    }
  }

  const handleLogin = () => {
    if (!nidn || !password) {
      alert('Semua field harus diisi!')
      return
    }
    if (validatePassword(password)) {
      router.push('/Skriplan/Admin/Homepagedosen')
    }
  }

  return (
    <div className=''>
      <Navbar6 />
      <img src="/assets/leftarrow.png" 
              alt="About" 
              className='h-14 w-10 ml-3 mt-14 pt-5 cursor-pointer hover:scale-110 transition-all duration-300'
              onClick={() => router.push("/Skriplan/Admin/Logindosen")}
             />
             {/* Text */}
             <div className='flex justify-center'>
              <h1 className='font-poppins text-[#1E3E62] text-4xl font-bold ml-2'>
                    Login Dosen
                </h1>
                <h1 className='font-poppins text-[#1E3E62] text-4xl font-bold ml-2'>
                    Skri
                </h1>
                <h1 className='font-poppins text-[#FF7F11] text-4xl font-bold'>
                    Plan
                </h1>
            </div>
              {/* Form Login */}
            <div className='mt-10 flex flex-col items-center'>
             <h1 className='font-poppins text-[#1E3E62] font-bold mr-108 mt-4'>
                    NIDN
                </h1>
                <input
                  type='text'
                  value={nidn}
                  onChange={(e) => setNidn(e.target.value)}
                  placeholder='Masukkan NIDN'
                  className='bg-[#F8FDFF] h-13 w-120 px-4 py-2 border border-[#1E3E62] rounded-xl shadow-lg mt-2 font-poppins text-[#1E3E62] focus:outline-none focus:ring-2 focus:ring-[#FF7418]'
                />
                 <h1 className='font-poppins text-[#1E3E62] font-bold mr-99 mt-4'>
                    Password
                </h1>
                <input
                  type='password'
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder='Masukkan password'
                  className='bg-[#F8FDFF] h-13 w-120 px-4 py-2 border border-[#1E3E62] rounded-xl shadow-lg mt-2 font-poppins text-[#1E3E62] focus:outline-none focus:ring-2 focus:ring-[#FF7418]'
                />
                {errors.password && (
                  <p className='text-red-500 text-sm mt-2 font-poppins'>
                    {errors.password}
                  </p>
                )}

            <button 
            onClick={handleLogin}
            className=" font-poppins w-40 h-14 px-6 py-3 mt-8  font-semibold text-[#F8FDFF] text-xl bg-[#FF7418] rounded-full border border-[#1E3E62] hover:scale-110 transition-all duration-400 cursor-pointer shadow-2xl">
            Login
          </button>
            </div>
    </div>
  )
}
