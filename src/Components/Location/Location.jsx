import React from "react";
import "./Location.css";

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
    <section className='location padding'>
      <div className='container'>
        {/* Inline Title and Paragraph */}
        <div className="headings">
          <h2 className="location-title">Explore By Location</h2>
          <p className="location-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>

        <div className='content grid3 mtop'>
          {location.map((item) => (
            <div className='box' key={item.id}>
              <img src={item.cover} alt={item.name} />
              <div className='overlay'>
                <h5>{item.name}</h5>
                <p>
                  <label>{item.Villas}</label>
                  <label>{item.Offices}</label>
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
