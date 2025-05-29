import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartSidebar from '../CartSidebar';
import { useAuth0 } from '@auth0/auth0-react';
import { FaRegUser, FaShoppingBag, FaSearch, FaPrescriptionBottleAlt, FaHome, FaInfoCircle } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Checkout from '../Checkout';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cart } = useCart();
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  const totalItems = cart?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center group">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-teal-400 flex items-center justify-center text-white">
                <FaPrescriptionBottleAlt className="h-5 w-5 transition-transform group-hover:scale-110" />
              </div>
              <div className="ml-3 flex flex-col">
                <span className="text-xl font-bold text-gray-800">MediCare</span>
                <span className="text-xs text-teal-600 -mt-1">Your Health Partner</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                isActive('/') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}>
              <FaHome className="mr-1" />
              <span>Home</span>
            </Link>
            
            <Link to="/products" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                isActive('/products') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}>
              <FaShoppingBag className="mr-1" size={14} />
              <span>Products</span>
            </Link>
            
            <Link to="/prescriptions" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                isActive('/prescriptions') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}>
              <FaPrescriptionBottleAlt className="mr-1" size={14} />
              <span>Prescriptions</span>
            </Link>
            
            <Link to="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                isActive('/about') ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              }`}>
              <FaInfoCircle className="mr-1" size={14} />
              <span>About</span>
            </Link>
          </div>

          {/* Search, Cart and Profile */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Button */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100">
              <FaSearch className="h-5 w-5" />
            </button>
            
            {/* Cart Button */}
            <div className="relative">
              <button 
                onClick={() => setCartOpen(true)} 
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 p-2 rounded-full hover:bg-gray-100 relative">
                <FaShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>

            {/* Profile or Login */}
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center focus:outline-none">
                  {user?.picture ? (
                    <img 
                      src={user.picture} 
                      alt={user.name} 
                      className="h-8 w-8 rounded-full border-2 border-blue-100"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <FaRegUser className="h-4 w-4 text-blue-600" />
                    </div>
                  )}
                  <span className="ml-2 text-sm font-medium text-gray-700 max-w-[100px] truncate">
                    {user?.name?.split(' ')[0]}
                  </span>
                </button>
                
                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Your Profile
                  </Link>
                  <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                    Orders
                  </Link>
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => loginWithRedirect()}
                className="bg-gradient-to-r from-blue-500 to-teal-400 text-white text-sm px-4 py-2 rounded-md hover:shadow-md transition-all duration-200 flex items-center"
              >
                <FaRegUser className="mr-2" size={14} />
                Login
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-3 md:hidden">
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2"
            >
              <FaShoppingBag className="h-5 w-5 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar Overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md p-4 border-t border-gray-100 animate-fadeDown">
          <div className="max-w-3xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for medications, health products..."
              className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <button 
              onClick={() => setSearchOpen(false)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-700"
            >
              <FaXmark />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-fadeDown">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md ${isActive('/') ? 'bg-blue-50 text-blue-600' : 'text-gray-700'} font-medium flex items-center`}
              onClick={() => setIsOpen(false)}
            >
              <FaHome className="mr-3" />
              Home
            </Link>
            
            <Link 
              to="/products" 
              className={`block px-3 py-2 rounded-md ${isActive('/products') ? 'bg-blue-50 text-blue-600' : 'text-gray-700'} font-medium flex items-center`}
              onClick={() => setIsOpen(false)}
            >
              <FaShoppingBag className="mr-3" />
              Products
            </Link>
            
            <Link 
              to="/prescriptions"
              className={`block px-3 py-2 rounded-md ${isActive('/prescriptions') ? 'bg-blue-50 text-blue-600' : 'text-gray-700'} font-medium flex items-center`}
              onClick={() => setIsOpen(false)}
            >
              <FaPrescriptionBottleAlt className="mr-3" />
              Prescriptions
            </Link>
            
            <Link 
              to="/about" 
              className={`block px-3 py-2 rounded-md ${isActive('/about') ? 'bg-blue-50 text-blue-600' : 'text-gray-700'} font-medium flex items-center`}
              onClick={() => setIsOpen(false)}
            >
              <FaInfoCircle className="mr-3" />
              About
            </Link>
            
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="px-3 space-y-1">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center px-3 py-2">
                      {user?.picture ? (
                        <img src={user.picture} alt={user.name} className="h-8 w-8 rounded-full" />
                      ) : (
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <FaRegUser className="h-4 w-4 text-blue-600" />
                        </div>
                      )}
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-800">{user?.name}</div>
                        <div className="text-xs text-gray-500">{user?.email}</div>
                      </div>
                    </div>
                    <Link 
                      to="/profile" 
                      className="block px-3 py-2 rounded-md text-gray-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Your Profile
                    </Link>
                    <Link 
                      to="/orders" 
                      className="block px-3 py-2 rounded-md text-gray-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Your Orders
                    </Link>
                    <button
                      onClick={() => {
                        logout({ returnTo: window.location.origin });
                        setIsOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 rounded-md text-red-600"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => {
                      loginWithRedirect();
                      setIsOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded-md hover:shadow-md transition flex items-center justify-center"
                  >
                    <FaRegUser className="mr-2" />
                    Login
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cart Sidebar - Keep this component */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </nav>
  );
};

export default Navbar;