import React from 'react'
import { FaTruckPickup } from "react-icons/fa";
import { MdDryCleaning } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5"

function Feature() {
  return (
    <div className='w-full '>
        <div className='md:flex sm: block items-center ml-[15%] mt-[5%] gap-12 text-[#254f4f] md:w-[80%] sm:w-full '>
            <div className='bg-[#f5f5dc] p-8 rounded-lg md:w-1/3 sm: w-[80%] sm: m-auto sm: mb-8 '>
                <FaTruckPickup className='text-[52px] w-[50%] m-auto'/>
                <p className='text-2xl w-[50%] m-auto text-center font-bold'>Free Pickup and Delivery</p>
            </div>

            <div className='bg-[#f5f5dc] p-8 rounded-lg md:w-1/3 sm: w-[80%] sm: m-auto sm: mb-8 '>
                <MdDryCleaning className='text-[52px] w-[50%] m-auto'/>
                <p className='text-2xl w-[50%] m-auto text-center font-bold'>Eco-friendly Cleaning</p>
            </div>

            <div className='bg-[#f5f5dc] p-8 rounded-lg md:w-1/3 sm: w-[80%] sm: m-auto sm: mb-8'>
                <IoPricetagsOutline className='text-[52px] w-[50%] m-auto'/>
                <p className='text-2xl w-[50%] m-auto text-center font-bold'>Affordable pricing</p>
            </div>
        </div>
    </div>
  )
}

export default Feature