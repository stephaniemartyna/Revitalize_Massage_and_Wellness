'use client';
import React from 'react';
import { useState} from 'react';
import Image from 'next/image';
import Servicesphoto from '../img/services.jpg';



export default function Products() {

    const products = [
        {
        id: 1,
        name: 'Natural Face Cream',
        href: '#',
        price: '$14',
        imageUrl: "https://images.pexels.com/photos/5217926/pexels-photo-5217926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        imageAlt: 'Natural Face Cream',
        
        },
        {
        id: 2,
        name: 'Essential Oil Infused Massage Oil',
        href: '#',
        price: '$12',
        imageUrl: 'https://images.pexels.com/photos/6694194/pexels-photo-6694194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: 'Essential Oil Infused Massage Oil',
        },
        {
        id: 3,
        name: 'Essential Oil Candle',
        href: '#',
        price: '$17',
        imageUrl: 'https://images.pexels.com/photos/1721096/pexels-photo-1721096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: 'Essential Oil Candle',
        },
        {
        id: 4,
        name: 'Jade stone Face Massage Roller',
        href: '#',
        price: '$35',
        imageUrl: 'https://images.pexels.com/photos/6621434/pexels-photo-6621434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        imageAlt: 'Jade stone Face Massage Roller',
        },
        ]

 
    const [selectedProduct, setSelectedProduct] = useState(null);  
    const redirectToContactUs = () => {
      window.location.href = '../pages/contact';
    };

return (
    <div className='flex flex-col min-h-screen bg-white'>
    <div className="bg-white flex-grow justify-items-center mt-20">
      <div className="">
      <div aria-hidden="true" className="relative">
          <Image
            src={Servicesphoto}
            alt="A person organizing their desk."
            className="h-96 w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>
  
        <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-widest text-gray-900 sm:text-4xl">Shop Our Products</h2>
            <p className="mt-10 mb-20 text-gray-500">
              We offer a variety of products to help you relax and rejuvenate. Our products are made with natural ingredients and are designed to help you feel your best.
            </p>
          </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <a
                href={product.href}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedProduct(product);
                } }
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageUrl}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75" />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 mb-10 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            </div>
          ))}
        </div>

        {selectedProduct && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 max-w-md w-full rounded-lg">
              <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.imageAlt}
                className="mb-4 w-full h-48 object-cover object-center" />
              <p className="text-gray-700 mb-4 text-xl font-semibold mt-10">Price:    {selectedProduct.price}</p>
              <button
              className="bg-lightgreen text-white py-3 px-10 rounded-lg hover:bg-darkgreen hover:text-white transition duration-200"
              onClick={redirectToContactUs}
              >
              Contact us to purchase
              </button>
              <button
                onClick={() => setSelectedProduct(null)}
                className="cursor-pointer text-black px-4 py-2 mt-4 ml-10 text-decoration-line: underline font-style: italic hover:text-lightgreen"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
        </div>
    </div>
</div>
  );
}