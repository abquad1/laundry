'use client'
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaFacebook,FaWhatsapp, FaInstagram,FaTwitter } from "react-icons/fa";
import { useState } from 'react';


const Navbar = ()=> {
 
  const [slide, setSlide] = useState(false)
  const handleClick = () =>{
    setSlide(!slide)
  }

  return (
    <div className={`h-screen bg-[#f5f5dc] text-[#254f4f] transition-transform ease-in-out duration-300] fixed top-0 left-0   ${slide? 'translate-x-0 md:w-[25%] sm: w-[55%]':''}`}>
        <div className={`flex flex-col p-4 h-full  ${slide? 'flex justify-evenly': 'flex justify-evenly'}`}  >
          
            <div onClick={handleClick} className='w-full flex justify-end cursor-pointer'>
              {slide? (<FaAngleDoubleLeft className='text-3xl hover:-translate-x-2'/>): (<FaAngleDoubleRight className='text-3xl hover:translate-x-2'/>)}
            </div>

          <div className={` ${slide? 'flex justify-center ': ''}`}>
            <Image alt='img' src="/images/2.png" width={50} height={100} className={`rounded-full ${slide? 'h-[200px] w-[200px]':''}`}></Image>
            
          </div>

          <div className={`${slide? 'block ':'hidden'}`}>
          <ul className='uppercase text-center'>
                <li className='font-bold text-lg '>
                    <Link href="/" className='my-4'>Home</Link>
                </li>

                <li className='font-bold text-lg  '>
                    <Link href="/Services">Services</Link>
                </li>

                <li className='font-bold text-lg  '>
                    <Link href="/About">Booking</Link>
                </li>

                <li className='font-bold text-lg  '>
                    <Link href="/Booking">About </Link>
                </li>

                <li className='font-bold text-lg mr-6 '>
                    <Link href="/Contact">Contact</Link>
                </li>
            </ul>
          </div>

           {/* Social icons */}

           <div className={`flex items-center ${slide? 'flex-row gap-8 justify-center' : 'flex-col gap-4'} `}>
            <Link href="/">
              <FaFacebook className='text-2xl mt-8'/>
            </Link>

            <Link href="/">
              <FaWhatsapp className='text-2xl mt-8'/>
            </Link>

            <Link href="/">
              <FaInstagram className='text-2xl mt-8'/>
            </Link>

            <Link href="/">
              <FaTwitter className='text-2xl mt-8'/>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Navbar