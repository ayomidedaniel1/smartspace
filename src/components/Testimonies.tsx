import React from 'react';
import { StaticAsset } from '../constants';

export interface TestimoniesProps {
  review: StaticAsset;
  text: string;
  dp: StaticAsset;
  name: string;
  city: string;
}

const getSrc = (asset: StaticAsset): string => {
  if (typeof asset === 'string') return asset;
  return asset.src;
};

const Testimonies: React.FC<TestimoniesProps> = ({ review, text, dp, name, city }) => {
  return (
    <div className='flex flex-col shadow-sm rounded-2xl bg-white border border-gray-100 p-6 mb-4 md:mb-0 hover:shadow-md transition-shadow duration-300'>
      <img className='w-12 h-8 object-contain mb-4' src={getSrc(review)} alt="Review rating stars" />
      <p className="font-manrope text-[#333333] md:text-sm lg:leading-6 text-[0.75rem] leading-relaxed flex-grow italic">
        "{text}"
      </p>
      <div className="flex flex-row items-center mt-6">
        <img className='w-10 h-10 rounded-full object-cover mr-4' src={getSrc(dp)} alt={`Avatar of ${name}`} />
        <div className="flex flex-col">
          <h3 className='font-manrope font-bold md:text-base text-xs text-[#333333] leading-none'>{name}</h3>
          <span className='font-manrope text-[#666666] md:text-xs text-[0.65rem] mt-1'>{city}</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
