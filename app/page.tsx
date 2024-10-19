'use client'
import { useState } from 'react';
import Image from "next/image";
import Navbar from './components/Navbar'
import { FaBars, FaTimes} from "react-icons/fa";
import Hero from './components/Hero';
import Feature from './components/Feature';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

export default function Home() {

 

  return (
    <div className="min-h-screen flex bg-[url('/images/neww.avif')] bg-center bg-cover no-repeat w-full">
         {/* <div className="absolute inset-0 bg-black opacity-15"></div> */}
        <Navbar  />

      <div className="w-full  ">
            
          <Hero />
          <Feature/>
          <Testimonial />
          <Footer />
      
      </div>
    </div>
  );
}
