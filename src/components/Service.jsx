import React from 'react';
import { Featured1, Featured2 } from '../assets';

const Service = () => {
  return (
    <div id='service' className='flex flex-col mt-10 px-2 sm:px-6 lg:px-5'>
      <div className="flex justify-center mt-10 md:mb-12 mb-0">
        <h1 className="font-manrope font-semibold text-base md:text-4xl lg:text-5xl">Featured Listing Of The Week</h1>
      </div>
      <div className="flex lg:flex-row flex-col md:m-5 md:px-0 px-1 bg-[rgb(241,255,255)]">
        <div className="flex flex-col lg:ml-28 md:mx-10 mx-1 md:mt-12 mt-5">
          <img src={Featured1} alt="img" className='-mb-10' />
          <img src={Featured2} alt="img" className='-mt-10' />
        </div>
        <div className="flex flex-col md:-mt-40 -mt-14 lg:mt-10 mb-10 lg:ml-8 md:ml-6 md:-mr-8 lg:mr-20">
          <h1 className="font-manrope text-sm md:text-3xl lg:text-[2rem] leading-5 md:leading-10 font-semibold md:pl-0 pl-1 lg:pr-20 my-4 lg:my-6 md:mr-0">The and collecting for the motionless difficulty son.</h1>
          <span className="font-manrope md:text-sm text-[0.65rem] text-text-black md:pr-52">Conveying or northward offending admitting perfectly my. Colonel gravity get thought fat smiling add but difficult situations.</span>
          <div className="grid md:grid-cols-3 grid-cols-2 md:gap-x-0 gap-x-20 md:gap-y-0 gap-y-1">
            <div className="flex flex-col">
              <h2 className="font-manrope font-bold text-xs md:text-base my-2 md:my-4">Budget</h2>
              <span className="font-manrope text-[0.65rem] md:text-sm text-text-black">Confidential</span>
            </div>
            <div className="flex flex-col">
              <h2 className="font-manrope font-bold text-xs md:text-base my-2 md:my-4">Size</h2>
              <span className="font-manrope text-[0.65rem] md:text-sm text-text-black">1200 m2</span>
            </div>
            <div className="flex flex-col">
              <h2 className="font-manrope font-bold text-xs md:text-base my-2 md:my-4">Type</h2>
              <span className="font-manrope text-[0.65rem] md:text-sm text-text-black">Office</span>
            </div>
            <div className="flex flex-col">
              <h2 className="font-manrope font-bold text-xs md:text-base my-2 md:my-4">Status</h2>
              <span className="font-manrope text-[0.65rem] md:text-sm text-text-black">Done</span>
            </div>
            <div className="flex flex-col">
              <h2 className="font-manrope font-bold text-xs md:text-base my-2 md:my-4">Location</h2>
              <span className="font-manrope text-[0.65rem] md:text-sm text-text-black">Switzerland</span>
            </div>
            <div className="flex flex-col">
              <h2 className="font-manrope font-bold text-xs md:text-base my-2 md:my-4">Flat</h2>
              <span className="font-manrope text-[0.65rem] md:text-sm text-text-black">8 Room</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
