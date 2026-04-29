'use client'
import React, { useState } from 'react'
import Navbar6 from '../../../Component/navbar6'
import { useRouter } from 'next/navigation'

export default function page() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    namaLengkap: '',
    nim: '',
    password: ''
  })
  const [errors, setErrors] = useState({
    namaLengkap: '',
    nim: '',
    password: ''
  })

  const validatePassword = (password: string) => {
    const hasUpperCase = /[A-Z]/.test(password)
    const hasNumber = /[0-9]/.test(password)
    const isLengthValid = password.length >= 6

    if (!password) {
      return 'Password tidak boleh kosong'
    }
    if (!hasUpperCase) {
      return 'Password harus mengandung huruf kapital'
    }
    if (!hasNumber) {
      return 'Password harus mengandung angka'
    }
    if (!isLengthValid) {
      return 'Password minimal 6 karakter'
    }
    return ''
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    
    if (name === 'password') {
      const error = validatePassword(value)
      setErrors(prev => ({
        ...prev,
        [name]: error
      }))
    } else if (name === 'namaLengkap') {
      setErrors(prev => ({
        ...prev,
        [name]: value.trim() === '' ? 'Nama lengkap tidak boleh kosong' : ''
      }))
    } else if (name === 'nim') {
      setErrors(prev => ({
        ...prev,
        [name]: value.trim() === '' ? 'NIM tidak boleh kosong' : ''
      }))
    }
  }

  const handleNext = () => {
    const newErrors = {
      namaLengkap: formData.namaLengkap.trim() === '' ? 'Nama lengkap tidak boleh kosong' : '',
      nim: formData.nim.trim() === '' ? 'NIM tidak boleh kosong' : '',
      password: validatePassword(formData.password)
    }

    setErrors(newErrors)

    if (!newErrors.namaLengkap && !newErrors.nim && !newErrors.password) {
      // Store data and proceed
      sessionStorage.setItem('registrationData', JSON.stringify(formData))
      router.push('/Skriplan/User/Registermahasiswa2')
    }
  }

  return (
    <div>
      <Navbar6 />
      <img 
        src="/assets/leftarrow.png" 
        alt="About" 
        className="h-14 w-10 ml-3 mt-14 pt-5 cursor-pointer hover:scale-110 transition-all duration-300"
        onClick={() => router.push("/Skriplan/User/Loginmahasiswa")}
      />
      <div className="flex justify-center">
        <h1 className="font-poppins text-[#1E3E62] text-4xl font-bold ml-2">
          Register
        </h1>
        <h1 className="font-poppins text-[#1E3E62] text-4xl font-bold ml-3">
          Skri
        </h1>
        <h1 className="font-poppins text-[#FF7F11] text-4xl font-bold">
          Plan
        </h1>
      </div>

      <div className='mt-7 flex flex-col items-center'>
        {/* Nama Lengkap */}
        <h1 className='font-poppins text-[#1E3E62] font-bold mr-87'>
          Nama Lengkap
        </h1>
        <input 
          type="text" 
          name="namaLengkap"
          value={formData.namaLengkap}
          onChange={handleChange}
          placeholder="Masukkan Nama Lengkap" 
          className={`bg-[#F8FDFF] h-13 w-120 px-4 py-2 border rounded-xl shadow-lg mt-2 font-poppins text-[#1E3E62] focus:outline-none focus:ring-2 ${
            errors.namaLengkap ? 'border-red-500 focus:ring-red-500' : 'border-[#1E3E62] focus:ring-[#FF7418]'
          }`}
        />
        {errors.namaLengkap && <p className='text-red-500 text-sm mt-1 font-poppins'>{errors.namaLengkap}</p>}

        {/* NIM */}
        <h1 className='font-poppins text-[#1E3E62] font-bold mr-110 mt-5'>
          NIM
        </h1>
        <input 
          type="text" 
          name="nim"
          value={formData.nim}
          onChange={handleChange}
          placeholder="Masukkan NIM" 
          className={`bg-[#F8FDFF] h-13 w-120 px-4 py-2 border rounded-xl shadow-lg mt-2 font-poppins text-[#1E3E62] focus:outline-none focus:ring-2 ${
            errors.nim ? 'border-red-500 focus:ring-red-500' : 'border-[#1E3E62] focus:ring-[#FF7418]'
          }`}
        />
        {errors.nim && <p className='text-red-500 text-sm mt-1 font-poppins'>{errors.nim}</p>}

        {/* Password */}
        <h1 className='font-poppins text-[#1E3E62] font-bold mr-98 mt-5'>
          Password
        </h1>
        <input 
          type="password" 
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Masukkan Password" 
          className={`bg-[#F8FDFF] h-13 w-120 px-4 py-2 border rounded-xl shadow-lg mt-2 font-poppins text-[#1E3E62] focus:outline-none focus:ring-2 ${
            errors.password ? 'border-red-500 focus:ring-red-500' : 'border-[#1E3E62] focus:ring-[#FF7418]'
          }`}
        />
        {errors.password && <p className='text-red-500 text-sm mt-1 font-poppins'>{errors.password}</p>}

        {/* Password Requirements */}
        <div className='mt-3 w-120 p-3 bg-blue-50 border border-blue-200 rounded-lg'>
          <p className='font-poppins text-xs text-[#1E3E62] font-semibold mb-2'>Requirement Password:</p>
          <div className='space-y-1'>
            <p className={`text-xs font-poppins ${/[A-Z]/.test(formData.password) ? 'text-green-600' : 'text-gray-600'}`}>
              ✓ Mengandung huruf kapital (A-Z)
            </p>
            <p className={`text-xs font-poppins ${/[0-9]/.test(formData.password) ? 'text-green-600' : 'text-gray-600'}`}>
              ✓ Mengandung angka (0-9)
            </p>
            <p className={`text-xs font-poppins ${formData.password.length >= 6 ? 'text-green-600' : 'text-gray-600'}`}>
              ✓ Minimal 6 karakter
            </p>
          </div>
        </div>

        <button 
          onClick={handleNext}
          className="font-poppins w-40 h-14 px-6 py-3 mt-8 font-semibold text-[#F8FDFF] text-xl bg-[#FF7418] rounded-full border border-[#1E3E62] hover:scale-110 transition-all duration-400 cursor-pointer shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={errors.namaLengkap || errors.nim || errors.password ? true : false}
        >
          Next
        </button>
      </div>
    </div>
  )
}
