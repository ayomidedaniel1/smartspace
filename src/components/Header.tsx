'use client';

import React, { useState } from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';
import { Head, Buzz, Chase, Microsoft, Gucc, Airbnb, Uber } from '../assets';
import { useRouter } from 'next/navigation';
import { StaticAsset } from '../constants';

const getSrc = (asset: StaticAsset): string => {
  if (typeof asset === 'string') return asset;
  return asset.src;
};

const Header: React.FC = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/list?search=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      router.push('/list');
    }
  };

  return (
    <div id='home' className="h-full flex flex-col lg:flex-row md:justify-between lg:mt-20 md:mt-10 mt-6 lg:px-10 md:mb-10 w-full">
      <div className="flex flex-col fadeLeftMini lg:w-1/2">
        <h3 className='uppercase font-dmsans font-bold text-text-orange lg:text-lg md:text-base text-sm'>
          sustainable & comfy workspaces
        </h3>
        <h1 className='capitalize font-manrope font-extrabold text-black lg:text-[3rem] md:text-[3rem] text-[1.8rem] leading-tight md:pr-20 lg:pr-1'>
          smart working style for smart people
        </h1>
        <p className="font-manrope sm:leading-6 text-text-black md:text-sm pr-1 md:pr-20 lg:pr-10 sm:text-xs text-[0.7rem] leading-relaxed tracking-[0.01rem] mt-2">
          We are a community of bold minds who have decided to work under the same roof. By saying that our SmartSpace is sustainable and comfy, we confirm that you will get 100% satisfaction from working here and making the best out of this experience.
        </p>

        <form onSubmit={handleSearch} className='md:py-6 sm:py-4 py-2 flex items-center mt-4'>
          <input
            type="text"
            className='input form-input md:h-14 sm:h-12 h-10
            md:w-96 sm:w-72 w-44 font-manrope md:text-sm text-[0.6rem] 
            text-text-black opacity-80 tracking-[0.01rem] mr-0 px-4 rounded-l-md border border-gray-300'
            placeholder='Search workspaces in Nigeria, US, UK...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className='form-input md:h-14 sm:h-12 h-10 md:w-40 sm:w-32
            w-24 bg-[#f85a47] hover:bg-red-700 text-white tracking-[0.01rem]
            md:text-base sm:text-sm text-xs font-bold rounded-r-md transition-colors'
          >
            Search Now!
          </button>
        </form>

        <div className="lg:mt-16 md:mt-4 mt-4">
          <span className='text-text-black tracking-[0.005rem] font-manrope md:text-sm text-xs font-semibold'>Our Amazing Partners</span>
          <div className="flex mt-2 justify-start items-center space-x-3 md:space-x-5">
            <img className='md:w-14 sm:w-12 w-8 shadow p-1 bg-white rounded' src={getSrc(Buzz)} alt="Buzz" />
            <img className='md:w-14 sm:w-12 w-8 shadow p-1 bg-white rounded' src={getSrc(Chase)} alt="Chase" />
            <img className='md:w-14 sm:w-12 w-8 shadow p-1 bg-white rounded' src={getSrc(Microsoft)} alt="Microsoft" />
            <img className='md:w-14 sm:w-12 w-8 shadow p-1 bg-white rounded' src={getSrc(Gucc)} alt="Gucc" />
            <img className='md:w-14 sm:w-12 w-8 shadow p-1 bg-white rounded' src={getSrc(Airbnb)} alt="Airbnb" />
            <img className='md:w-14 sm:w-12 w-8 shadow p-1 bg-white rounded' src={getSrc(Uber)} alt="Uber" />
          </div>
        </div>
      </div>

      <div className="flex mr-4 lg:-mt-10 md:-mt-6 mt-6 justify-center lg:w-1/2 items-center">
        <img src={getSrc(Head)} alt="House" className='lg:w-full lg:h-auto md:w-[40rem] md:h-auto -ml-8 lg:-ml-0 md:-ml-12 mt-4 md:mt-10' />

        <div className="flex flex-col justify-center ml-4 space-y-3">
          <a href="#" aria-label="Facebook"><AiFillFacebook className='md:w-8 w-6 md:h-8 h-6 shadow p-1 bg-white rounded hover:text-[#f85a47] transition-colors' /></a>
          <a href="#" aria-label="Instagram"><AiFillInstagram className='md:w-8 w-6 md:h-8 h-6 shadow p-1 bg-white rounded hover:text-[#f85a47] transition-colors' /></a>
          <a href="#" aria-label="Twitter"><AiFillTwitterSquare className='md:w-8 w-6 md:h-8 h-6 shadow p-1 bg-white rounded hover:text-[#f85a47] transition-colors' /></a>
          <a href="#" aria-label="LinkedIn"><AiFillLinkedin className='md:w-8 w-6 md:h-8 h-6 shadow p-1 bg-white rounded hover:text-[#f85a47] transition-colors' /></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
