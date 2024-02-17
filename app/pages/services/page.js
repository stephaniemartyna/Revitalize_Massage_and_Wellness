"use client";
import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import Navbar from '../../components/navbar';
import Footer from '@/app/components/footer';

const massagetherapy = [
  'Deep Tissue',
  'Relaxtion',
  'Theraputic',
  'Cupping Therapy',
]

const facetherapy = [
    'Gua Sha',
    'Facial Cupping', 
    'Face/Scalp Massage', 
    'Hot Towel Therapy',
]

const hotstonetherapy = [
    'A deep relaxation massage done with smooth hot basalt stones.',
]

const rejuvenationtherapy = [
    '1 Hour Massage Therapy',
    '1 Hour Face Sculpting & Buccal Therapy',
]

export default function Example() {
  return (
    <><Navbar />
    <div className="bg-white py-24 sm:py-32">

        {/* Page Title */}
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Services We Offer</h2>
              </div>

            {/* Information about services offered */}
                <div className="mt-10 mb-20 flex items-center gap-x-4">
                    <div className="h-px flex-auto bg-gray-100" />
                    <p className="text-lg leading-6 text-darkgrey text-center italic ">
                    Indulge in serenity at Revitalize Massage and Wellness. Our skilled therapists offer a range of  massages, from calming Face Sculpting
                    to revitalizing deep tissue sessions. To enhance your experience, we provide insurance direct billing for a seamless and stress-free visit. 
                    Discover tranquility and wellness at Revitalize—where relaxation meets rejuvenation.
                    </p>
                </div>

              {/* Services box - Massage Therapy */}
              <div className="bg-lightgreen mx-auto mt-10 max-w-xl rounded-3xl ring-2 ring-lightgreen sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
                  <div className="p-4 sm:p-10 lg:flex-auto">
                      <h3 className="text-3xl font-bold tracking-tight text-black">Massage Therapy - 60 minutes</h3>
                      <div className="mt-10 flex items-center gap-x-4">
                          <div className="h-px flex-auto bg-gray-100" />
                      </div>
                      <ul
                          role="list"
                          className="mt-8 grid grid-cols-1 gap-4 text-md font-bold leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                      >
                          {massagetherapy.map((feature) => (
                              <li key={feature} className="flex gap-x-3">
                                  <CheckIcon className="h-6 w-5 flex-none text-darkgreen" aria-hidden="true" />
                                  {feature}
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                      <div className="bg-white rounded-2xl py-5 text-center ring-2 ring-inset ring-lightgreen lg:flex lg:flex-col lg:justify-center lg:py-8">
                          <div className="mx-auto max-w-xs px-8">
                              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                  <span className="text-5xl font-bold tracking-tight text-gray-900">$95.00</span>
                                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600"></span>
                              </p>
                              <a
                                  href="https://revitalize-pearl.vercel.app/"
                                  className="mt-10 block w-full rounded-lg bg-lightgreen px-3 py-2 text-center text-sm font-semibold text-white  hover:bg-darkgreen hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkgreen"                              >
                                  Login To Book Appointment
                              </a>
                              <p className="mt-6 text-xs leading-5 text-gray-600">
                                  Receipts provided for insurance purposes.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>


                {/* Services box - Face Sculpting */}
                <div className="bg-lightgreen mx-auto mt-10 max-w-xl rounded-3xl ring-2 ring-lightgreen sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
                  <div className="p-4 sm:p-10 lg:flex-auto">
                      <h3 className="text-3xl font-bold tracking-tight text-black">Face Sculpting & Buccal Therapy - 60 minutes</h3>
                      <div className="mt-10 flex items-center gap-x-4">
                          <div className="h-px flex-auto bg-gray-100" />
                      </div>
                      <ul
                          role="list"
                          className="mt-8 grid grid-cols-1 gap-4 text-md font-bold leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                      >
                          {facetherapy.map((feature) => (
                              <li key={feature} className="flex gap-x-3">
                                  <CheckIcon className="h-6 w-5 flex-none text-darkgreen" aria-hidden="true" />
                                  {feature}
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                      <div className="bg-white rounded-2xl py-5 text-center ring-2 ring-inset ring-lightgreen lg:flex lg:flex-col lg:justify-center lg:py-8">
                          <div className="mx-auto max-w-xs px-8">
                              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                  <span className="text-5xl font-bold tracking-tight text-gray-900">$180.00</span>
                                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600"></span>
                              </p>
                              <a
                                  href="https://revitalize-pearl.vercel.app/"
                                  className="mt-10 block w-full rounded-lg bg-lightgreen px-3 py-2 text-center text-sm font-semibold text-white  hover:bg-darkgreen hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkgreen"                              >
                                  Login To Book Appointment
                              </a>
                              <p className="mt-6 text-xs leading-5 text-gray-600">
                                  Receipts provided for insurance purposes.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>

                {/* Services box - Hot Stone Massage */}
                <div className="bg-lightgreen mx-auto mt-10 max-w-xl rounded-3xl ring-2 ring-lightgreen sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
                  <div className="p-4 sm:p-10 lg:flex-auto">
                      <h3 className="text-3xl font-bold tracking-tight text-black">Hot Stone Massage - 90 minutes</h3>
                      <div className="mt-10 flex items-center gap-x-4">
                          <div className="h-px flex-auto bg-gray-100" />
                      </div>
                      <ul
                          role="list"
                          className="mt-8 grid grid-cols-1 gap-4 text-md font-bold leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                      >
                          {hotstonetherapy.map((feature) => (
                              <li key={feature} className="flex gap-x-3">
                                  <CheckIcon className="h-6 w-5 flex-none text-darkgreen" aria-hidden="true" />
                                  {feature}
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                      <div className="bg-white rounded-2xl py-5 text-center ring-2 ring-inset ring-lightgreen lg:flex lg:flex-col lg:justify-center lg:py-8">
                          <div className="mx-auto max-w-xs px-8">
                              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                  <span className="text-5xl font-bold tracking-tight text-gray-900">$155.00</span>
                                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600"></span>
                              </p>
                              <a
                                  href="https://revitalize-pearl.vercel.app/"
                                  className="mt-10 block w-full rounded-lg bg-lightgreen px-3 py-2 text-center text-sm font-semibold text-white  hover:bg-darkgreen hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkgreen"                              >
                                  Login To Book Appointment
                              </a>
                              <p className="mt-6 text-xs leading-5 text-gray-600">
                                  Receipts provided for insurance purposes.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>

                {/* Services box - Rejuvenation */}
                <div className="bg-lightgreen mx-auto mt-10 max-w-xl rounded-3xl ring-2 ring-lightgreen sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
                  <div className="p-4 sm:p-10 lg:flex-auto">
                      <h3 className="text-3xl font-bold tracking-tight text-black">Rejuvenation Treatment - 120 minutes</h3>
                      <div className="mt-10 flex items-center gap-x-4">
                          <div className="h-px flex-auto bg-gray-100" />
                      </div>
                      <ul
                          role="list"
                          className="mt-8 grid grid-cols-1 gap-4 text-md font-bold leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                      >
                          {rejuvenationtherapy.map((feature) => (
                              <li key={feature} className="flex gap-x-3">
                                  <CheckIcon className="h-6 w-5 flex-none text-darkgreen" aria-hidden="true" />
                                  {feature}
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                      <div className="bg-white rounded-2xl py-5 text-center ring-2 ring-inset ring-lightgreen lg:flex lg:flex-col lg:justify-center lg:py-8">
                          <div className="mx-auto max-w-xs px-8">
                              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                  <span className="text-5xl font-bold tracking-tight text-gray-900">$275.00</span>
                                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600"></span>
                              </p>
                              <a
                                  href="https://revitalize-pearl.vercel.app/"
                                  className="mt-10 block w-full rounded-lg bg-lightgreen px-3 py-2 text-center text-sm font-semibold text-white  hover:bg-darkgreen hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkgreen"
                              >
                                  Login To Book Appointment
                              </a>
                              <p className="mt-6 text-xs leading-5 text-gray-600">
                                  Receipts provided for insurance purposes.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>

          </div>
      </div>

      <Footer />
      </>
  )
}
