import React from 'react';
import { Link } from 'react-router-dom';

import { navigation } from '../constants';

const Footer = () => {
  return (
    <div id='contact' className='flex flex-col mt-10'>
      <div className="flex justify-center md:mb-4 mb-0">
        <h1 className="font-manrope font-bold text-text-black md:text-5xl text-lg">Get Our Newsletter</h1>
      </div>
      <div className="flex justify-center md:mb-8 mb-3">
        <h1 className="font-manrope font-bold text-text-black md:text-xl text-xs">To join the worldwide community</h1>
      </div>

      <div className="flex justify-center md:mb-20 mb-5">
        <input
          type="text"
          className='input form-input md:h-14 h-7
            md:w-96 w-36 font-manrope md:text-sm text-[0.5rem] 
            text-text-black opacity-40 tracking-[0.01rem] mr-0'
          placeholder='Type your Email Address'
        />
        <input
          type="submit"
          value='Send Now'
          className='prop form-input md:h-14 h-7 md:w-40 w-20
          bg-[#f85a47] hover:bg-red-700 text-white tracking-[0.01rem]
          md:text-base text-[0.65rem] md:leading-5 sm:leading-4 leading-3 font-bold' />
      </div>

      <div className='divider md:my-10 md:mt-0 mt-4 mx-8 md:mx-20 lg:mx-40' />

      <div className="flex flex-col md:flex-row justify-between items-center h-16 bg-white text-black md:text-xs text-[0.5rem] w-11/12 font-bold">
        <Link to='/' className='lg:pl-40 md:pl-20 pl-0 mt-4 md:mt-0' role="navigation">
          <span className="font-manrope text-text-black md:text-lg text-[0.6rem] font-extrabold cursor-pointer">SmartSpace</span>
        </Link>
        <div className="lg:pr-10 pr-0">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className='md:p-4 p-1 hover:underline'
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center md:mb-8 mb-3 md:mt-0 mt-3">
        <h3 className="font-dmsans font-bold text-text-black md:text-xs text-[0.5rem]">Copyright ©2021 the-Aydev. All Rights Reseved.</h3>
      </div>
    </div>
  );
};

export default Footer;
