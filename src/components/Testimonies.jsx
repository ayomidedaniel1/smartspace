import React from 'react';

const Testimonies = ({ review, text, dp, name, city }) => {
  return (
    <div className='flex flex-col shadow mb-4 md:mb-0 pl-4 lg:pr-20 md:pr-10 pr-4'>
      <img className='md:w-20 w-16 h-12 md:h-16' src={review} alt="review" />
      <span className="font-manrope text-[#333333} md:text-sm lg:leading-6 text-[0.7rem] leading-5">{text}</span>
      <div className="flex flex-row items-center md:mt-10 mt-8 md:mb-6 mb-4">
        <img className='md:w-12 w-10 h-7 md:h-8 pr-4' src={dp} alt="dp" />
        <div className="flex flex-col">
          <h3 className='font-manrope font-bold md:text-base text-xs text-[#333333]'>{name}</h3>
          <span className='font-manrope text-[#666666] md:text-sm text-[0.65rem]'>{city}</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
