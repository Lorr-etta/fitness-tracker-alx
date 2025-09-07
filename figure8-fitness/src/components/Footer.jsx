import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t-2 border-gray-100 shadow-lg" id="contact">
      {/* Decorative top border with accent colors */}
      <div className="h-1 bg-gradient-to-r from-orange-400 via-red-500 to-green-500"></div>
      
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  FIGURE 8
                </span>
              </h3>
              <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mb-4"></div>
              <p className="text-gray-600 leading-relaxed text-sm">
                Your ultimate fitness companion for tracking workouts, setting goals, and achieving results with style and precision.
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300" 
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300" 
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white hover:shadow-lg hover:scale-110 transition-all duration-300" 
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4 relative">
              Quick Links
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-orange-500 transition-colors duration-300"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-orange-500 transition-colors duration-300"></span>
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-orange-500 transition-colors duration-300"></span>
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-orange-500 transition-colors duration-300"></span>
                  Contact
                </a>
              </li>
              <li>
                <a href="#community" className="text-gray-600 hover:text-orange-500 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-orange-500 transition-colors duration-300"></span>
                  Community
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4 relative">
              Services
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-red-400 to-red-500 rounded-full"></div>
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-600 hover:text-red-500 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-red-500 transition-colors duration-300"></span>
                  Yoga Classes
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-red-500 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-red-500 transition-colors duration-300"></span>
                  Diet Planning
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-red-500 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-red-500 transition-colors duration-300"></span>
                  Virtual Coaching
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-red-500 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-gray-300 rounded-full mr-3 group-hover:bg-red-500 transition-colors duration-300"></span>
                  Expert Advice
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4 relative">
              Contact Us
              <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
            </h4>
            <address className="text-gray-600 not-italic space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p>123 Fitness Street</p>
                  <p>Workout City, WC 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex-shrink-0 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <p>info@figure8fitness.com</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex-shrink-0 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <p>(123) 456-7890</p>
              </div>
            </address>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {currentYear} Figure 8 Fitness. All rights reserved. Built with 💪 and ❤️
            </p>
            
            {/* Decorative accent */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;