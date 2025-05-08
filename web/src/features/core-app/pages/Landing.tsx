import{ useState } from 'react';
import { Play, ChevronLeft, ChevronRight, Leaf, Droplet, ArrowRight } from 'lucide-react';

function Landing() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Christina Eve",
      quote: "These organic vegetables changed our cooking experience. The freshness is remarkable, and knowing they're grown sustainably makes them even better to purchase.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      name: "Michael Thompson",
      quote: "As a chef, quality produce is essential. The organic offerings from this farm exceed all expectations in flavor and freshness.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      quote: "Supporting sustainable agriculture has never been easier. Their delivery service is prompt and the quality is consistently outstanding.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="font-sans text-gray-800 overflow-x-hidden">
      

      {/* Hero Section */}
      <section className="relative min-h-screen md:h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/2252584/pexels-photo-2252584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Agriculture field" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute left-0 right-0 bottom-0 h-16 bg-[url('https://i.ibb.co/cLDpjJb/wave-pattern.png')] bg-repeat-x bg-contain z-20"></div>
        
        <div className="relative z-20 container mx-auto px-4 md:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
            Agriculture Cultivating the Future of Development !!
          </h1>
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-yellow-400 text-gray-800 px-6 py-3 rounded font-medium hover:bg-yellow-500 transition-colors flex items-center">
              Learn more
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded font-medium hover:bg-white/10 transition-colors flex items-center"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Video
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-1/2 left-4 transform translate-y-1/2 z-20">
          <button className="bg-white/20 hover:bg-white/40 transition-colors rounded-full p-2 backdrop-blur-sm">
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>
        </div>
        <div className="absolute bottom-1/2 right-4 transform translate-y-1/2 z-20">
          <button className="bg-white/20 hover:bg-white/40 transition-colors rounded-full p-2 backdrop-blur-sm">
            <ChevronRight className="h-6 w-6 text-white" />
          </button>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            What We Offer
            <span className="block w-20 h-1 bg-green-600 mx-auto mt-3"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6 flex flex-col items-center">
                <div className="bg-gray-100 rounded-full p-4 mb-4">
                  <Leaf className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Fresh Vegetables</h3>
                <p className="text-gray-600 text-center mb-4">
                  Our locally grown vegetables are hand-picked at peak ripeness to ensure maximum freshness and nutritional value.
                </p>
                <button className="mt-auto border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition-colors">
                  Explore
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6 flex flex-col items-center">
                <div className="bg-gray-100 rounded-full p-4 mb-4">
                  <Droplet className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Dairy Products</h3>
                <p className="text-gray-600 text-center mb-4">
                  Locally sourced from grass-fed cows, our dairy products are rich in flavor and naturally produced without artificial hormones.
                </p>
                <button className="mt-auto border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition-colors">
                  Explore
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6 flex flex-col items-center">
                <div className="bg-gray-100 rounded-full p-4 mb-4">
                  <svg className="h-10 w-10 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6.00003C10.2006 3.90003 7.19996 3.00003 4.20001 4.80003C1.20001 6.60003 0 10.1 0 13C0 15.9 1.10001 19.5 4.20001 21.3C7.30001 23.1 10.7 21.3 12 19.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 6.00003C13.7994 3.90003 16.8 3.00003 19.8 4.80003C22.8 6.60003 24 10.1 24 13C24 15.9 22.9 19.5 19.8 21.3C16.7 23.1 13.3 21.3 12 19.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Organic Products</h3>
                <p className="text-gray-600 text-center mb-4">
                  Certified organic foods grown without synthetic pesticides or fertilizers, focusing on sustainable farming practices.
                </p>
                <button className="mt-auto border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-600 hover:text-white transition-colors">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://images.pexels.com/photos/2894225/pexels-photo-2894225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Farmers working" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="relative z-20 container mx-auto px-4 md:px-8 h-full flex flex-col justify-center items-center text-center">
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="bg-white/30 hover:bg-white/40 rounded-full p-6 backdrop-blur-sm mb-8 transition-all hover:scale-110"
          >
            <Play className="h-8 w-8 text-white" />
          </button>
          <h2 className="text-3xl md:text-4xl font-bold text-white max-w-2xl leading-tight">
            Experience the Freshness of Our Unique Organic Offerings
          </h2>
          
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="bg-green-600/80 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-3xl font-bold">5,473</h3>
              <p className="text-white/80">Happy Customers</p>
            </div>
            <div className="bg-green-600/80 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-3xl font-bold">1,750</h3>
              <p className="text-white/80">Acres Farmed</p>
            </div>
            <div className="bg-green-600/80 backdrop-blur-sm rounded-lg p-6 text-white">
              <h3 className="text-3xl font-bold">2,460</h3>
              <p className="text-white/80">Organic Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-green-100 absolute top-8 left-8 w-[80%] h-[80%] -z-10 rounded-full"></div>
              <img 
                src="https://images.pexels.com/photos/2284170/pexels-photo-2284170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Hydroponic farming" 
                className="rounded-lg relative z-10"
              />
            </div>
            <div>
              <div className="flex items-center text-green-600 mb-4">
                <span className="w-6 h-0.5 bg-green-600 mr-2"></span>
                <span className="font-medium">Incredibly Good</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Welcome to the Frontier of Organic Agriculture
              </h2>
              <p className="text-gray-600 mb-6">
                We use modern farming techniques while staying true to organic and sustainable principles. Our approach balances innovation with tradition, creating superior quality products that nourish both people and the planet.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Farm-fresh produce ready in 24 hours</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Experience the journey, for every taste</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Trust your table when you know the farm</p>
                </div>
              </div>
              <button className="bg-yellow-400 text-gray-800 px-6 py-3 rounded font-medium hover:bg-yellow-500 transition-colors flex items-center">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Journey */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 relative">
            Innovate Journey
            <span className="block w-20 h-1 bg-green-600 mx-auto mt-3"></span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <img 
                src="https://images.pexels.com/photos/5765/wheat-field-agriculture.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Smart Farming" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center">Smart Farming</h3>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <img 
                src="https://images.pexels.com/photos/5748755/pexels-photo-5748755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Pioneering" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center">Pioneering</h3>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <img 
                src="https://images.pexels.com/photos/2133/man-person-cute-young.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="AgriTech" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center">AgriTech</h3>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <img 
                src="https://images.pexels.com/photos/442589/pexels-photo-442589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Farm Management" 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center">Farm Management</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-16 relative">
            How about "Echoes
            <span className="block w-20 h-1 bg-green-600 mx-auto mt-3"></span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-gray-50 rounded-lg p-8 shadow-md relative">
              <div className="text-4xl font-serif text-green-600 absolute top-4 left-4">"</div>
              <div className="text-4xl font-serif text-green-600 absolute bottom-4 right-4">"</div>
              <p className="text-gray-700 mb-6 relative z-10 italic">{testimonials[activeTestimonial].quote}</p>
              <div className="flex items-center">
                <img 
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonials[activeTestimonial].name}</h4>
                  <p className="text-sm text-gray-500">Satisfied Customer</p>
                </div>
              </div>
              <div className="flex mt-6 justify-end">
                <button 
                  onClick={prevTestimonial}
                  className="bg-green-100 p-2 rounded-full text-green-700 hover:bg-green-200 transition-colors mr-2"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="bg-green-100 p-2 rounded-full text-green-700 hover:bg-green-200 transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.pexels.com/photos/2108813/pexels-photo-2108813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Happy customer with produce" 
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 bg-green-700 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
            <p className="text-white/80 mb-8 text-lg">
              Join thousands of satisfied customers who have made the switch to our organic, sustainable products.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-yellow-400 text-gray-800 px-8 py-3 rounded-md font-medium hover:bg-yellow-500 transition-colors">
                Get Started Today
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Leaf className="h-6 w-6 text-green-400" />
                <span className="ml-2 text-xl font-bold">Agriculture</span>
              </div>
              <p className="text-gray-400 mb-4">
                Cultivating a sustainable future through innovative and responsible farming practices.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Organic Farming</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Fresh Produce</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Agricultural Consulting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Farm Tours</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sustainable Practices</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">123 Farm Lane, Greenville, CA 95463</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">contact@agriculture.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-green-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Agriculture. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-4xl w-full mx-4">
            <div className="flex justify-end mb-2">
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/watch?v=Z7ziYLMRYdo"
                title="Agriculture Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Landing;