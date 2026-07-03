import React from 'react';
import Link from 'next/link';
import { navigation, StaticAsset } from '../constants';
import { Logo } from '../assets';

const getSrc = (asset: StaticAsset): string => {
  if (typeof asset === 'string') return asset;
  return asset.src;
};

const Footer: React.FC = () => {
  return (
    <footer id='contact' className='flex flex-col mt-10 w-full'>
      <div className="flex justify-center md:mb-4 mb-0">
        <h1 className="font-manrope font-bold text-text-black md:text-5xl text-lg">Get Our Newsletter</h1>
      </div>
      <div className="flex justify-center md:mb-8 mb-3">
        <p className="font-manrope font-bold text-text-black md:text-xl text-xs">To join the worldwide community</p>
      </div>

      <div className="flex justify-center md:mb-20 mb-5">
        <input
          type="email"
          className='input form-input md:h-14 h-7
            md:w-96 w-36 font-manrope md:text-sm text-[0.5rem] 
            text-text-black opacity-40 tracking-[0.01rem] mr-0 px-4 rounded-l-md border border-gray-300'
          placeholder='Type your Email Address'
        />
        <button
          type="submit"
          className='prop md:h-14 h-7 md:w-40 w-20
          bg-[#f85a47] hover:bg-red-700 text-white tracking-[0.01rem]
          md:text-base text-[0.65rem] md:leading-5 leading-3 font-bold rounded-r-md transition-colors'
        >
          Send Now
        </button>
      </div>

      <div className='divider md:my-10 md:mt-0 mt-4 mx-8 md:mx-20 lg:mx-40' />

      <div className="flex flex-col md:flex-row justify-between items-center h-16 bg-white text-black md:text-xs text-[0.5rem] w-full font-bold px-4">
        <Link href='/' className='lg:pl-40 md:pl-20 pl-0 mt-4 md:mt-0'>
          <img src={getSrc(Logo)} alt="SmartSpace" className="h-12 w-auto object-contain hover:opacity-80 transition-opacity" />
        </Link>
        <div className="lg:pr-10 pr-0 flex space-x-2 md:space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='md:p-4 p-1 hover:underline'
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center md:mb-8 mb-3 md:mt-0 mt-3">
        <h3 className="font-dmsans font-bold text-text-black md:text-xs text-[0.5rem]">Copyright ©2026 the-Aydev. All Rights Reserved.</h3>
      </div>
    </footer>
  );
};

export default Footer;
