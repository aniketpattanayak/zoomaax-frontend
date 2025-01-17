import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-customBlue text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Zoomaax News</h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-footerColor">Home</Link>
          <Link to="/about" className="hover:text-footerColor">About</Link>
          <Link to="/contact" className="hover:text-footerColor">Contact</Link>
          <Link to="/news" className="hover:text-footerColor">News</Link>
          <Link to="/entertainment" className="hover:text-footerColor">Entertainment</Link>
          <Link to="/moviereviews" className="hover:text-footerColor">Movie Reviews</Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white rounded-lg px-3 py-2">
          <input type="text" placeholder="Search..." className="bg-transparent text-white placeholder-gray-400 focus:outline-none" />
          <button className="text-white ml-2">🔍</button>
        </div>

        {/* Social Media Links */}
        <div className="hidden md:flex items-center space-x-3 ml-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/24/facebook-f.png" alt="Facebook" className="filter invert" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/24/twitter.png" alt="Twitter" className="filter invert" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="https://img.icons8.com/ios-filled/24/instagram-new.png" alt="Instagram" className="filter invert" />
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-between items-center py-2 px-6">
        <nav className="flex space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Blog</a>
        </nav>
        <div>
          <input type="text" placeholder="Search..." className="bg-white text-white placeholder-gray-400 px-3 py-2 rounded-lg" />
        </div>
      </div>
    </header>
  );
};

export default Header;
