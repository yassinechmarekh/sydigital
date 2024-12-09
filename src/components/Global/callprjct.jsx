import React from "react";
import { Link } from "react-router-dom";

const Callprjct = () => {
  const paraorjctcall =
    "What’s stopping your business from having the website it truly deserves?";
  return (
    <section className=" bg-blue-100 dark:bg-gunmetal py-8 sm:py-16">
      <div className="container">
        <div className="bg-[linear-gradient(24deg,rgba(35,115,121,0.6086367652529762)_15%,rgba(33,235,214,0.7879084739364496)_42%,rgba(20,37,50,0.6618580537683824)_100%)] rounded-2xl px-6 py-10 sm:px-12 sm:py-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 font-title text-white">
            {paraorjctcall}
          </h2>
          <p className="text-base sm:text-xl mb-8 font-subtitle text-white font-bold">
            Transform your vision into a stunning website , let Sydigital bring
            your business to life online today!
          </p>
          <Link to='/appointment' className="bg-white text-caribbean-current font-bold py-3 px-8 rounded-full hover:bg-green-100 transition-colors">
            Get a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Callprjct;
