import React from 'react';

const Hits = ({ price, name, img, location }) => {
  return (
    <div className='shadow rounded-xl md:rounded-2xl flex flex-row'>
      <div className="flex mb-2">
        <img src={img} alt="img" className="rounded-2xl w-full h-64" />
      </div>
      <div className="flex">
        <span className="font-manrope text-black">

        </span>
      </div>
    </div>
  );
};

export default Hits;
