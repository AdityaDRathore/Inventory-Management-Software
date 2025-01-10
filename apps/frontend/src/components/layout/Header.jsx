// src/components/layout/Header.jsx
import React from 'react';
import { BellIcon, SearchIcon, MenuIcon } from '@mui/icons-material';

const Header = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side */}
        <div className="flex items-center">
          <button 
            onClick={onMenuClick}
            className="p-2 rounded-md lg:hidden hover:bg-gray-100"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
          
          {/* Search bar */}
          <div className="hidden md:flex items-center ml-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            <BellIcon className="h-6 w-6" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
          </button>
          {/* Add more header actions here */}
        </div>
      </div>
    </header>
  );
};

export default Header;