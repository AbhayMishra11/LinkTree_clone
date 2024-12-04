import React from 'react'
import Image from 'next/image'

const Generate = () => {
  return (
    <div className='h-full grid grid-cols-2 bg-[#225abf]'>
      <div className="col1 flex flex-col gap-20 justify-center items-center">
        <h1 className='font-bold text-5xl text-white'>Create Your BitTree</h1>
        <div className='flex flex-col gap-9'>
          <div className="items">
            <h1 className='font-semibold text-2xl text-white'>Step 1: Claim Your Handle</h1>
            <div className="mx-4 mt-6">
              <input className='px-24 py-6 rounded-xl focus:outline-pink-600' type="text" placeholder='Choose a handle' />
            </div>
          </div>

          <div className="items">
            <h1 className='font-semibold text-2xl text-white'>Step 2: Add Links</h1>
            <div className="mx-4 flex flex-col gap-6 mt-6">
              <input className='px-24 py-6 rounded-xl focus:outline-pink-600' type="text" placeholder='Enter link text' />
              <input className='px-24 py-6 rounded-xl focus:outline-pink-600' type="text" placeholder='Enter link' />
            </div>
          </div>

          <div className="items">
            <h1 className='font-semibold text-2xl text-white'>Step 3: Add a Picture and Finalize</h1>
            <div className="mx-4 mt-6">
              <input className='px-24 py-6 rounded-xl focus:outline-pink-600' type="text" placeholder='Add picture' />
            </div>
          </div>
        </div>
      </div>

      <div className="col2">
        <img src="/Banner.png" alt="Banner" className='w-full' />
      </div>
    </div>
  )
}

export default Generate
