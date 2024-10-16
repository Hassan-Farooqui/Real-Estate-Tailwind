import React, { useState } from 'react';
import './Navbar.css'; 
import rentuplogo from '../../assets/logo.png'

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="container navbar">
      {/* Left - Logo */}
      <div className="logo">
        <img src={rentuplogo} alt="RentUP Logo" />
      </div>

      {/* Hamburger Menu for Small Screens */}
      <div className="hamburger" onClick={toggleNav}>
        <i className={`fa ${isNavOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>

      {/* Center - Navigation Links */}
      <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Right - My List and Sign In (Hidden on small screens) */}
      <div className="right-section">
        <div className="my-list">
          <span className="badge">2</span>
          My List
        </div>
        <button className="sign-in-btn"><i className='fa fa-sign-out'></i>Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar;
