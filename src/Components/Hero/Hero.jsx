import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div>
      <div className="hero container">
      <h1>Search Your Next Home </h1>
      <h3>Find new & featured property located in your local city.</h3>
<form className='flex'>
  <div className='box'>
    <span>City/Street</span>
    <input type='text' placeholder='Location' />
  </div>
  <div className='box'>
    <span>Property Type</span>
    <input type='text' placeholder='Property Type' />
  </div>
  <div className='box'>
    <span>Price Range</span>
    <input type='text' placeholder='Price Range' />
  </div>
  <div className='box'>
    <h4>Advance Filter</h4>
  </div>
  <button className='btn1'>
    <i className='fa fa-search'></i>
  </button>
</form>
      </div>
    </div>
  )
}

export default Hero
