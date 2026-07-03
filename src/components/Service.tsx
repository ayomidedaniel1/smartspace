import React from 'react';
import { Featured1, Featured2 } from '../assets';
import { StaticAsset } from '../constants';

const getSrc = (asset: StaticAsset): string => {
  if (typeof asset === 'string') return asset;
  return asset.src;
};

const Service: React.FC = () => {
  return (
    <div id='service' className='flex flex-col mt-10 px-2 sm:px-6 lg:px-5 w-full'>
      <div className="flex justify-center mt-10 md:mb-12 mb-4 text-center">
        <h1 className="font-manrope font-semibold text-2xl md:text-4xl lg:text-5xl">Featured Space of the Week</h1>
      </div>
      <div className="flex lg:flex-row flex-col md:m-5 md:px-0 px-1 bg-[rgb(241,255,255)] rounded-2xl overflow-hidden border border-cyan-100 shadow-sm">
        <div className="flex flex-col lg:ml-28 md:mx-10 mx-4 md:mt-12 mt-5 md:w-auto w-full pr-0 lg:pr-10">
          <img src={getSrc(Featured1)} alt="Modern shared office lounge" className='-mb-10 rounded-xl shadow-md w-full max-w-sm mx-auto' />
          <img src={getSrc(Featured2)} alt="Private conference setup" className='-mt-10 rounded-xl shadow-md w-full max-w-sm mx-auto border-4 border-white' />
        </div>
        <div className="flex flex-col md:mt-10 mb-10 lg:ml-8 md:ml-6 px-4 md:px-0 md:mr-0 lg:mr-16 justify-center lg:w-1/2">
          <h2 className="font-manrope text-lg md:text-3xl lg:text-[2rem] leading-snug font-semibold text-black my-4">
            The Greenwich Foundry Tech Lounge
          </h2>
          <p className="font-manrope md:text-sm text-xs text-text-black mb-6">
            This premium workspaces offers dynamic hotdesks, dual-monitor desks, quiet focus rooms, and continuous high-speed Wi-Fi designed for high-performance software engineering teams.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-cyan-200/50 pt-6">
            <div className="flex flex-col">
              <span className="font-manrope font-bold text-xs md:text-base text-black">Monthly Desk</span>
              <span className="font-manrope text-xs md:text-sm text-text-black">From $290</span>
            </div>
            <div className="flex flex-col">
              <span className="font-manrope font-bold text-xs md:text-base text-black">Office Size</span>
              <span className="font-manrope text-xs md:text-sm text-text-black">1,200 m² total</span>
            </div>
            <div className="flex flex-col">
              <span className="font-manrope font-bold text-xs md:text-base text-black">Space Type</span>
              <span className="font-manrope text-xs md:text-sm text-text-black">Coworking & Suites</span>
            </div>
            <div className="flex flex-col">
              <span className="font-manrope font-bold text-xs md:text-base text-black">Backup Power</span>
              <span className="font-manrope text-xs md:text-sm text-text-black">UPS & Gen</span>
            </div>
            <div className="flex flex-col">
              <span className="font-manrope font-bold text-xs md:text-base text-black">Location</span>
              <span className="font-manrope text-xs md:text-sm text-text-black">London, UK</span>
            </div>
            <div className="flex flex-col">
              <span className="font-manrope font-bold text-xs md:text-base text-black">Facilities</span>
              <span className="font-manrope text-xs md:text-sm text-text-black">6 Meeting Rooms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
