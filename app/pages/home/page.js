"use client";
import Navbar from '../../components/navbar';
import Info from '../../components/info';
import React from 'react';
import Revitalize from '../../img/plant.jpg';
import Image from 'next/image';
import Footer from '../../components/footer';


export default function Home() {
    return (
        <body className='bg-offwhite'>
        <>
        <Navbar />
        <div className='flex justify-center items-center'>
        <Image src={Revitalize} alt="Revitalize" className='w-full h-[500px] opacity-50 shadow-xl ' />

          <div className="absolute w-[1153px] h-[100px] top-[200px]  [font-family:'Kameron',Helvetica] font-normal text-darkgreen text-[128px] text-center tracking-[5.76px] leading-[50px]">
            Revitalize
          </div>
          <div className="absolute w-[1153px] h-[128px] top-[280px]  [font-family:'Kapakana-Regular',Helvetica,] text-black text-[64px] text-center tracking-[5.76px] leading-[50px] font-thin ">
            Massage &amp; Wellness
          </div>
        </div>
        <Info />
        <Footer />
        </>
        </body>
    );
}
