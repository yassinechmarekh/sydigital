import React from "react";
import { Link } from "react-router-dom";

const Bannerservices = () => {
  return (
    <section className="container py-10 sm:py-16">
      <div className="bg-[linear-gradient(24deg,rgba(35,115,121,0.6086367652529762)_15%,rgba(33,235,214,0.7879084739364496)_42%,rgba(20,37,50,0.6618580537683824)_100%)] rounded-2xl px-6 py-8 sm:px-12 sm:py-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-base sm:text-xl mb-8">
          Lets create something extraordinary together.
        </p>
        <Link
          to="/appointment"
          className="bg-white text-caribbean-current font-bold py-3 px-8 rounded-full hover:bg-green-100 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Bannerservices;
