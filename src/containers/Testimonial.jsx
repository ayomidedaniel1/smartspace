import React from 'react';
import { Review1, Review2, Review3, Dp1, Dp2, Dp3 } from '../assets';
import { Airbnb, Uber, Microsoft, Ebay, Cisco } from '../assets';

import { Testimonies } from '../components';

const testimony = [
  {
    review: Review1,
    text: 'Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.',
    dp: Dp1,
    name: 'Jane Cooper',
    city: 'Los Angeles, CA'
  },
  {
    review: Review2,
    text: 'The and collecting motionless difficulty son. His hearing staying ten colonel met. Sex drew six easy four dear cold',
    dp: Dp2,
    name: 'Robert Fox',
    city: 'New York City, NY'
  },
  {
    review: Review3,
    text: 'Sociable on as carriage my position weddings raillery consider. Peculiar trifling absolute and wandered vicinity property yet.',
    dp: Dp3,
    name: 'Leslie Alexander',
    city: 'Buffalo, NJ'
  }
];

const Testimonial = () => {
  return (
    <div className='flex flex-col my-10 md:mt-20 md:mx-10 mx-3'>
      <div className="flex md:mr-40">
        <h1 className="font-manrope text-sm md:text-3xl lg:w-1/2 font-semibold md:pb-3 pb-1">
          Loved by businesses, and individuals across the globe.
        </h1>
      </div>

      <div className="md:grid md:grid-cols-3 lg:gap-10 mb-10 mt-4 md:gap-5 flex flex-col">
        {testimony.map((item, index) => (
          <Testimonies key={item.title + index} review={item.review}
            text={item.text} dp={item.dp} name={item.name} city={item.city}
          />
        ))}
      </div>

      <div className="flex md:flex-row flex-col justify-between items-center pb-5">
        <div className="flex mt-2 justify-start lg:px-10 md:px-4 pb-4 md:pb-0">
          <img className='mr-3 lg:mr-20 md:mr-5 sm:mr-4 md:w-12 sm:w-10 w-8' src={Airbnb} alt="Airbnb" />
          <img className='mr-3 lg:mr-20 md:mr-5 sm:mr-4 md:w-12 sm:w-10 w-8' src={Cisco} alt="Buzz" />
          <img className='mr-3 lg:mr-20 md:mr-5 sm:mr-4 md:w-12 sm:w-10 w-8' src={Ebay} alt="Chase" />
          <img className='mr-3 lg:mr-20 md:mr-5 sm:mr-4 md:w-12 sm:w-10 w-8' src={Uber} alt="Uber" />
          <img className='mr-3 lg:mr-[18rem] md:mr-80 sm:mr-4 md:w-12 sm:w-10 w-8' src={Microsoft} alt="Microsoft" />
        </div>
        <span className='text-[#333333] font-inter md:text-sm text-[0.65rem] md:px-5 px-1'>
          Give us a Call 1-888-111-2222 and we can set you up, or <a className='text-blue-400 underline' href="/">check our pricing plans</a>
        </span>
      </div>
    </div>
  );
};

export default Testimonial;
