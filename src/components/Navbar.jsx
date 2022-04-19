import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';

const navigation = [
  { name: 'Home', href: '/home' },
  { name: 'About', href: '/about' },
  { name: 'Service', href: '/service' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => setToggleMenu(!toggleMenu);
  const closeMobileMenu = () => setToggleMenu(false);

  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm text-base font-bold">
      <Link to='/' className='md:pl-10 sm:pl-4 pl-0' role="navigation">
        <span className="font-manrope text-text-black md:text-2xl text-xl font-extrabold cursor-pointer">SmartSpace</span>
      </Link>
      <div className="-mx-2 cursor-pointer lg:hidden sm:pr-0 md:pr-16 absolute top-5 right-4 z-20" onClick={handleClick}>
        {toggleMenu ? <RiCloseLine /> : <RiMenu3Line />}
      </div>
      {toggleMenu ? <div className="lg:hidden flex flex-col absolute bg-gray-200 z-10 w-full
      h-screen top-0 left-0 duration-500 ease-linear slide-bottom justify-center">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            onClick={closeMobileMenu}
            className='text-center p-6'
          >
            {item.name}
          </Link>
        ))}
      </div> : <div className="md:pr-10 sm:pr-4 pr-0 lg:block hidden">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className='p-4 hover:underline'
          >
            {item.name}
          </Link>
        ))}
      </div>}
    </nav>
  );
};

export default Navbar;