import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkClasses = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
  const activeLinkClasses = "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";

  return (
    <nav className="bg-gray-800 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-white font-bold text-xl">
              Sebastian's Portfolio
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? activeLinkClasses : linkClasses}
              >
                Profile
              </NavLink>
              <NavLink 
                to="/projects" 
                className={({ isActive }) => isActive ? activeLinkClasses : linkClasses}
              >
                Projects
              </NavLink>
              <NavLink 
                to="/blog" 
                className={({ isActive }) => isActive ? activeLinkClasses : linkClasses}
              >
                Blog
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}