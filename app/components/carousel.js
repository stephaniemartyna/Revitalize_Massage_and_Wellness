
import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <button className='absolute top-1/2 transform -translate-y-1/2 text-2xl bg-transparent border-none cursor-pointer' onClick={prevSlide}>&lt;</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className='w-full h-auto block'/>
      <button className='absolute top-1/2 transform -translate-y-1/2 text-2xl bg-transparent border-none cursor-pointer' onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default Carousel;
