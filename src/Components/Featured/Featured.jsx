import React from 'react';
import './Featured.css';

// Importing the icons
import FamilyHouseIcon from '../../assets/h1.png';
import HouseVillaIcon from '../../assets/h2.png';
import ApartmentIcon from '../../assets/h3.png';
import OfficeStudioIcon from '../../assets/h4.png';
import VillaCondoIcon from '../../assets/h6.png';

const Featured = () => {
  const propertyTypes = [
    {
      icon: FamilyHouseIcon,
      title: 'Family House',
      count: '122 Property',
      colorClass: 'red-icon'
    },
    {
      icon: HouseVillaIcon,
      title: 'House & Villa',
      count: '155 Property',
      colorClass: 'green-icon'
    },
    {
      icon: ApartmentIcon,
      title: 'Apartment',
      count: '300 Property',
      colorClass: 'yellow-icon'
    },
    {
      icon: OfficeStudioIcon,
      title: 'Office & Studio',
      count: '80 Property',
      colorClass: 'purple-icon'
    },
    {
      icon: VillaCondoIcon,
      title: 'Villa & Condo',
      count: '80 Property',
      colorClass: 'blue-icon'
    }
  ];

  return (
    <section className="featured">
      <h2>Featured Property Types</h2>
      <p>Find All Type of Property.</p>
      <div className="property-grid">
        {propertyTypes.map((property, index) => (
          <div className="property-card" key={index}>
            <div className={`icon-container ${property.colorClass}`}>
              {/* Render your custom icon here */}
              <img src={property.icon} alt={`${property.title} icon`} />
            </div>
            <h3>{property.title}</h3>
            <p>{property.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Featured;
