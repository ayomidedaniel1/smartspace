import React from 'react';

const Property = ({ img }) => {
  return (
    <div className="mt-5 relative">
      <img src={img} alt="img" className='property' />
      <button className='absolute lg:top-3 md:top-2 top-2.5 lg:left-3.5 md:left-2.5 left-2.5 featured font-inter md:h-5 h-4 md:w-14
      w-12 md:text-[0.65rem] text-[0.45rem] text-center'>Featured</button>
    </div>
  );
};

export default Property;