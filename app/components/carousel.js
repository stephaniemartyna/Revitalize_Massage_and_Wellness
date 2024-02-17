import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const Carousel = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    arrows: false,
  };

  return (
    <Slider {...settings} className='mt-20 '>
      {slides.map((slide, index) => (
        <div key={index} className='relative'>
          <Image
            src={slide.image}
            alt={`Slide ${index + 1}`}
            width={400}
            height={800}
            className="w-full lg:h-[900px] object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
            <div className="text-center text-white">
              <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4">{slide.title}</h1>
              <p className="text-2xl mt-10 ml-40 pl-40 mr-40 pr-40 opacity-80 sm:hidden">{slide.info}</p>
              <button
                onClick={() => window.location.href = './services/page'}
                className="bg-white text-black text-lg font-bold px-8 py-4 mt-10 hover:bg-lightgreen sm:hidden hover:text-white rounded-xl"
              >
                {slide.button}
              </button>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
