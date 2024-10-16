import React from 'react';
import './Recent.css';

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
    <section className="recent-properties">
      <h2>Recent Property Listed</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
      <div className="property-list">
        {recentProperties.map((property, index) => (
          <div className="property-card" key={index}>
            <img src={property.image} alt={property.title} className="property-image" />
            <div className="property-details">
              <span className={`status ${property.status === 'For Rent' ? 'rent' : 'sale'}`}>
                {property.status}
              </span>
              <h3>{property.title}</h3>
              <p className="location">
                <i className="fa fa-map-marker-alt"></i> {property.location}
              </p>
              <div className="price-info">
                <button className="price-button">{property.price}</button>
                <span className="sqft-label">/sqft</span>
                <span className="type">{property.type}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recent;
