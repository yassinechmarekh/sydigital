import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Servicecard = ({ service }) => {
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
          {service.title}
        </h2>
        <div className="lijablahcontainer font-subtitle">
          {service.tags.map((item, index) => (
            <div key={index} className="tags">
              {item}
            </div>
          ))}
        </div>

        <p className="parag">
          {service.description}
        </p>
        <Link to='/appointment' className="cardservbtn  bg-turquoise font-bold text-gunmetal">
          Get a Free Quote
        </Link>
      </div>
      <div className="cardserviceimg">
        <img src={service.imagechara} alt="" className="imagecharacard" />
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
