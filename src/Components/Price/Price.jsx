import React from "react";

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
    <section className='text-center p-12 bg-white'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold'>Select Your Package</h2>
        <p className='text-lg text-gray-600 my-3'>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.
        </p>

        <div className='flex justify-center flex-wrap mt-8'>
          {priceData.map((item, index) => (
            <div
              className={`flex flex-col items-center justify-between p-8 rounded-lg shadow-md mx-4 mb-6 ${
                item.best ? "w-80" : "w-72"
              }`}
              key={index}
            >
              {/* Render the Best Value button conditionally */}
              {item.best && (
                <div className='mb-4'>
                  <button className='bg-orange-500 text-white rounded-full px-4 py-2'>
                    {item.best}
                  </button>
                </div>
              )}
              <h3 className='text-2xl font-semibold text-gray-800'>{item.plan}</h3>
              <h1 className='text-4xl text-gray-900 font-semibold my-4'>
                <span className='text-2xl'>$</span>
                {item.price}
              </h1>
              <p className='text-lg'>{item.ptext}</p>

              <ul className='mt-10 list-none p-0'>
                {item.list.map((val, idx) => {
                  const { icon, text, change } = val;
                  return (
                    <li key={idx} className='flex justify-center items-center mb-5'>
                      <label
                        className={`w-8 h-8 flex items-center justify-center rounded-full mr-2 ${
                          change === "color" ? "bg-red-100 text-red-500" : "bg-green-100 text-green-500"
                        }`}
                      >
                        {icon}
                      </label>
                      <p>{text}</p>
                    </li>
                  );
                })}
              </ul>
              <button
                className={`w-full py-3 rounded-full border-4 ${
                  item.plan === "Standard" ? "bg-green-600 text-white" : "bg-white text-green-600"
                }`}
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
