import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About S-Health</h3>
            <p className="text-gray-300">Providing comprehensive digital healthcare solutions for a better and healthier life.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link to="/doctors" className="text-gray-300 hover:text-white">Doctors</Link></li>
              <li><Link to="/appointments" className="text-gray-300 hover:text-white">Appointments</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="text-gray-300 hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white text-2xl"><FaFacebook /></a>
              <a href="#" className="text-gray-300 hover:text-white text-2xl"><FaInstagram /></a>
              <a href="#" className="text-gray-300 hover:text-white text-2xl"><FaTwitter /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2026 S-Health by Anonymous. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;