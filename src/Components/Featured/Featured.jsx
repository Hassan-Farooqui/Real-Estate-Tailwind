import React from 'react';
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
      colorClass: 'bg-red-200' // Light red background
    },
    {
      icon: HouseVillaIcon,
      title: 'House & Villa',
      count: '155 Property',
      colorClass: 'bg-green-200' // Light green background
    },
    {
      icon: ApartmentIcon,
      title: 'Apartment',
      count: '300 Property',
      colorClass: 'bg-yellow-200' // Light yellow background
    },
    {
      icon: OfficeStudioIcon,
      title: 'Office & Studio',
      count: '80 Property',
      colorClass: 'bg-purple-200' // Light purple background
    },
    {
      icon: VillaCondoIcon,
      title: 'Villa & Condo',
      count: '80 Property',
      colorClass: 'bg-blue-200' // Light blue background
    }
  ];

  return (
    <section className="text-center py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Featured Property Types</h2>
      <p className="text-gray-600 mb-8">Find All Type of Property.</p>
      <div className="flex justify-center flex-wrap gap-6">
        {propertyTypes.map((property, index) => (
          <div
            className={`bg-white rounded-lg shadow-md p-6 w-52 transform transition-transform duration-300 hover:translate-y-[-10px]`}
            key={index}
          >
            <div className={`icon-container ${property.colorClass} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4`}>
              <img src={property.icon} alt={`${property.title} icon`} className="w-16 h-16" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">{property.title}</h3>
            <p className="text-sm text-gray-500">{property.count}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Featured;
