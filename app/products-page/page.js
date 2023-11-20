'use client';
import React from 'react';
import Navbar from '../components/navbar';
import { useState} from 'react';
import Image from 'next/image';

const products = [
{
id: 1,
name: 'BioFreeze',
href: '#',
price: '$48',
imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
imageAlt: 'BioFreeze',

},
{
id: 2,
name: 'Nomad Tumbler',
href: '#',
price: '$35',
imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
},
{
id: 3,
name: 'Focus Paper Refill',
href: '#',
price: '$89',
imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
},
{
id: 4,
name: 'Machined Mechanical Pencil',
href: '#',
price: '$35',
imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
},
]
export default function Products() {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [cart, setCart] = useState([]);
  
    const addToCart = () => {
      setCart([...cart, { ...selectedProduct, quantity }]);
      setSelectedProduct(null);
      setQuantity(1);
    };
  
    return (
        <><Navbar />
        <div className="bg-white">
            <div className="mt-20 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

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
                                        src={product.imageSrc}
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
                                src={selectedProduct.imageSrc}
                                alt={selectedProduct.imageAlt}
                                className="mb-4 w-full h-48 object-cover object-center" />
                            <p className="text-gray-700 mb-4">{selectedProduct.price}</p>
                            <p className="mb-4">Quantity: {quantity}</p>
                            <button
                                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                className="bg-gray-200 px-2 py-1 mr-2"
                            >
                                -
                            </button>
                            <span>{quantity}</span>
                            <button
                                onClick={() => setQuantity((prev) => prev + 1)}
                                className="bg-gray-200 px-2 py-1 ml-2"
                            >
                                +
                            </button>
                            <button onClick={addToCart} className="bg-lightgreen text-white px-4 py-2 mt-4 ml-10 hover:bg-darkgreen">
                                Add to Cart
                            </button>
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-0 right-0 m-4 cursor-pointer"
                            >
                                X
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div></>
    );
  }