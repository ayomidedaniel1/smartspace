import millify from 'millify';
import React from 'react';
import { MdVerifiedUser } from 'react-icons/md';

const Hits = ({ price, name, img, rooms, verified }) => {
  return (
    <div className='shadow rounded-xl md:rounded-2xl flex flex-col relative'>
      {verified && <MdVerifiedUser className='absolute top-2 right-2' size={20} />}
      <div className="flex mb-2">
        <img src={img} alt="img" className="rounded-2xl w-full h-64" />
      </div>
      <div className="flex justify-between">
        <span className="font-manrope text-black">
          {name}
        </span>
        <span className="font-manrope text-black">
          rooms: {rooms}
        </span>
      </div>
      <div className="flex">
        <span className="">
          ${millify(price)}
        </span>
      </div>
    </div>
  );
};

export default Hits;
