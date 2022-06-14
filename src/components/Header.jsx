import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';
import { Head, Buzz, Chase, Microsoft, Gucc, Airbnb, Uber } from '../assets';
import { useNavigate } from 'react-router-dom';

const Header = ({ element }) => {
  const navigate = useNavigate();

  return (
    <div id='home' className="h-full flex flex-col lg:flex-row md:justify-between lg:mt-20 md:mt-10 mt-6 lg:px-10 md:mb-10" ref={element}>
      <div className="flex flex-col fadeLeftMini">
        <h3 className='uppercase font-dmsans font-bold text-text-orange lg:text-lg md:text-base sm:text-sm text-xs'>
          residential and office space
        </h3>
        <h1 className='capitalize font-manrope font-extrabold text-black lg:text-[3rem] md:text-[3rem] sm:text-[1.5rem] text-[1.2rem] md:pr-20 lg:pr-1'>
          smart working style for smart people
        </h1>
        <h2 className="font-manrope sm:leading-5 text-text-black md:text-sm pr-1 md:pr-20 lg:pr-10 sm:text-xs text-[0.5rem] leading-3 tracking-[0.01rem]">
          We are a community of bold minds who have decided to work under the same roof. By saying that our SmartSpace is sustainable and comfy we confirm that you will get 100% satisfaction from working here and making the best out of this experience
        </h2>

        <div className='md:py-6 sm:py-4 py-2'>
          <input
            type="text"
            className='input form-input md:h-14 sm:h-12 h-10
            md:w-96 sm:w-72 w-40 font-manrope md:text-sm text-[0.5rem] 
            text-text-black opacity-40 tracking-[0.01rem] mr-0'
            placeholder='Search for Apartments and Residential homes'
          />
          <input
            type="submit"
            value='Search Now!'
            className='form-input md:h-14 sm:h-12 h-10 md:w-40 sm:w-32
            w-24 bg-[#f85a47] hover:bg-red-700 text-white tracking-[0.01rem]
            md:text-base sm:text-sm text-xs md:leading-5 sm:leading-4 leading-3 font-bold'
            onClick={() => navigate('/list')}
          />
        </div>

        <div className="lg:mt-16 md:mt-4 mt-1">
          <span className='text-text-black tracking-[0.005rem] font-manrope md:text-sm text-xs'>Our Amazing Partners</span>
          <div className="flex mt-2 justify-start">
            <img className='mr-3 md:mr-5 sm:mr-4 md:w-14 sm:w-12 w-8' src={Buzz} alt="Buzz" />
            <img className='mr-3 md:mr-5 sm:mr-4 md:w-14 sm:w-12 w-8' src={Chase} alt="Chase" />
            <img className='mr-3 md:mr-5 sm:mr-4 md:w-14 sm:w-12 w-8' src={Microsoft} alt="Microsoft" />
            <img className='mr-3 md:mr-5 sm:mr-4 md:w-14 sm:w-12 w-8' src={Gucc} alt="Gucc" />
            <img className='mr-3 md:mr-5 sm:mr-4 md:w-14 sm:w-12 w-8' src={Airbnb} alt="Airbnb" />
            <img className='mr-3 md:mr-5 sm:mr-4 md:w-14 sm:w-12 w-8' src={Uber} alt="Uber" />
          </div>
        </div>
      </div>

      <div className="flex mr-4 lg:-mt-10 md:-mt-6 mt-0 justify-center">
        <img src={Head} alt="House" className='lg:w-max lg:h-max md:w-[50rem] md:h-[50rem] -ml-8 lg:-ml-0 md:-ml-24 mt-4' />

        <div className="flex flex-col justify-center">
          <AiFillFacebook className='md:w-6 w-4 md:h-6 h-4 mb-3' />
          <AiFillInstagram className='md:w-6 w-4 md:h-6 h-4 mb-3' />
          <AiFillTwitterSquare className='md:w-6 w-4 md:h-6 h-4 mb-3' />
          <AiFillLinkedin className='md:w-6 w-4 md:h-6 h-4 mb-3' />
        </div>
      </div>
    </div>
  );
};

export default Header;
