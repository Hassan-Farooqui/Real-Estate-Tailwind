import React, { useState } from 'react';
import rentuplogo from '../../assets/logo.png';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="flex justify-between items-center fixed top-0 left-0 w-full bg-white shadow-md z-50 p-2 lg:p-4">
      {/* Left - Logo */}
      <div className="logo">
        <img src={rentuplogo} alt="RentUP Logo" className="h-12 w-auto" /> {/* Adjusted height */}
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="hamburger lg:hidden cursor-pointer" onClick={toggleNav}>
        <i className={`fa ${isNavOpen ? 'fa-times' : 'fa-bars'} text-2xl text-gray-700`}></i>
      </div>

      {/* Center - Navigation Links */}
      <ul className={`flex-col lg:flex-row lg:space-x-8 absolute lg:static bg-green-500 lg:bg-transparent w-full lg:w-auto top-16 lg:top-auto left-0 lg:left-auto transition-transform duration-300 ${isNavOpen ? 'flex' : 'hidden'} lg:flex`}>
        <li><a href="#home" className="block text-white lg:text-gray-800 px-4 py-2 hover:text-green-600">Home</a></li>
        <li><a href="#about" className="block text-white lg:text-gray-800 px-4 py-2 hover:text-green-600">About</a></li>
        <li><a href="#services" className="block text-white lg:text-gray-800 px-4 py-2 hover:text-green-600">Services</a></li>
        <li><a href="#blog" className="block text-white lg:text-gray-800 px-4 py-2 hover:text-green-600">Blog</a></li>
        <li><a href="#pricing" className="block text-white lg:text-gray-800 px-4 py-2 hover:text-green-600">Pricing</a></li>
        <li><a href="#contact" className="block text-white lg:text-gray-800 px-4 py-2 hover:text-green-600">Contact</a></li>
      </ul>

      {/* Right - My List and Sign In (Hidden on small screens) */}
      <div className="hidden lg:flex items-center space-x-6">
        <div className="flex items-center text-green-600 font-bold">
          <span className="bg-green-600 text-white rounded-full px-2 py-1 mr-2">2</span>
          My List
        </div>
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center">
          <i className='fa fa-sign-out mr-2'></i>Sign In
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
