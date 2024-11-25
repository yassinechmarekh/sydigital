import React from 'react';

const Bannerservices = () => {
    return (
        <section className="container mx-auto px-4 py-16">
        <div className="bg-[linear-gradient(24deg,rgba(35,115,121,0.6086367652529762)_15%,rgba(33,235,214,0.7879084739364496)_42%,rgba(20,37,50,0.6618580537683824)_100%)] rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl mb-8">Lets create something extraordinary together.</p>
          <button className="bg-white text-caribbean-current font-bold py-3 px-8 rounded-full hover:bg-green-100 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    );
}

export default Bannerservices;
