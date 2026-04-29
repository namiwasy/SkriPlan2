'use client'
import React, { useState } from 'react'
import Navbar6 from '../../../Component/navbar6'
import { useRouter } from 'next/navigation'

export default function page() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    jenisKelamin: '',
    prodi: '',
    uploadedFile: null as File | null
  })
  const [errors, setErrors] = useState({
    jenisKelamin: '',
    prodi: '',
    uploadedFile: ''
  })

  const handleJenisKelaminChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setFormData(prev => ({
      ...prev,
      jenisKelamin: value
    }))
    if (value) {
      setErrors(prev => ({
        ...prev,
        jenisKelamin: ''
      }))
    }
  }

  const handleProdiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setFormData(prev => ({
      ...prev,
      prodi: value
    }))
    if (value.trim()) {
      setErrors(prev => ({
        ...prev,
        prodi: ''
      }))
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData(prev => ({
      ...prev,
      uploadedFile: file
    }))
    if (file) {
      setErrors(prev => ({
        ...prev,
        uploadedFile: ''
      }))
    }
  }

  const handleNext = () => {
    const newErrors = {
      jenisKelamin: formData.jenisKelamin === '' ? 'Jenis kelamin harus dipilih' : '',
      prodi: formData.prodi.trim() === '' ? 'Prodi tidak boleh kosong' : '',
      uploadedFile: !formData.uploadedFile ? 'SK Pembimbing harus diupload' : ''
    }

    setErrors(newErrors)

    if (!newErrors.jenisKelamin && !newErrors.prodi && !newErrors.uploadedFile) {
      router.push('/Skriplan/User/Pendingakun')
    }
  }

  const isFormValid = formData.jenisKelamin && formData.prodi.trim() && formData.uploadedFile

  return (
    <div>
      <Navbar6 />
      <img 
        src="/assets/leftarrow.png" 
        alt="About" 
        className="h-14 w-10 ml-3 mt-14 pt-5 cursor-pointer hover:scale-110 transition-all duration-300"
        onClick={() => router.push("/Skriplan/User/Registermahasiswa")}
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

      <div className='mt-4 flex flex-col items-center'>
        {/* Jenis Kelamin */}
        <h1 className='font-poppins text-[#1E3E62] font-bold mr-87'>
          Jenis Kelamin
        </h1>
        <select 
          value={formData.jenisKelamin}
          onChange={handleJenisKelaminChange}
          className={`bg-[#F8FDFF] h-13 w-120 px-4 py-2 border rounded-xl shadow-lg mt-2 font-poppins text-[#1E3E62] focus:outline-none focus:ring-2 ${
            errors.jenisKelamin ? 'border-red-500 focus:ring-red-500' : 'border-[#1E3E62] focus:ring-[#FF7418]'
          }`}
        >
          <option value="">Pilih Jenis Kelamin</option>
          <option value="Laki-Laki">Laki-Laki</option>
          <option value="Perempuan">Perempuan</option>
        </select>
        {errors.jenisKelamin && <p className='text-red-500 text-sm mt-1 font-poppins'>{errors.jenisKelamin}</p>}

        {/* Prodi */}
        <h1 className='font-poppins text-[#1E3E62] font-bold mr-110 mt-5'>
          Prodi
        </h1>
        <input 
          type="text" 
          value={formData.prodi}
          onChange={handleProdiChange}
          placeholder="Masukkan Prodi" 
          className={`bg-[#F8FDFF] h-13 w-120 px-4 py-2 border rounded-xl shadow-lg mt-2 font-poppins text-[#1E3E62] focus:outline-none focus:ring-2 ${
            errors.prodi ? 'border-red-500 focus:ring-red-500' : 'border-[#1E3E62] focus:ring-[#FF7418]'
          }`}
        />
        {errors.prodi && <p className='text-red-500 text-sm mt-1 font-poppins'>{errors.prodi}</p>}

        {/* Upload SK Pembimbing */}
        <h1 className='font-poppins text-[#1E3E62] font-bold mr-73 mt-5'>
          Upload SK Pembimbing
        </h1>
        <label className="w-120 mt-2">
          <input 
            type="file" 
            onChange={handleFileChange}
            className="hidden"
            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          />
          <div className={`bg-[#F8FDFF] h-24 w-120 border-2 rounded-xl flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg ${
            errors.uploadedFile ? 'border-red-500 hover:bg-red-50' : 'border-dashed border-[#1E3E62] hover:bg-[#E8F3FF]'
          }`}>
            <div className="text-center">
              <p className="font-poppins text-[#1E3E62] font-semibold">📁 Upload SK Pembimbing</p>
              {formData.uploadedFile && (
                <p className="font-poppins text-[#FF7418] text-sm mt-1">{formData.uploadedFile.name}</p>
              )}
            </div>
          </div>
        </label>
        {errors.uploadedFile && <p className='text-red-500 text-sm mt-1 font-poppins'>{errors.uploadedFile}</p>}

        <button 
          onClick={handleNext}
          disabled={!isFormValid}
          className="font-poppins w-40 h-14 px-6 py-3 mt-8 font-semibold text-[#F8FDFF] text-xl bg-[#FF7418] rounded-full border border-[#1E3E62] hover:scale-110 transition-all duration-400 cursor-pointer shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>
    </div>
  )
}