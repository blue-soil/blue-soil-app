import React, { useState } from 'react';
import { NavItem } from '@/features/landing/types';
import { Heart } from 'lucide-react';

const navItems: NavItem[] = [
  { label: 'Why Water', href: '#why-water' },
  { label: 'Our Work', href: '#our-work' },
  { label: 'About Us', href: '#about-us', hasDropdown: true },
  { label: 'Get Involved', href: '#get-involved', hasDropdown: true },
  { label: 'Article', href: '#article' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 text-green-800">
              <Heart className="h-6 w-6 text-green-500 fill-green-200" />
              <span className="font-serif text-xl tracking-wide">Salsabil</span>
            </a>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-1 py-2 text-gray-700 hover:text-green-500 text-sm font-medium relative group"
              >
                <span className="flex items-center">
                  {item.label}
                  {item.hasDropdown && (
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-green-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
            
            <div className="flex items-center gap-3">
              <a
                href="#donate"
                className="px-5 py-2 border border-green-500 rounded-md text-green-500 hover:bg-green-50 text-sm font-medium transition-colors"
              >
                Donate
              </a>
              <a
                href="#sign-up"
                className="px-5 py-2 bg-green-500 text-white rounded-md hover:bg-green-800 text-sm font-medium transition-colors"
              >
                Sign Up
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-500 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-500 hover:bg-gray-50"
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 p-3">
            <a
              href="#donate"
              className="px-5 py-2 border border-green-500 rounded-md text-green-500 hover:bg-green-50 text-center"
            >
              Donate
            </a>
            <a
              href="#sign-up"
              className="px-5 py-2 bg-green-500 text-white rounded-md hover:bg-green-800 text-center"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;