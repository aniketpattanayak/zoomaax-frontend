import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
 
const Footer = () => {
  return (
    <footer className="bg-footerColor text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-start md:items-center px-6">
        {/* Subscribe Section */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-3xl font-bold mb-2">Subscribe to Zoomaax News</h1>
          <h3 className="mb-4">Enter your email here*</h3>
          <form className="flex flex-col gap-3">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-md text-black w-full"
              required
            />
            {/* Agreement Checkbox */}
            <div className="flex items-center gap-2">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms" className="text-sm">
                I agree to the terms and conditions
              </label>
            </div>
            {/* Subscribe Button */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md w-full"
            >
              Subscribe
            </button>
          </form>

          {/* Social Media Links */}
          <div className="flex justify-start gap-4 mt-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold">Quick Links</h4>
          <Link to="/" className="hover:text-footerColor">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/allnews" className="hover:underline">All News</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/advertise" className="hover:underline">Advertise</Link>
        </div>
      </div>

      {/* Footer Copy */}
      <div className="container mx-auto text-center mt-6">
        <p>&copy; 2025 Zoomaax News. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
