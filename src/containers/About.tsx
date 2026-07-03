import React from 'react';
import { Works } from '../components';
import { worksData } from '../constants';

const About: React.FC = () => {
  return (
    <section id='about' className='flex flex-col py-16'>
      <div className="flex justify-center mb-10 md:mb-16">
        <h1 className="font-manrope font-semibold text-3xl md:text-5xl text-black">How it works?</h1>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 gap-8 px-4 lg:px-20">
        {worksData.map((item, index) => (
          <Works img={item.img} title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </section>
  );
};

export default About;
