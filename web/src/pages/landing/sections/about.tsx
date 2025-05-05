import React from "react";
import Button from "@/components/ui/button";

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white relative" id="about-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-6">
              <p className="text-gray-500 uppercase tracking-wider text-sm">
                ABOUT US
              </p>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl mb-6 text-gray-900">
              Bring a smile to their faces.
              <br />
              The Trust Placed.
            </h2>
            <p className="text-gray-600 mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <p className="text-gray-600 mb-8">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
              voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.
            </p>
            <Button variant="primary" size="md">
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 relative">
            {/* Yellow circle decorative element */}
            <div className="absolute w-32 h-32 bg-yellow-400 rounded-full -bottom-8 -right-8 z-0 opacity-70"></div>

            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Happy child with clean water"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="relative z-10 mt-8">
              <img
                src="https://images.pexels.com/photos/1250452/pexels-photo-1250452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Community with water access"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
