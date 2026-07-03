import React from 'react';
import { StaticAsset } from '../constants';

export interface WorksProps {
  img: StaticAsset;
  title: string;
  text: string;
}

const getSrc = (asset: StaticAsset): string => {
  if (typeof asset === 'string') return asset;
  return asset.src;
};

const Works: React.FC<WorksProps> = ({ img, title, text }) => {
  return (
    <div className='flex flex-col items-center bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mx-4 hover:shadow-md transition-shadow duration-300'>
      <div className="flex justify-center mb-4">
        <img className='md:w-32 w-24 h-24 md:h-32 object-contain' src={getSrc(img)} alt={title} />
      </div>
      <div className="text-center mb-3">
        <h2 className='font-manrope font-bold text-sm md:text-lg text-black'>{title}</h2>
      </div>
      <div className="text-center">
        <p className='font-roboto md:text-sm text-[0.7rem] text-gray-600 leading-relaxed'>{text}</p>
      </div>
    </div>
  );
};

export default Works;
