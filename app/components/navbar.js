
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import Image from 'next/image';
import logo from "../img/logo.png";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50 h-50 bg-offwhite">
      <nav className="flex items-center p-6 lg:px-8" aria-label="Global">
        <div className="flex items-center lg:flex-1">

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5  px-3 py-2  hover:bg-gray-50">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'%3E%3Cpath fillRule='evenodd' d='M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z' clipRule='evenodd' /%3E%3C/svg%3E"
                  alt="Menu Icon"
                  className="w-6 h-6"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
              >
              <Menu.Items className="absolute left-3 z-10 mt-6 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Link href="/" passHref>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-md'
                          )}
                        >
                          Home
                        </a>
                      )}
                    </Menu.Item>
                  </Link>
                  <Link href="../pages/products" passHref>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-md'
                          )}
                        >
                          Products
                        </a>
                      )}
                    </Menu.Item>
                  </Link>
                  <Link href="../pages/contact" passHref>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block px-4 py-2 text-md'
                          )}
                        >
                          Contact Us
                        </a>
                      )}
                    </Menu.Item>
                  </Link>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        

        <div className="mr-6">
          <Image src={logo} width={200} height={50}
         className=" ml-4" alt="Your Company Logo" />
         
        </div>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="../pages/cart" className="text-xl font-semibold leading-6 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-6">
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
            </svg>
          </Link>
        </div>

      </nav>
    </header>
  );
}
