import React from "react";
import "./Team.css";

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
    <section className='team background'>
      <div className='container'>
        {/* Inline Title and Paragraph */}
        <div className="headings">
          <h2 className="team-title">Our Featured Agents</h2>
          <p className="team-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>
        </div>

        <div className='content mtop grid3'>
          {team.map((val, index) => (
            <div className='box' key={index}>
              <button className='btn3'>{val.list} Listings</button>
              <div className='details'>
                <div className='img'>
                  <img src={val.cover} alt={val.name} />
                  <i className='fa-solid fa-circle-check'></i>
                </div>
                <i className='fa fa-location-dot'></i>
                <label>{val.address}</label>
                <h4>{val.name}</h4>

                <ul>
                  {val.icon.map((icon, index) => (
                    <li key={index}>{icon}</li>
                  ))}
                </ul>
                <div className='button flex'>
                  <button className="btn6">
                    <i className='fa fa-envelope'></i>
                    Message
                  </button>
                  <button className='btn4'>
                    <i className='fa fa-phone-alt'></i>
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
