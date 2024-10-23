import React from "react";

// Import images at the top
import city1 from "../../assets/city-1.png";
import city2 from "../../assets/city-2.png";
import city3 from "../../assets/city-3.png";
import city4 from "../../assets/city-4.png";
import city5 from "../../assets/city-5.png";
import city6 from "../../assets/city-6.png";

const Location = () => {
  // Location data defined within the component
  const location = [
    {
      id: 1,
      name: "New Orleans, Louisiana",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: city1,
    },
    {
      id: 2,
      name: "Jersey, United States",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: city2,
    },
    {
      id: 3,
      name: "Liverpool, London",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: city3,
    },
    {
      id: 4,
      name: "New York, United States",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: city4,
    },
    {
      id: 5,
      name: "Montreal, Canada",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: city5,
    },
    {
      id: 6,
      name: "California, USA",
      Villas: "12 Villas",
      Apartments: "10 Apartments",
      Offices: "07 Offices",
      cover: city6,
    },
  ];

  return (
    <section className="bg-white py-12 px-4 text-center">
      <div className="container mx-auto">
        {/* Inline Title and Paragraph */}
        <div className="mb-8">
          <h2 className="text-4xl font-semibold text-gray-800">Explore By Location</h2>
          <p className="text-base text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {location.map((item) => (
            <div className="relative w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 overflow-hidden rounded-md cursor-pointer group">
              <img
                src={item.cover}
                alt={item.name}
                className="w-full h-auto rounded-md"
              />
              <div className="absolute inset-0 flex items-center justify-center flex-col bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h5 className="text-lg font-medium text-white">{item.name}</h5>
                <p className="text-white">
                  <label className="mr-5">{item.Villas}</label>
                  <label className="mr-5">{item.Offices}</label>
                  <label>{item.Apartments}</label>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;
