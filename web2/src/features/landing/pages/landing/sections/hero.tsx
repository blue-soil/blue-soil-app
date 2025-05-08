import React from "react";
import DonationCard from "../components/donation-card";
import GetStartedButton from "../components/hero-button";

const Hero: React.FC = () => {
  return (
    <section className="pt-20 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left section with text */}
        <div className="px-4 sm:px-6 lg:px-8 pt-16 pb-20 relative">
          <div className="max-w-xl mx-auto lg:mx-0 lg:max-w-none relative z-10">
            {/* Decorative dots */}
            <div className="absolute w-3 h-3 bg-yellow-400 rounded-full top-12 right-12"></div>
            <div className="absolute w-3 h-3 bg-yellow-400 rounded-full bottom-12 left-12"></div>
            <div className="absolute w-3 h-3 bg-yellow-400 rounded-full top-1/3 left-1/4"></div>

            <div className="mb-8 inline-block">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <h2 className="font-serif text-lg text-green-800">Salsabil</h2>
              </div>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl leading-tight mb-6 text-gray-900">
              Help bring clean and safe water to every person on the planet.
            </h1>

            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              The water crisis is massive. But together, we can solve it.
              Private donors cover our operating costs so whether you choose to
              join us by giving once or through The Spring.
            </p>

            <GetStartedButton />
          </div>
        </div>

        {/* Right section with image and donation box */}
        <div className="relative h-[600px] lg:h-auto">
          <img
            src="https://images.pexels.com/photos/1850598/pexels-photo-1850598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="People collecting water"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10"></div>

          <DonationCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
