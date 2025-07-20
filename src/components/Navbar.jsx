import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#0D1117] text-[#E6EDF3] shadow-lg border-b border-[#2D333B]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo / Brand */}
        <div className="text-2xl font-bold tracking-wider text-[#00ADB5]">
          PassWord Rakhwala
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-[#00ADB5] transition duration-200">Home</Link>
          <Link to="/support" className="hover:text-[#00ADB5] transition duration-200">Support</Link>
          <Link to="/about" className="hover:text-[#00ADB5] transition duration-200">About</Link>
        </div>

        {/* Mobile Hamburger (non-functional placeholder) */}
        <div className="md:hidden">
          <button className="text-[#00ADB5] hover:text-[#00d1db] focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
