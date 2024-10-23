import React from "react";

const Awards = () => {
  // Awards data defined within the component
  const awards = [
    {
      icon: <i className="fa-solid fa-trophy text-[#ffffff]"></i>,
      num: "32 M",
      name: "Blue Burmin Award",
    },
    {
      icon: <i className="fa-solid fa-briefcase text-[#ffffff]"></i>,
      num: "43 M",
      name: "Mimo X11 Award",
    },
    {
      icon: <i className="fa-solid fa-lightbulb text-[#ffffff]"></i>,
      num: "51 M",
      name: "Australian UGC Award",
    },
    {
      icon: <i className="fa-solid fa-heart text-[#ffffff]"></i>,
      num: "42 M",
      name: "IITCA Green Award",
    },
  ];

  return (
    <section className="bg-[#122947] text-white text-center py-20">
      <div className="container mx-auto">
        {/* Updated heading structure */}
        <div className="flex flex-col-reverse mb-10">
          <p className="text-[#27ae60] text-2xl">Our Awards</p>
          <h1 className="text-white text-3xl font-normal">Over 1,24,000+ Happy Users Being With Us Still They Love Our Services</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {awards.map((val, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#122947] p-4 rounded-lg "
            >
              <div className="w-24 h-24 flex items-center justify-center mb-4 bg-opacity-10 rounded-full text-[#ffffff]">
                <span className="text-4xl">{val.icon}</span>
              </div>
              <h1 className="text-5xl text-white">{val.num}</h1>
              <p className="text-gray-500 text-base">{val.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;