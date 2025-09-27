import React, { useState } from 'react';
import { FiMenu, FiX, FiPhoneCall } from 'react-icons/fi';
import logo from '../../assets/images/lekkiikoyi_logo.png'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'LISTING', href: '/listings' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
    { name: 'INQUIRY FORM', href: 'inquiry' },
    { name: 'FAQ', href: 'faq' },
  ];

  return (
    <>
      <header className="bg-white text-black py-4 px-8 sm:py-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-15 w-auto sm:h-20" // smaller logo on mobile
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:underline underline-offset-4 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact (Desktop only) */}
          <div className="hidden lg:flex items-center space-x-2 text-sm font-medium">
            <FiPhoneCall className="text-lg" />
            <span>+2348130082248</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-black text-2xl z-50"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Divider */}
      <hr className="border-t border-gray-200" />

      {/* Mobile Fullscreen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white text-black z-40 flex flex-col p-4">
          <div className="flex flex-col space-y-3 mt-6 text-base font-medium uppercase tracking-wide sm:space-y-4 sm:text-lg">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                <a
                  href={link.href}
                  className="hover:underline underline-offset-4 transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
                <hr className="border-t border-[#ff0000]" />
              </React.Fragment>
            ))}
            <div className="flex items-center space-x-2 mt-4 sm:mt-6 text-sm sm:text-base">
              <FiPhoneCall className="text-lg" />
              <span>+2348130082248</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
