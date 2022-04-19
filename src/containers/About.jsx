import React from 'react';
import { Property, Research, Valuation } from '../assets';
import { Works } from '../components';

const worksData = [
  {
    img: Research,
    title: 'Research Suburbs',
    text: 'Wonder twenty hunted and put income set desire expect. Am cottage calling.'
  },
  {
    img: Valuation,
    title: 'Instant Valuation',
    text: 'Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight.'
  },
  {
    img: Property,
    title: 'Track Property',
    text: 'Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible.'
  }
];

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
