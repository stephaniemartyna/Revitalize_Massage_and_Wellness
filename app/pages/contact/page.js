"use client";
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Map from '../../components/map';
import FAQ from '../../components/faq';
import ContactForm from '@/app/components/contactForm';


export default function ContactUs () {

  return (
    <><>
    <div>
      <Navbar />
    </div>
    
    <div>
      < ContactForm />
    </div>

    <Map />
    <FAQ />
    
    </><Footer /></>
  );
}