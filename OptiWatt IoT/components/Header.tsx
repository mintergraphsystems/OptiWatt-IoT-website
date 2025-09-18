import React, { useState } from 'react';

interface HeaderProps {
  currentRoute: string;
}
import React, { useState } from 'react';

interface HeaderProps {
  currentRoute: string;
}

const Header: React.FC<HeaderProps> = ({ currentRoute }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { href: '#/', label: 'Home' },
    { href: '#/about', label: 'About' },
    { href: '#/features', label: 'Features' },
    { href: '#/services', label: 'Services' },
    { href: '#/models', label: 'Models' },
    { href: '#/products', label: 'Products' },
  ];
  
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.location.hash = path;
  };

  const handleMobileNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.location.hash = path;
    setIsOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-200">
      <nav className="container mx-auto px-4 lg:px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <a href="#/" onClick={(e) => handleNav(e, '#/')} className="text-2xl font-bold text-slate-900 flex items-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          OptiWatt IoT
        </a>

        {/* Centered Navigation Links for Desktop */}
        <div className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleNav(e, link.href)}
              className={`font-semibold transition-all duration-300 py-3 px-5 rounded-full text-lg ${
                currentRoute === link.href
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right-side elements */}
        <div>
          {/* Contact Us Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <a href="#/contact" onClick={(e) => handleNav(e, '#/contact')} className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 text-lg">
              Contact Us
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 focus:outline-none" aria-label="Toggle menu">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
               <a key={link.href} href={link.href} onClick={(e) => handleMobileNav(e, link.href)} 
                className={`block px-3 py-2 rounded-full text-base font-medium transition duration-300 w-full text-center ${
                  currentRoute === link.href
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                }`}>
                {link.label}
               </a>
            ))}
            <a href="#/contact" onClick={(e) => handleMobileNav(e, '#/contact')} className="mt-2 w-full text-center bg-blue-600 text-white font-bold py-2 px-5 rounded-full hover:bg-blue-700 transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
const Header: React.FC<HeaderProps> = ({ currentRoute }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { href: '#/', label: 'Home' },
    { href: '#/about', label: 'About' },
    { href: '#/features', label: 'Features' },
    { href: '#/services', label: 'Services' },
    { href: '#/models', label: 'Models' },
    { href: '#/products', label: 'Products' },
  ];
  
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.location.hash = path;
  };

  const handleMobileNav = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    window.location.hash = path;
    setIsOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-slate-200">
      <nav className="container mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <a href="#/" onClick={(e) => handleNav(e, '#/')} className="text-2xl font-bold text-slate-900 flex items-center flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          OptiWatt IoT
        </a>

        {/* Centered Navigation Links for Desktop */}
        <div className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={(e) => handleNav(e, link.href)}
              className={`font-semibold transition-all duration-300 py-3 px-5 rounded-full text-lg ${
                currentRoute === link.href
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right-side elements */}
        <div>
          {/* Contact Us Button - Desktop */}
          <div className="hidden lg:flex items-center">
            <a href="#/contact" onClick={(e) => handleNav(e, '#/contact')} className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 text-lg">
              Contact Us
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 focus:outline-none" aria-label="Toggle menu">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map((link) => (
               <a key={link.href} href={link.href} onClick={(e) => handleMobileNav(e, link.href)} 
                className={`block px-3 py-2 rounded-full text-base font-medium transition duration-300 w-full text-center ${
                  currentRoute === link.href
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-blue-50'
                }`}>
                {link.label}
               </a>
            ))}
            <a href="#/contact" onClick={(e) => handleMobileNav(e, '#/contact')} className="mt-2 w-full text-center bg-blue-600 text-white font-bold py-2 px-5 rounded-full hover:bg-blue-700 transition duration-300">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
