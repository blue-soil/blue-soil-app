import React from "react";
import Button from "@/components/ui/button";

const DonationSection: React.FC = () => {
  return (
    <section
      className="py-20 bg-sky-50 relative overflow-hidden"
      id="donate"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl mb-8 text-gray-900">
              <span className="text-center block uppercase tracking-wider text-sm text-gray-500 mb-2">
                THE
              </span>
              <span className="text-center block text-3xl sm:text-5xl">
                HEART
              </span>
              <span className="flex justify-center">
                {Array.from({ length: 11 }).map((_, i) => (
                  <span
                    key={i}
                    className="inline-block w-2 h-2 bg-yellow-400 rounded-full mx-0.5 mt-4"
                  ></span>
                ))}
              </span>
            </h2>

            <h3 className="text-2xl sm:text-3xl font-serif mb-6 text-center">
              Support your community, charity
              <br />
              is an act of a soft heart
            </h3>

            <p className="text-gray-600 mb-8 text-center">
              Help all Moroccan kids get access to drinking water by supporing
              us in this project
            </p>

            <div className="flex justify-center">
              <Button variant="primary" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Yellow circle decorative element */}
            <div className="absolute w-24 h-24 bg-yellow-400 rounded-full -top-6 -right-6 z-0"></div>
            <div className="absolute w-4 h-4 bg-olive-700 rounded-full top-1/2 right-4 z-20"></div>

            <img
              src="https://www.wearewater.org/wp-content/uploads/2020/09/girl-drinking-water-morocco_333309-1920x720.jpg"
              alt="Children with clean water"
              className="w-full h-auto object-cover rounded-lg shadow-md relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
