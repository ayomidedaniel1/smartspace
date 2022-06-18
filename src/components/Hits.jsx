import millify from 'millify';
import React from 'react';
import { MdVerifiedUser } from 'react-icons/md';

const Hits = ({ price, name, img, rooms, verified }) => {
  return (
    <div className='shadow rounded-xl md:rounded-2xl flex flex-col relative justify-center'>
      {verified && <MdVerifiedUser className='absolute top-2 right-2' size={20} />}
      <div className="flex mb-2">
        <img src={img} alt="img" className="rounded-2xl w-full h-64" />
      </div>
      <span className="font-inter text-black font-medium text-sm">
        {name}
      </span>
      <span className="font-inter text-black font-medium text-xs">
        Rooms: {rooms}
      </span>
      <div className="flex">
        <span className="font-inter text-black font-medium">
          ${millify(price)}
        </span>
      </div>
    </div>
  );
};

export default Hits;
