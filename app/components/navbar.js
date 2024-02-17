"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Revitalize from '../img/logo2.jpg';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '../pages/products' },
  { name: 'Services', href: '../pages/services' },
  { name: 'Contact Us', href: '../pages/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-white shadow-3">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1 items-center">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image src={Revitalize} alt="Revitalize" className='h-10 w-auto' />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black hover:bg-gray-100 "
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-lg font-semibold leading-6 text-black">
              {item.name}
            </a>
          ))}
        </div>
        <div className=" hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <a href="https://revitalize-pearl.vercel.app/" className="text-lg font-semibold leading-7 text-darkgreen hover:text-gray-700">
            Log in
          </a>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={closeMobileMenu}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Revitalize</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={closeMobileMenu}
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
                    className=" -mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-darkgreen hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="https://revitalize-pearl.vercel.app/"
                  className="text-lg -mx-3 block rounded-lg px-3 py-2.5 font-semibold leading-7 text-darkgreen hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
