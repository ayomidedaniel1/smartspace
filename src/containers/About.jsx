import React from 'react';
import { Works } from '../components';

import { worksData } from '../constants';

const About = () => {
  return (
    <div id='about' className='flex flex-col'>
      <div className="flex justify-center md:mb-14 sm:mb-10 mb-0">
        <h1 className="font-manrope font-semibold md:text-5xl sm:text-3xl text-2xl">How it works?</h1>
      </div>
      <div className="flex flex-col mt-5 md:mt-0 md:grid md:grid-cols-3 md:gap-0 px-0 lg:px-20">
        {worksData.map((item, index) => (
          <Works img={item.img} title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  );
};

export default About;
