import React from 'react';
import { StaticAsset } from '../constants';

export interface PropertyProps {
  img: StaticAsset;
}

const getSrc = (asset: StaticAsset): string => {
  if (typeof asset === 'string') return asset;
  return asset.src;
};

const Property: React.FC<PropertyProps> = ({ img }) => {
  return (
    <div className="mt-5 relative group overflow-hidden rounded-xl shadow-sm border border-gray-100">
      <img 
        src={getSrc(img)} 
        alt="Featured workspace interior view" 
        className='property w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105' 
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-300" />
    </div>
  );
};

export default Property;
