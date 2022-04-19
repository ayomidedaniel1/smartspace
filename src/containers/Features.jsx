import React from 'react';
import { Residential1, Residential2, Residential3 } from '../assets';
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const featuresData = [
  {
    img: Residential1
  },
  {
    img: Residential2
  },
  {
    img: Residential3
  },
];

const Features = () => {
  return (
    <div id='portfolio' className='flex mt-32 px-0 sm:px-6'>
      <div className="flex md:flex-row flex-col items-center">
        <div className="flex flex-col">
          <h1 className="font-manrope text-base md:text-3xl font-semibold md:pb-3 pb-1">Best Real Estate Deals</h1>
          <span className='font-manrope md:text-base text-[0.6rem] md:pb-2'>
            Colonel gravity get thought fat smiling add but. Wonder twenty hunted and put income set desire expect.
          </span>
        </div>
        <div className="flex md:ml-40 lg:ml-96 md:mr-0 lg:pl-48 md:pl-10 pl-32">
          <input className='prop form-input bg-[#f85a47] hover:bg-red-700 cursor-pointer rounded-md font-manrope font-medium md:text-sm text-xs md:py-3 md:px-5 text-center text-white' type="button" value="View All Property" />
        </div>
      </div>


    </div>
  );
};

export default Features;