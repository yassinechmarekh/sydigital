import React from "react";

// eslint-disable-next-line react/prop-types
const Servicecard = ({ servicename, imagechara }) => {
  const tags = [
    "lijablah wnzid wnzid",
    "lijablah wnzid",
    "lijablah wnzid lijablah",
    "lijablah wnzid",
    "lijablah wnzid",
  ];
  return (
    <div className="cardservice bg-turquoise/10 dark:bg-turquoise/20 backdrop-filter backdrop-blur-sm rounded-lg border border-caribbean-current dark:border-turquoise p-8 hover:bg-turquoise/30 transition-all duration-300 cursor-pointer">
      <div className="cardservicetext">
        <h2 className="font-title text-4xl font-bold text-caribbean-current dark:text-white capitalize">
          {servicename}
        </h2>
        <div className="lijablahcontainer font-subtitle">
          {tags.map((item, index) => (
            <div key={index} className="tags">{item}</div>
          ))}
        </div>

        <p className="parag">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat non
          quibusdam eos ducimus, vitae magnam aut quos libero sapiente
          voluptatum unde qui illum.{" "}
        </p>
        <div className="cardservbtn  bg-turquoise font-bold text-gunmetal">
          Get a Free Quote
        </div>
      </div>
      <div className="cardserviceimg">
        <img src={imagechara} alt="" className="imagecharacard" />
        <img src="./starelement.png" alt="" className="starelement1" />
        <img src="./arrowelement.png" alt="" className="starelement2" />
        <img src="./starelement2.png" alt="" className="starelement3" />
        <div className="circlebig bg-turquoise" />
        <div className="circlesmall bg-turquoise" />
      </div>
    </div>
  );
};

export default Servicecard;
