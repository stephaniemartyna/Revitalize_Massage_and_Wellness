"use client";
import Navbar from '@/app/components/navbar';
import React from 'react';
import Footer from '@/app/components/footer';
import Carousel from '@/app/components/carousel';
import { HomeCard } from '@/app/components/therapies';   
import { MeetMe } from '@/app/components/meetme';
import { Testimonial } from '@/app/components/testimonial'; 

export default function Home() {

    const slides = [
        { image: '/images/succulant.jpg', title: 'Revitalize Massage and Wellness', info: 'We are dedicated to providing our clients with the best massage therapy services. Our team of registered massage therapists are highly skilled and experienced in a variety of massage therapy techniques. We offer a wide range of massage therapy services including deep tissue massage, hot stone massage, and more. ', button: 'Learn More'},
        { image: '/images/black-white-hero.jpg', title: 'RELAX.', info: 'Indulge in the Art of Relaxation at Revitalize Massage and Wellness', button: 'Book Now'},
        { image: '/images/rock-hero.jpg', title: 'REJUVENATE.', info: 'Escape to Tranquility: Rejuvenate Your Body and Mind with Expert Massage Therapy', button: 'Learn More'},
      ];

    return (
        <>
        <Navbar />
        <Carousel slides={slides} />
        <HomeCard />
        <MeetMe />
        <Testimonial />
        <Footer />
        </>
    );
}
