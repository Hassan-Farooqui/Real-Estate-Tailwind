import React from "react";

// Import images at the top
import team1 from "../../assets/team-1.jpg";
import team2 from "../../assets/team-2.jpg";
import team3 from "../../assets/team-3.jpg";
import team4 from "../../assets/team-4.jpg";
import team5 from "../../assets/team-5.jpg";

const Team = () => {
  // Team data defined within the component
  const team = [
    {
      list: "50",
      cover: team1,
      address: "Liverpool, Canada",
      name: "Sargam S. Singh",
      icon: [
        <i className='fa-brands fa-facebook-f' key="fb1"></i>,
        <i className='fa-brands fa-linkedin' key="ln1"></i>,
        <i className='fa-brands fa-twitter' key="tw1"></i>,
        <i className='fa-brands fa-instagram' key="ig1"></i>
      ],
    },
    {
      list: "70",
      cover: team2,
      address: "Montreal, Canada",
      name: "Harijeet M. Siller",
      icon: [
        <i className='fa-brands fa-facebook-f' key="fb2"></i>,
        <i className='fa-brands fa-linkedin' key="ln2"></i>,
        <i className='fa-brands fa-twitter' key="tw2"></i>,
        <i className='fa-brands fa-instagram' key="ig2"></i>
      ],
    },
    {
      list: "80",
      cover: team3,
      address: "Denver, USA",
      name: "Anna K. Young",
      icon: [
        <i className='fa-brands fa-facebook-f' key="fb3"></i>,
        <i className='fa-brands fa-linkedin' key="ln3"></i>,
        <i className='fa-brands fa-twitter' key="tw3"></i>,
        <i className='fa-brands fa-instagram' key="ig3"></i>
      ],
    },
    {
      list: "51",
      cover: team4,
      address: "2272 Briarwood Drive",
      name: "Michael P. Grimaldo",
      icon: [
        <i className='fa-brands fa-facebook-f' key="fb4"></i>,
        <i className='fa-brands fa-linkedin' key="ln4"></i>,
        <i className='fa-brands fa-twitter' key="tw4"></i>,
        <i className='fa-brands fa-instagram' key="ig4"></i>
      ],
    },
    {
      list: "42",
      cover: team5,
      address: "2272 Briarwood Drive",
      name: "Michael P. Grimaldo",
      icon: [
        <i className='fa-brands fa-facebook-f' key="fb5"></i>,
        <i className='fa-brands fa-linkedin' key="ln5"></i>,
        <i className='fa-brands fa-twitter' key="tw5"></i>,
        <i className='fa-brands fa-instagram' key="ig5"></i>
      ],
    },
    {
      list: "38",
      cover: team5, // Make sure this is the correct image if using the same
      address: "Montreal, USA",
      name: "Adam K. Jollio",
      icon: [
        <i className='fa-brands fa-facebook-f' key="fb6"></i>,
        <i className='fa-brands fa-linkedin' key="ln6"></i>,
        <i className='fa-brands fa-twitter' key="tw6"></i>,
        <i className='fa-brands fa-instagram' key="ig6"></i>
      ],
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto max-w-screen-lg px-4">
        {/* Inline Title and Paragraph */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">Our Featured Agents</h2>
          <p className="text-lg text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((val, index) => (
            <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 transition-shadow duration-300 hover:shadow-lg" key={index}>
              <button className="bg-orange-500 text-white rounded-full px-4 py-1 mb-4">{val.list} Listings</button>
              <div className="text-center">
                <div className="relative">
                  <img src={val.cover} alt={val.name} className="w-24 h-24 rounded-full mx-auto" />
                  <i className="fa-solid fa-circle-check text-blue-600 absolute top-20 right-10"></i>
                </div>
                <i className="fa fa-location-dot text-gray-500 mr-1"></i>
                <label className="inline-block mt-2">{val.address}</label>
                <h4 className="text-lg font-semibold mt-2">{val.name}</h4>

                <ul className="flex justify-center mt-2 space-x-2">
                  {val.icon.map((icon, index) => (
                    <li key={index} className="w-10 h-10 flex items-center justify-center bg-white rounded-full border border-gray-200">
                      {icon}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-center gap-2 mt-4">
                  <button className="bg-green-600 text-white rounded px-4 py-2 flex items-center">
                    <i className="fa fa-envelope mr-2"></i>
                    Message
                  </button>
                  <button className="bg-black text-white rounded px-4 py-2 flex items-center">
                    <i className="fa fa-phone-alt mr-2"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
