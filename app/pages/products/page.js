'use client';
import React from 'react';
import Navbar from '../../components/navbar';
import { useState} from 'react';
import Footer from '../../components/footer';


export default function Products( {}) {

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
    <><>
    <Navbar />
    <div className="bg-white flex-grow justify-items-center">
      <div className="">
      <div className="mt-20 mx-auto max-w-2xl px-10 py-10 sm:px-6 sm:py-10 lg:max-w-7xl ">
        <h2 className="text-3xl pb-10 font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center">
          Shop Our Products
        </h2>
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
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
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
    </>
    <Footer/></>
    </div>
  );
}