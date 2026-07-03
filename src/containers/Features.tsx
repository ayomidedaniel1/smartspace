'use client';

import React from 'react';
import { typeOfProperty, propertyData } from '../constants';
import { useRouter } from 'next/navigation';
import { Property } from '../components';
import Link from 'next/link';

const Features: React.FC = () => {
  const router = useRouter();

  return (
    <section id='portfolio' className='flex flex-col md:mt-32 mt-16 px-0 sm:px-6 w-full'>
      <div className="flex md:flex-row flex-col items-center justify-between w-full">
        <div className="flex flex-col md:w-2/3">
          <h1 className="font-manrope text-2xl md:text-3xl font-semibold md:pb-3 pb-1 text-black">Top Hybrid Spaces</h1>
          <span className='font-manrope md:text-base text-xs text-gray-600'>
            We are proud of our curated centers! Enjoy spaces filled with high-energy developers, creators, and freelancers.
          </span>
        </div>
        <div className="mt-4 md:mt-0 flex">
          <button 
            className='prop bg-[#f85a47] hover:bg-red-700 cursor-pointer rounded-md font-manrope font-medium md:text-sm text-xs md:py-3 md:px-5 py-2 px-4 text-center text-white font-bold transition-colors'
            onClick={() => router.push('/list')}
          >
            View All Workspaces
          </button>
        </div>
      </div>

      <div className="flex mt-8 font-manrope font-semibold cursor-pointer justify-start text-center text-black lg:text-lg md:text-base text-[0.65rem] space-x-2 md:space-x-6 border-b border-gray-100 pb-2">
        {typeOfProperty.map((item) => (
          <Link href={item.href} key={item.type} className="hover:text-[#f85a47] active:underline pr-2 md:pr-4">
            {item.type}
          </Link>
        ))}
      </div>

      <div className="flex flex-col mt-5 md:grid md:grid-cols-3 gap-6">
        {propertyData.map((item, index) => (
          <Property key={index} img={item.img} />
        ))}
      </div>
    </section>
  );
};

export default Features;
