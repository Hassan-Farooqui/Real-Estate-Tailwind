import React from 'react';
import rentupBanner from '../../assets/banner.png'; // Importing the background image directly in JSX

const Hero = () => {
  return (
    <div
      className="flex items-center justify-center flex-col w-full h-screen"
      style={{
        backgroundImage: `url(${rentupBanner})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="container pt-20 text-center">
        {/* Responsive Heading */}
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Search Your Next Home
        </h1>

        {/* Responsive Subheading */}
        <h3 className="text-white opacity-80 text-base sm:text-lg md:text-xl lg:text-2xl mt-4">
          Find new & featured property located in your local city.
        </h3>
        
        {/* Responsive Form */}
        <form className="flex flex-col md:flex-row bg-white rounded-lg mt-12 p-4 space-y-4 md:space-y-0 md:space-x-4 items-center">
          <div className="box flex flex-col w-full md:w-1/4">
            <span className="font-medium text-sm sm:text-base">City/Street</span>
            <input
              type="text"
              placeholder="Location"
              className="border border-gray-300 rounded-md p-3 mt-1"
            />
          </div>
          <div className="box flex flex-col w-full md:w-1/4">
            <span className="font-medium text-sm sm:text-base">Property Type</span>
            <input
              type="text"
              placeholder="Property Type"
              className="border border-gray-300 rounded-md p-3 mt-1"
            />
          </div>
          <div className="box flex flex-col w-full md:w-1/4">
            <span className="font-medium text-sm sm:text-base">Price Range</span>
            <input
              type="text"
              placeholder="Price Range"
              className="border border-gray-300 rounded-md p-3 mt-1"
            />
          </div>
          <div className="box flex flex-col items-center justify-center w-full md:w-1/4">
            <h4 className="font-medium text-sm sm:text-base md:text-lg">Advance Filter</h4>
          </div>
          <button className="bg-green-600 text-white rounded-md py-3 px-6 flex items-center text-base sm:text-lg">
            <i className="fa fa-search mr-2"></i>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
