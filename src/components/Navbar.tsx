'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import { navigation } from '../constants';

export interface NavbarProps {
  sticky: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ sticky }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => setToggleMenu(!toggleMenu);
  const closeMobileMenu = () => setToggleMenu(false);

  return (
    <nav 
      className={
        sticky 
          ? 'navbar navbar-sticky h-20 bg-white/90 backdrop-blur text-black shadow-md text-base font-bold px-6 justify-between items-center z-50 transition-all left-0 right-0 max-w-7xl mx-auto rounded-b-2xl border-b border-gray-100' 
          : 'flex justify-between items-center h-20 bg-white text-black relative rounded-full shadow-sm text-base font-bold mt-2 px-6 border border-gray-100 z-40'
      }
    >
      <Link href='/' className='flex items-center'>
        <span className="font-manrope text-text-black md:text-2xl text-xl font-extrabold cursor-pointer hover:text-[#f85a47] transition-colors">
          SmartSpace
        </span>
      </Link>
      
      <button 
        className="cursor-pointer lg:hidden absolute right-6 z-50 text-2xl" 
        onClick={handleClick}
        aria-label="Toggle menu"
      >
        {toggleMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </button>

      {toggleMenu ? (
        <div className="lg:hidden flex flex-col absolute bg-white z-40 w-full h-screen top-0 left-0 slide-bottom justify-center items-center space-y-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMobileMenu}
              className='text-xl p-4 font-manrope text-text-black hover:text-[#f85a47] transition-colors font-bold'
            >
              {item.name}
            </Link>
          ))}
        </div>
      ) : (
        <div className="lg:flex hidden space-x-2 font-manrope">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className='p-4 hover:text-[#f85a47] transition-colors hover:underline underline-offset-4'
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
