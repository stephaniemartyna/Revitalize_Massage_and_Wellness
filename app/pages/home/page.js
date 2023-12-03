"use client";
import Navbar from '../../components/navbar';
import Info from '../../components/info';
import React from 'react';
import Revitalize from '../../img/marble.jpg';
import AboutUs from '../../img/aboutus.png';
import Image from 'next/image';
import Footer from '../../components/footer';


export default function Home() {
    return (
        <body className='bg-offwhite'>
        <>
        <Navbar />
        <div className='flex justify-center items-center'>
        <Image src={Revitalize} alt="Revitalize" className='w-full h-[600px]' />

          <div className="absolute w-[1153px] h-[128px] top-[246px]  [font-family:'Kameron',Helvetica] font-normal text-black text-[128px] text-center tracking-[5.76px] leading-[50px]">
            Revitalize
          </div>
          <div className="absolute w-[1153px] h-[128px] top-[346px]  [font-family:'Kapakana-Regular',Helvetica,] text-black text-[64px] text-center tracking-[5.76px] leading-[50px] font-thin ">
            Massage &amp; Wellness
          </div>
        </div>


        <Info />
        <Footer />
        </>
        </body>
    );
}
