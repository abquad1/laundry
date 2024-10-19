import React from 'react'
import { TfiReload } from "react-icons/tfi";

function Testimonial() {
  return (
    <div className='md:w-full'>
      <div className='md:w-[80%] ml-[15%] '>
          <h1 className='text-center text-4xl font-bold text-[#254f4f]'>HOW IT WORKS</h1>

          <div className='flex space-x-16 items-center mt-8 bg-[#254f4f] p-6 rounded-lg'>
            <h1 className='font-bold uppercase text-2xl text-[#f5f5dc] text-center'>schedule a pickup</h1>
            <TfiReload className='text-5xl text-white'/>
            <h1 className='font-bold uppercase text-2xl text-[#f5f5dc] text-center'>we clean your clothes</h1>
            <TfiReload className='text-5xl text-white'/>
            <h1 className='font-bold uppercase text-2xl text-[#f5f5dc] text-center'>we deliver fresh laundary</h1>

          </div>
      </div>

      <div className='md:w-[80%] ml-[15%] mt-8 mb-8'>
        <h1 className='text-center text-4xl font-bold text-[#254f4f] uppercase'>what our customer says</h1>

        <div className='flex items-center space-x-6 mt-4'>
          <div className='text-lg text-[#254f4f] bg-[#f5f5dc] p-8 rounded-lg'>
              <p className=''>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>

              <h6 className='text-xl italic font-bold float-right'>- Abiodun Quadri</h6>
          </div>

          <div className='text-lg text-[#254f4f] bg-[#f5f5dc] p-8 rounded-lg'>
              <p className=''>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>

              <h6 className='text-xl italic font-bold float-right'>- Abiodun Quadri</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial