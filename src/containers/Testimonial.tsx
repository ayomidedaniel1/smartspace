import React from 'react';
import { Airbnb, Uber, Microsoft, Ebay, Cisco } from '../assets';
import { testimony, StaticAsset } from '../constants';
import { Testimonies } from '../components';

const getSrc = (asset: StaticAsset): string => {
  if (typeof asset === 'string') return asset;
  return asset.src;
};

const Testimonial: React.FC = () => {
  return (
    <section className='flex flex-col my-10 md:mt-20 md:mx-10 mx-3 w-full'>
      <div className="flex md:mr-40">
        <h1 className="font-manrope text-lg md:text-3xl lg:w-1/2 font-semibold md:pb-3 pb-1 text-black">
          Loved by businesses and individuals across the globe.
        </h1>
      </div>

      <div className="md:grid md:grid-cols-3 lg:gap-10 mb-10 mt-6 md:gap-5 flex flex-col">
        {testimony.map((item, index) => (
          <Testimonies 
            key={index} 
            review={item.review}
            text={item.text} 
            dp={item.dp} 
            name={item.name} 
            city={item.city}
          />
        ))}
      </div>

      <div className="flex md:flex-row flex-col justify-between items-center pb-5 w-full">
        <div className="flex mt-2 justify-start lg:px-10 md:px-4 pb-4 md:pb-0 items-center space-x-4 md:space-x-8">
          <img className='w-12 h-6 object-contain' src={getSrc(Airbnb)} alt="Airbnb logo" />
          <img className='w-12 h-6 object-contain' src={getSrc(Cisco)} alt="Cisco logo" />
          <img className='w-12 h-6 object-contain' src={getSrc(Ebay)} alt="Ebay logo" />
          <img className='w-12 h-6 object-contain' src={getSrc(Uber)} alt="Uber logo" />
          <img className='w-12 h-6 object-contain' src={getSrc(Microsoft)} alt="Microsoft logo" />
        </div>
        <span className='text-[#333333] font-inter md:text-sm text-[0.65rem] md:px-5 px-1 font-medium'>
          Give us a Call at 1-888-111-2222 or email us at <a className='text-[#f85a47] underline' href="mailto:book@smartspace.com">book@smartspace.com</a>
        </span>
      </div>
    </section>
  );
};

export default Testimonial;
