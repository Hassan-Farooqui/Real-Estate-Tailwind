import React from 'react';
// Import your images
import Property1 from '../../assets/p-1.png';
import Property2 from '../../assets/p-2.png';
import Property3 from '../../assets/p-4.png';
import Property4 from '../../assets/p-5.png';
import Property5 from '../../assets/p-6.png';
import Property6 from '../../assets/p-7.png';

const Recent = () => {
  const recentProperties = [
    {
      image: Property1,
      status: 'For Rent',
      title: 'Red Carpet Real Estate',
      location: '210 Zirak Road, Canada',
      price: '$3,700',
      type: 'Apartment',
    },
    {
      image: Property2,
      status: 'For Sale',
      title: 'Fairmount Properties',
      location: '5698 Zirak Road, NewYork',
      price: '$9,750',
      type: 'Condos',
    },
    {
      image: Property3,
      status: 'For Rent',
      title: 'The Real Estate Corner',
      location: '5624 Mooker Market, USA',
      price: '$5,860',
      type: 'Offices',
    },
    {
      image: Property4,
      status: 'For Sale',
      title: 'Sunshine Realty',
      location: '123 Main Street, UK',
      price: '$8,100',
      type: 'Villas',
    },
    {
      image: Property5,
      status: 'For Rent',
      title: 'Lakeview Apartments',
      location: '444 South Drive, Canada',
      price: '$4,300',
      type: 'Apartment',
    },
    {
      image: Property6,
      status: 'For Sale',
      title: 'Cityline Properties',
      location: '987 Elm Street, Australia',
      price: '$6,400',
      type: 'Houses',
    },
  ];

  return (
    <section className="recent-properties py-12 px-2">
      <h2 className="text-4xl font-bold mb-2 text-center">Recent Property Listed</h2>
      <p className="text-gray-600 mb-6 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      <div className="max-w-screen-lg mx-auto">
        <div className="property-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> {/* 1 column on mobile, 2 on small screens, 3 on large screens */}
          {recentProperties.map((property, index) => (
            <div className="property-card relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:translate-y-1" key={index}> 
              <img src={property.image} alt={property.title} className="property-image w-full h-40 object-cover" /> {/* Increased image height */}
              <span className="absolute top-2 right-2 text-gray-500 hover:text-red-500 cursor-pointer">
                <i className="fa fa-heart"></i>
              </span>
              <div className="property-details p-4 bg-white">
                <div className="flex justify-between mb-1">
                  <span className={`status text-xs font-bold px-2 py-1 rounded ${property.status === 'For Rent' ? 'bg-red-500 text-white' : 'bg-green-500 text-white'}`}>
                    {property.status}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{property.title}</h3>
                <p className="location text-sm text-gray-500 mb-2">
                  <i className="fa fa-map-marker-alt mr-1"></i> {property.location}
                </p>
                <div className="price-info flex items-center justify-between mt-2">
                  <button className="price-button bg-green-500 text-white rounded-full px-4 py-1">
                    {property.price}
                  </button>
                  <span className="sqft-label text-sm">/sqft</span>
                  <span className="type text-sm text-gray-500">{property.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recent;
