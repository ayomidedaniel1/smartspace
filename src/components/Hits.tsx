import React from 'react';
import millify from 'millify';

export interface HitsProps {
  price: number;
  name: string;
  img: string;
  rooms: number;
  baths: number;
  location?: string;
  workspaceType?: string;
}

const Hits: React.FC<HitsProps> = ({ price, name, img, rooms, baths, location, workspaceType }) => {
  return (
    <div className='shadow rounded-xl md:rounded-2xl flex flex-col relative hover:shadow-md hover:shadow-slate-500 overflow-hidden bg-white border border-gray-100 transition-all duration-300 transform hover:-translate-y-1 h-full'>
      <div className="flex relative">
        <img src={img} alt={name} className="w-full h-48 object-cover cursor-pointer" />
        {workspaceType && (
          <span className="absolute top-2 right-2 bg-[#f85a47] text-white text-[0.6rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
            {workspaceType}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="font-inter text-black font-semibold text-sm line-clamp-2 min-h-[2.5rem]">
            {name}
          </h2>
          {location && (
            <p className="text-[0.65rem] text-gray-500 mt-1 font-manrope">
              {location}
            </p>
          )}
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-row space-x-3 text-gray-600 font-inter text-[0.65rem] font-medium">
            <span>
              Rooms: {rooms}
            </span>
            <span>
              Booths: {baths}
            </span>
          </div>
          <span className="font-inter text-text-orange font-bold text-sm">
            ${millify(price)}/mo
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hits;
