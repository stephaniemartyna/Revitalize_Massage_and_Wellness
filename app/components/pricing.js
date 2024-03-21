"use client";
import React from 'react'
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Servicesphoto from '../img/services.jpg';


const frequencies = [
    { value: '60', label: '60 Minutes', priceSuffix: '/60 Minutes' },
    { value: '90', label: '90 Minutes', priceSuffix: '/90 Minutes' },
  ]
  const tiers = [
    {
      name: 'Massage Therapy',
      id: 'theraputic',
      href: 'https://revitalize-pearl.vercel.app/',
      price: { 60: '$95', 90: '$145' },
      description: 'The essentials to provide your best work for clients.',
      features: ['Deep Tissue', 'Relaxation', 'Theraputic', 'Cupping Therapy'],
    },
    {
      name: 'Buccal Facial',
      id: 'face-sculpting',
      href: 'https://revitalize-pearl.vercel.app/',
      price: { 60: '$180', 90: '$270' },
      description: 'Improving circulation in the muscles and tissues of the face',
      features: ['Gua Sha', 'Facial Cupping', 'Face/Scalp Massage', 'Hot Towel Therapy'],
    },
    {
      name: 'Hot Stone Massage',
      id: 'hot-stone',
      href: 'https://revitalize-pearl.vercel.app/',
      price: { 60: 'N/A', 90: '$155' },
      description: 'Smooth, heated stones placed on specific points on the body.',
      features: [
        'A deep relaxation massage done with smooth hot basalt stones.',
      ],
    },
    {
      name: 'Rejuvenation',
      id: 'rejuvenation',
      href: 'https://revitalize-pearl.vercel.app/',
      price: { 60: 'N/A', 90: '$275' },
      description: 'A combination of massage and Buccal therapy. .',
      features: [
        '1 Hour Massage Therapy',
        '30 min Face Sculpting & Buccal Therapy',
      ],
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Pricing() {
    const [frequency, setFrequency] = useState(frequencies[0])
  
    return (
      <div className="bg-white py-20 sm:py-20">
              <div className="">
      <div aria-hidden="true" className="relative">
          <Image
            src={Servicesphoto}
            alt="A person organizing their desk."
            className="h-96 w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mt-2 text-4xl font-bold tracking-widest text-gray-900 sm:text-5xl">
              Pricing
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-5xl text-center text-lg leading-8 text-gray-600">
          Indulge in serenity at Revitalize Massage and Wellness. Our skilled therapists offer a range of  massages, from calming Face Sculpting to revitalizing deep tissue sessions. To enhance your experience, we provide insurance direct billing for a seamless and stress-free visit. Discover tranquility and wellness at Revitalize—where relaxation meets rejuvenation.
          </p>
          <div className="mt-20 flex justify-center">
            <RadioGroup
              value={frequency}
              onChange={setFrequency}
              className="grid grid-cols-2 gap-x-10 rounded-full p-5 text-center text-md font-semibold leading-5 ring-1 ring-inset ring-maingreen"
            >
              <RadioGroup.Label className="sr-only">Appointment Length</RadioGroup.Label>
              {frequencies.map((option) => (
                <RadioGroup.Option
                  key={option.value}
                  value={option}
                  className={({ checked }) =>
                    classNames(
                      checked ? 'bg-maingreen text-white' : 'text-gray-500',
                      'cursor-pointer rounded-full px-2.5 py-1'
                    )
                  }
                >
                  <span>{option.label}</span>
                </RadioGroup.Option>
              ))}
            </RadioGroup>
          </div>
          
          
          <div className="isolate mx-auto mt-20 mb-20 grid max-w-md grid-cols-1 gap-6 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  'ring-1 ring-maingreen',
                  'rounded-3xl p-8'
                )}
              >
                <h3
                  id={tier.id}
                  className={classNames(
                    'text-gray-900',
                    'text-xl font-semibold leading-8'
                  )}
                >
                  {tier.name}
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">{tier.price[frequency.value]}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">{frequency.priceSuffix}</span>
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    'text-white bg-maingreen mt-6 block rounded-md py-2 px-3 text-center lg:text-lg sm:text-sm font-semibold leading-6 hover:bg-darkgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkgreen'
                  )}
                >
                  Book Now
                </a>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3 lg:text-lg sm:text-sm">
                      <ChevronDoubleRightIcon className="h-6 w-5 flex-none text-accent" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
