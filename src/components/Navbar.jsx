import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaHeartbeat, FaUser, FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <FaHeartbeat className="text-blue-600 text-3xl" />
            <span className="text-2xl font-bold text-gray-800">S-Health<span className="text-blue-600">ByAnonymous</span></span>
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition">Services</Link>
            <Link to="/doctors" className="text-gray-700 hover:text-blue-600 transition">Doctors</Link>
            <Link to="/appointments" className="text-gray-700 hover:text-blue-600 transition">Appointments</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition">Contact</Link>
          </div>

          <div className="hidden md:flex space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-blue-600">
                  <FaUser />
                  <span>{user?.name}</span>
                </Link>
                <button onClick={handleLogout} className="flex items-center space-x-2 text-red-600 hover:text-red-700">
                  <FaSignOutAlt />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link to="/login" className="btn-primary">Login</Link>
            )}
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/services" className="block py-2 text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/doctors" className="block py-2 text-gray-700 hover:text-blue-600">Doctors</Link>
            <Link to="/appointments" className="block py-2 text-gray-700 hover:text-blue-600">Appointments</Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-blue-600">Contact</Link>
            {!isLoggedIn && (
              <Link to="/login" className="block py-2 text-blue-600">Login</Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;