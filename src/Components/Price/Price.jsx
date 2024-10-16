import React from "react";
import "./Price.css";

// Price data imported here
export const priceData = [
  {
    plan: "Basic",
    price: "29",
    ptext: "per user, per month",
    list: [
      {
        icon: <i className='fa-solid fa-check'></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i className='fa-solid fa-check'></i>,
        text: "120GB CDN Bandwidth",
      },
      {
        icon: <i className='fa-solid fa-check'></i>,
        text: "5GB Cloud Storage",
      },
      { change: "color", icon: <i className='fa-solid fa-x'></i>, text: "Personal Help Support" },
      { change: "color", icon: <i className='fa-solid fa-x'></i>, text: "Enterprise SLA" },
    ],
  },
  {
    best: "Best Value",
    plan: "Standard",
    price: "49",
    ptext: "per user, per month",
    list: [
      {
        icon: <i className='fa-solid fa-check'></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i className='fa-solid fa-check'></i>,
        text: "150GB CDN Bandwidth",
      },
      {
        icon: <i className='fa-solid fa-check'></i>,
        text: "10GB Cloud Storage",
      },
      {
        icon: <i className='fa-solid fa-check'></i>,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <i className='fa-solid fa-x'></i>,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    plan: "Platinum",
    price: "79",
    ptext: "2 user, per month",
    list: [
      {
        icon: <i className='fa-solid fa-check'></i>,
        text: "100% Uptime Guarantee",
      },
      {
        icon: <i className='fa-solid fa-check'></i>,
        text: "200GB CDN Bandwidth",
      },
      {
        icon: <i className='fa-solid fa-check'></i>,
        text: "20GB Cloud Storage",
      },
      {
        icon: <i className='fa-solid fa-check'></i>,
        text: "Personal Help Support",
      },
      {
        icon: <i className='fa-solid fa-check'></i>,
        text: "Enterprise SLA",
      },
    ],
  },
];

const Price = () => {
  return (
    <section className='price padding'>
      <div className='container'>
        <h2 className='price-title'>Select Your Package</h2>
        <p className='price-description'>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
        </p>

        <div className='content flex mtop'>
          {priceData.map((item, index) => (
            <div className='box shadow' key={index}>
              {/* Render the Best Value button conditionally */}
              {item.best && (
                <div className='topbtn'>
                  <button className='btn3'>{item.best}</button>
                </div>
              )}
              <h3>{item.plan}</h3>
              <h1>
                <span>$</span>
                {item.price}
              </h1>
              <p>{item.ptext}</p>

              <ul>
                {item.list.map((val, idx) => {
                  const { icon, text, change } = val;
                  return (
                    <li key={idx}>
                      <label
                        style={{
                          background: change === "color" ? "#dc35451f" : "#27ae601f",
                          color: change === "color" ? "#dc3848" : "#27ae60",
                        }}
                      >
                        {icon}
                      </label>
                      <p>{text}</p>
                    </li>
                  );
                })}
              </ul>
              <button
                className='btn5'
                style={{
                  background: item.plan === "Standard" ? "#27ae60" : "#fff",
                  color: item.plan === "Standard" ? "#fff" : "#27ae60",
                }}
              >
                Start {item.plan}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
