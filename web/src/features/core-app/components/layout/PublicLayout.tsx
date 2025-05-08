import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet } from 'lucide-react';

const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900">
      {/* Navbar */}
      <header className="bg-white dark:bg-gray-900 shadow-sm">
        <div className="mx-auto px-4 flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <span className="inline-flex w-8 h-8 rounded-md bg-primary-600 text-white items-center justify-center">
              <Droplet size={18} />
            </span>
            <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
              Blue Soil
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            
            <Link to="/signin" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
              Sign In
            </Link>
            <Link to="/signup" className="font-medium text-primary-600 hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-300">
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="flex flex-col ">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-8">
        <div className="mx-auto px-4 py-6 text-center text-gray-500 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Blue Soil, Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default PublicLayout;