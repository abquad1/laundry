import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='w-full '>
        <div className=' md:mx-[15%] sm: mx-[25%] sm: mt-[25%] md:mt-[10%] text-[#254f4f] w-[70%]'>
            <h1 className='md:text-6xl sm: text-4xl md:w-[65%] sm: w-full font-bold mb-5'>Reliable Laundry Services at Your Doorstep!</h1>
            <h3 className='text-2xl md:w-[50%] sm: w-full font-bold mb-5'>Convinient, Affordable and Professional Laundry Solutions</h3>
            <button type='button' className='h-12 w-36 border-none font-bold rounded-lg text-[#254f4f] text-lg bg-[#f5f5dc]'>Book Now</button>
        </div>

        

    </div>
  )
}

export default Hero