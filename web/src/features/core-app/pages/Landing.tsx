import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, BarChart2, Users, Leaf, MessageSquare, Activity } from 'lucide-react';
import Button from '../components/ui/Button';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 animate-fade-in">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
              Smart Agriculture Management
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Optimize your farming operations with real-time data, AI-powered recommendations, and comprehensive monitoring tools.
            </p>
            <div className="mt-10 flex justify-center space-x-6">
            <Link to="/signup">
            <Button size="lg" className="text-black">
              Get Started
            </Button>
          </Link>
                  <Link to="/signin">
                <Button variant="outline" size="lg">Sign In</Button>
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="mt-12 relative max-w-5xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="\agri1.png"
                alt="Blue Soil Dashboard"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-600/40 to-transparent mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Intelligent Farming Features
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Blue Soil combines cutting-edge technology with agricultural expertise to help you manage your farm more efficiently.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users size={24} />,
                title: 'Farmer Management',
                description: 'Easily manage multiple fields, crops, and farming operations in one centralized system.',
              },
              {
                icon: <Activity size={24} />,
                title: 'IoT Monitoring',
                description: 'Connect and monitor all your IoT devices and sensors in real-time for optimal decision making.',
              },
              {
                icon: <MessageSquare size={24} />,
                title: 'Community Forum',
                description: 'Join discussions with other farmers, share best practices, and learn from experts.',
              },
              {
                icon: <Droplet size={24} />,
                title: 'Water Management',
                description: 'Monitor water quality and optimize irrigation schedules to conserve water and improve crop yield.',
              },
              {
                icon: <BarChart2 size={24} />,
                title: 'Detailed Reports',
                description: 'Generate comprehensive reports to analyze performance and identify improvement opportunities.',
              },
              {
                icon: <Leaf size={24} />,
                title: 'AI Recommendations',
                description: 'Receive personalized recommendations based on your specific crops, soil conditions, and local weather.',
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Trusted by Farmers Worldwide
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from farmers who have transformed their agricultural operations with Blue Soil.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Blue Soil has revolutionized how we manage our 500-acre farm. The water quality monitoring alone has saved us thousands of gallons.",
                author: "Sarah Johnson",
                role: "Farm Owner, Midwest USA",
                avatar: "https://images.pexels.com/photos/2382895/pexels-photo-2382895.jpeg?auto=compress&cs=tinysrgb&w=100",
              },
              {
                quote: "The AI recommendations are surprisingly accurate. We've increased our crop yield by 23% while using less resources.",
                author: "Miguel Sanchez",
                role: "Agricultural Consultant",
                avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
              },
              {
                quote: "As a tech-focused farmer, I appreciate how Blue Soil integrates all my IoT devices into one easy-to-use dashboard.",
                author: "Emily Chen",
                role: "Modern Farm Operator",
                avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100",
              },
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md"
              >
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 dark:bg-primary-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
                  Ready to transform your farm?
                </h2>
                <p className="mt-4 text-lg text-primary-100 max-w-3xl">
                  Join thousands of farmers who are optimizing their operations with Blue Soil's smart agriculture platform.
                </p>
              </div>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <Link to="/signup">
                    <Button
                      size="lg"
                      className="bg-white text-primary-600 hover:bg-primary-50"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-primary-700"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center">
                <span className="w-8 h-8 rounded-md bg-primary-600 text-white flex items-center justify-center">
                  <Droplet size={18} />
                </span>
                <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
                  Blue Soil
                </span>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
                Modern solutions for modern farmers. Optimize your agricultural operations with data-driven insights.
              </p>
              <div className="mt-4 flex space-x-6">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                  >
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5"></div>
                  </a>
                ))}
              </div>
            </div>
            {[
              {
                title: 'Product',
                links: ['Features', 'Pricing', 'Case Studies', 'API', 'Integrations'],
              },
              {
                title: 'Resources',
                links: ['Documentation', 'Blog', 'Guides', 'Support', 'Community'],
              },
              {
                title: 'Company',
                links: ['About', 'Careers', 'Contact', 'Privacy', 'Terms'],
              },
            ].map((category, index) => (
              <div key={index}>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white tracking-wider uppercase">
                  {category.title}
                </h3>
                <ul className="mt-4 space-y-2">
                  {category.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
              &copy; 2025 Blue Soil, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;