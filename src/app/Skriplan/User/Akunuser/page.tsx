import React from 'react'
import Navbaruser from '../../../Component/navbaruser'
export default function page() {
  return (
    <div className="relative w-full h-[588px] overflow-hidden">
      {/* Background */}
      <img
        src="/assets/phinisi.jpg"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/70 z-0" />

      <Navbaruser />

      {/* Content */}
      <div className="relative z-10 px-16 pt-24 h-[calc(100%-80px)] flex flex-col">

        {/* Header */}
        <div className='px-5'>
          <div className='flex items-center gap-2'>
            <h1 className="font-poppins text-3xl font-bold text-[#1E3E62]">
              Selamat Datang,
            </h1>

            <h1 className="font-poppins text-3xl font-bold text-[#FF7F11]">
              User!
            </h1>

            <img
              src="/assets/Wavingicon.png"
              alt="halo"
              className="w-10 h-10"
            />
          </div>
        </div>

        {/* Cards Container */}
        <div className="flex justify-center items-center gap-16 flex-1">

          {/* Left Card */}
          <div className='bg-[#F3F6FB] h-80 w-[420px] border border-[#1E3E62] rounded-xl shadow-xl'>
            <div className='flex items-center justify-start'>
              <img
                src="/assets/Profileicon.png"
                className="w-10 h-10 ml-5 mt-5"
              />

              <h1 className="font-poppins text-2xl font-bold text-[#1E3E62] mt-5 ml-3">
                User Details
              </h1>
            </div>

            <h1 className='font-poppins text-xs font-light text-[#1E3E62] mt-5 ml-5'>
              USERNAME
            </h1>

            <h1 className="font-poppins text-lg font-bold text-[#1E3E62] ml-5">
              "Username"
            </h1>

            <h1 className='font-poppins text-xs font-light text-[#1E3E62] mt-5 ml-5'>
              NIM
            </h1>

            <h1 className="font-poppins text-lg font-bold text-[#1E3E62] ml-5">
              "NIM"
            </h1>

            <h1 className='font-poppins text-xs font-light text-[#1E3E62] mt-5 ml-5'>
              PRODI
            </h1>

            <h1 className="font-poppins text-lg font-bold text-[#1E3E62] ml-5">
              "Prodi"
            </h1>
          </div>

          {/* Right Card */}
          <div className="bg-white h-[430px] w-[620px] border-2 border-[#1E3E62] rounded-2xl p-8 shadow-2xl font-poppins">

            <div className='flex items-center justify-between mb-6'>
              <div className='flex items-center gap-3'>
                <img
                  src="/assets/Iconkalender.png"
                  className="w-10 h-10"
                />
                <h2 className="text-2xl font-bold text-[#1E3E62]">
                  Jadwal
                </h2>
                <h2 className="text-2xl font-bold text-[#FF7F11]">
                  Konsultasi
                </h2>
              </div>
            </div>

            {/* Scrollable Cards */}
            <div className='flex flex-col gap-4 max-h-80 overflow-y-auto pr-2'>

              {/* Card 1 */}
              <div className='bg-[#F3F6FB] border-2 border-[#1E3E62] rounded-2xl p-6'>
                <h3 className='text-lg font-bold text-[#1E3E62] mb-4'>
                  Belum ada jadwal konsultasi
                </h3>
                <div className='flex items-center gap-3 mb-3'>
                  <img
                    src="/assets/scheduleicon.png"
                    className="w-6 h-6"
                  />
                  <span className='text-[#1E3E62]'>
                    --/--/--
                  </span>
                  <img
                    src="/assets/clockicon.png"
                    className="w-6 h-6"
                  />
                  <span className='text-[#1E3E62]'>
                    --:-- s.d. --:--
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className='bg-[#F3F6FB] border-2 border-[#1E3E62] rounded-2xl p-6'>
                <h3 className='text-lg font-bold text-[#1E3E62] mb-4'>
                  Belum ada jadwal konsultasi
                </h3>
                <div className='flex items-center gap-3 mb-3'>
                  <img
                    src="/assets/scheduleicon.png"
                    className="w-6 h-6"
                  />
                  <span className='text-[#1E3E62]'>
                    --/--/--
                  </span>
                  <img
                    src="/assets/clockicon.png"
                    className="w-6 h-6"
                  />
                  <span className='text-[#1E3E62]'>
                    --:-- s.d. --:--
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className='bg-[#F3F6FB] border-2 border-[#1E3E62] rounded-2xl p-6'>
                <h3 className='text-lg font-bold text-[#1E3E62] mb-4'>
                  Belum ada jadwal konsultasi
                </h3>
                <div className='flex items-center gap-3 mb-3'>
                  <img
                    src="/assets/scheduleicon.png"
                    className="w-6 h-6"
                  />
                  <span className='text-[#1E3E62]'>
                    --/--/--
                  </span>
                  <img
                    src="/assets/clockicon.png"
                    className="w-6 h-6"
                  />
                  <span className='text-[#1E3E62]'>
                    --:-- s.d. --:--
                  </span>
                </div>
              </div>
             {/* Card 4 */}
              <div className='bg-[#F3F6FB] border-2 border-[#1E3E62] rounded-2xl p-6'>
                <h3 className='text-lg font-bold text-[#1E3E62] mb-4'>
                  Belum ada jadwal konsultasi
                </h3>
                <div className='flex items-center gap-3 mb-3'>
                  <img
                    src="/assets/scheduleicon.png"
                    className="w-6 h-6"
                  />
                  <span className='text-[#1E3E62]'>
                    --/--/--
                  </span>
                  <img
                    src="/assets/clockicon.png"
                    className="w-6 h-6"
                  />
                  <span className='text-[#1E3E62]'>
                    --:-- s.d. --:--
                  </span>
                </div>
              </div>

              {/* Card 5 */}
              <div className='bg-[#F3F6FB] border-2 border-[#1E3E62] rounded-2xl p-6'>
                <h3 className='text-lg font-bold text-[#1E3E62] mb-4'>
                  Belum ada jadwal konsultasi
                </h3>
                <div className='flex items-center gap-3 mb-3'>
                  <img
                    src="/assets/scheduleicon.png"
                    className="w-6 h-6"
                  />
                  <span className='text-[#1E3E62]'>
                    --/--/--
                  </span>
                  <img
                    src="/assets/clockicon.png"
                    className="w-6 h-6"
                  />
                  <span className='text-[#1E3E62]'>
                    --:-- s.d. --:--
                  </span>
                </div>
              </div>

              {/* Card 6 */}
              <div className='bg-[#F3F6FB] border-2 border-[#1E3E62] rounded-2xl p-6'>
                <h3 className='text-lg font-bold text-[#1E3E62] mb-4'>
                  Belum ada jadwal konsultasi
                </h3>
                <div className='flex items-center gap-3 mb-3'>
                  <img
                    src="/assets/scheduleicon.png"
                    className="w-6 h-6"
                  />
                  <span className='text-[#1E3E62]'>
                    --/--/--
                  </span>
                  <img
                    src="/assets/clockicon.png"
                    className="w-6 h-6"
                  />
                  <span className='text-[#1E3E62]'>
                    --:-- s.d. --:--
                  </span>
                </div>
              </div>

                {/* Card 7 */}
                <div className='bg-[#F3F6FB] border-2 border-[#1E3E62] rounded-2xl p-6'>
                <h3 className='text-lg font-bold text-[#1E3E62] mb-4'>
                  Belum ada jadwal konsultasi
                </h3>
                <div className='flex items-center gap-3 mb-3'>
                  <img
                    src="/assets/scheduleicon.png"
                    className="w-6 h-6"
                  />
                  <span className='text-[#1E3E62]'>
                    --/--/--
                  </span>
                  <img
                    src="/assets/clockicon.png"
                    className="w-6 h-6"
                  />
                  <span className='text-[#1E3E62]'>
                    --:-- s.d. --:--
                  </span>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
