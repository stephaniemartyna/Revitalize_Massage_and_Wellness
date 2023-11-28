"use client";
import Navbar from './components/navbar';
import Info from './components/info';
import React from 'react';
import Revitalize from './img/Revitalize.png';
import Image from 'next/image';
import Footer from './components/footer';


export default function Home() {
    return (
        <body className='bg-offwhite'>
        <>
        <Navbar />
        <Image src={Revitalize} alt="Revitalize" className='w-full mt-20' />
        <Info />
        <Footer />
        </>
        </body>
    );
}
