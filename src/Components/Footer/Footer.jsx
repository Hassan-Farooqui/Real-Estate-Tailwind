import React from "react";
import logolight from '../../assets/logo-light.png';

// Combined footer data
const footerData = [
  {
    title: "LAYOUTS",
    text: [
      { list: "Home Page" },
      { list: "About Page" },
      { list: "Service Page" },
      { list: "Property Page" },
      { list: "Contact Page" },
      { list: "Single Blog" },
    ],
  },
  {
    title: "ALL SECTIONS",
    text: [
      { list: "Headers" },
      { list: "Features" },
      { list: "Attractive" },
      { list: "Testimonials" },
      { list: "Videos" },
      { list: "Footers" },
    ],
  },
  {
    title: "COMPANY",
    text: [
      { list: "About" },
      { list: "Blog" },
      { list: "Pricing" },
      { list: "Affiliate" },
      { list: "Login" },
      { list: "Changelog" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      <section className="bg-green-600 py-10 text-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-center gap-5">
            <div className="flex-1">
              <h1 className="text-4xl">Do You Have Questions?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className="bg-white text-green-600 font-bold text-lg py-5 px-10 rounded-full">
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 py-12 text-white mt-0">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
          <div className="flex flex-col items-start mb-10 md:mb-0">
            <div className="flex items-center">
              <img src={logolight} alt="Logo" className="w-36" />
            </div>
            <h2 className="text-[24px] font-medium mt-2">Do You Need Help With Anything?</h2> {/* Moved to a new line */}
            <p className="text-gray-400 my-5">
              Receive updates, hot deals, tutorials, discounts sent straight
              to your inbox every month.
            </p>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Email Address"
                className="flex-grow p-4 rounded-md border border-gray-300"
              />
              <button className="bg-green-600 text-white font-bold py-4 px-6 rounded-md ml-2">
                Subscribe
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:ml-10 md:space-x-10">
            {footerData.map((val, index) => (
              <div className="flex-1" key={index}>
                <h3 className="font-medium mb-4">{val.title}</h3>
                <ul>
                  {val.text.map((items, idx) => (
                    <li className="text-gray-400 mb-5" key={idx}>
                      {items.list}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>

      <div className="text-center py-5 bg-gray-800 text-gray-500 border-t border-gray-700">
        <span>© 2021 RentUP. Designed By GorkCoder.</span>
      </div>
    </>
  );
};

export default Footer;
