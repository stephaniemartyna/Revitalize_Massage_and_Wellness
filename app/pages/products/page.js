"use client";
import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Products from '@/app/components/products';


export default function ProductsPage () {

  return (
    <><>
    <div>
      <Navbar />
    </div>
    <div>
      < Products />
    </div>
    </><Footer /></>
  );
}