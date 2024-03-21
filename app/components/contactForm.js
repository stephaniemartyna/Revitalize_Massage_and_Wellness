"use client";
import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import massagepicture from '@/app/img/massage-portrait.jpg';



export default function ContactForm () {

const [showPopup, setShowPopup] = React.useState(false);
  const [firstName, setFirstName] = useState('');
  const [formValues, setFormValues] = useState({
    'first-name': '',
    'last-name': '',
    'company': '',
    'email': '',
    'country': 'CA',
    'phone-number': '',
    'message': ''
  });

    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "9eae212b-0152-4a3c-9cc6-a10a5a0b8500");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setFirstName(object['first-name']); 
      setShowPopup(true);
      setFormValues({
        'first-name': '',
        'last-name': '',
        'company': '',
        'email': '',
        'country': 'CA',
        'phone-number': '',
        'message': ''
      });
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  
  return (
    <div className="relative">
      <div className="mx-auto lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-10 pt-10 sm:pb-32 lg:col-span-4 lg:px-0 lg:pb-10 lg:pt-20 xl:col-span-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-widest text-gray-900 pt-20">Need more information?</h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">Send us a message and we will get back to you as soon as possible.</p>
          </div>
        <form onSubmit={onSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-md font-semibold leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  value={formValues['first-name']}
                  onChange={handleInputChange}
                  className="block w-full rounded-md text-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgreen placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkgreen sm:leading-6" />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-md font-semibold leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  value={formValues['last-name']}
                  onChange={handleInputChange}
                  className="block w-full text-md rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgreen placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkgreen sm:leading-6" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-md font-semibold leading-6 text-gray-900">
                Company
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  value={formValues['company']}
                  onChange={handleInputChange}
                  className="block w-full rounded-md text-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgreen placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkgreen sm:leading-6" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-md font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  value={formValues['email']}
                  onChange={handleInputChange}
                  className="block w-full rounded-md text-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgreen placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkgreen sm:leading-6" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-md font-semibold leading-6 text-gray-900">
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formValues['country']}
                    onChange={handleInputChange}
                    className=" ml-1 rounded-md text-md border-0 bg-transparent bg-none py-1.5 pl-4 pr-9 text-gray-400 focus:ring-white"
                  >
                    <option>CA</option>
                    <option>US</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                    aria-hidden="true" />
                </div>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  value={formValues['phone-number']}
                  onChange={handleInputChange}
                  className="block pl-20 w-full rounded-md text-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgreen placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkgreen sm:leading-6" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-md font-semibold leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-lightgreen placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-darkgreen sm:leading-6"
                  value={formValues['message']}
                  onChange={handleInputChange} />
              </div>
            </div>
          </div>
          <div className="mt-10 sm:mb-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-lightgreen px-5 py-5 text-center text-lg font-semibold text-white hover:bg-darkgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkgreen "
            >
              Send Message
            </button>
          </div>
        </form>
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-md text-center">
              <p className="text-lg font-semibold text-gray-800">
                Thank you, {firstName}, for your message!
              </p>
              <button
                onClick={() => {
                  closePopup();
                }}
                className="mt-4 px-4 py-2 bg-lightgreen text-white rounded-md hover:bg-darkgreen focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-darkgreen"
              >
                Close
              </button>
            </div>
          </div>
        )}
        </div>
        <div className="relative shadow-5 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            className="aspect-[3/2] w-auto bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
            src={massagepicture}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
