"use client";
import Navbar from '@/app/components/navbar';
import React from 'react';
import Footer from '@/app/components/footer';
import { HomeCard } from '@/app/components/therapies';   
import { MeetMe } from '@/app/components/meetme';
import { Hero } from '@/app/components/hero';
import { Reviews } from './components/reviews';

export default function Home() {

    return (
        <>
        <Navbar />
        <Hero />
        <HomeCard />
        <MeetMe />
        <Reviews />
        <Footer />
        </>
    );
}
