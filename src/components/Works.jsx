import React from 'react';

const Works = ({ img, title, text }) => {
  return (
    <div className='flex flex-col container'>
      <div className="flex justify-center -mb-16 md:-mb-0">
        <img className='md:w-48 w-32 h-32 md:h-48' src={img} alt="img" />
      </div>
      <div className="flex justify-center pb-3 md:pb-0 md:mb-3 md:-my-20">
        <h1 className='font-manrope font-semibold text-sm md:text-lg text-center'>{title}</h1>
      </div>
      <div className="flex justify-center pb-4">
        <span className='font-roboto md:text-sm text-[0.65rem] text-center px-2 md:px-5'>{text}</span>
      </div>
    </div>
  );
};

export default Works;