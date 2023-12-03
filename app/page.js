"use client";
import React from 'react';
import Image from 'next/image';
import Revitalize from './img/logo.png';
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'About Us', href: '#' },
  { name: 'Products', href: './pages/products' },
  { name: 'Services', href: './pages/services' },
  { name: 'Contact Us', href: './pages/contact' },
]

const backgroundImage = {
    backgroundImage: `url('./images/background3.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
};

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <body className="flex justify-center " style={backgroundImage}>
<header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="./pages/home" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image src={Revitalize} alt="Revitalize" className='h-8 w-auto' />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-l font-semibold leading-6 text-gray-900">
                {item.name}
              </a>
            ))}          
            </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        
          </div>
        </nav>

        
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Revitalize</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className=" -mx-3 block rounded-lg px-3 py-2 text-l font-semibold leading-7 text-darkgreen hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-darkgreen hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>


      </header>
      <div className="relative isolate px-6 pt-20 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-6xl tracking-tight text-gray-900 sm:text-6xl [font-family:'Kameron',Helvetica]">
              Welcome!
            </h1>
            <h2 className="mt-10 text-2xl tracking-tight text-gray-900 sm:text-3xl [font-family:'Kapakana-Regular',Helvetica,]">
            Revitalize Massage &amp; Wellness
            </h2>
            <p className="mt-5 pt-10 max-w-prose mx-auto text-xl text-gray-500">
              We are a team of massage therapists and wellness professionals who are dedicated to helping you feel your best. 
              Our goal is to provide you with the best possible care so that you can live a healthier life.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="./pages/home" className="text-xl font-semibold leading-6 text-gray-900 hover:text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
        </div>
      </div>
      </body>  
      )
}