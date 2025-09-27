import React, { useState } from 'react';
import { FiMenu, FiX, FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom'; 
import logo from '../../assets/images/lekkiikoyi_logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'LISTING', href: '/listings' },
    { name: 'ABOUT', href: '/about' },
    { name: 'CONTACT', href: '/contact' },
    { name: 'INQUIRY FORM', href: '/inquiry' },
    { name: 'FAQ', href: '/faq' },
  ];

  return (
    <>
      <header className="bg-white/80 text-black py-3 px-8 relative">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo (center on mobile, left on desktop) */}
          <div className="flex-1 lg:flex-none flex justify-center lg:justify-start">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="hover:underline underline-offset-4 transition-all"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact (Desktop Only) */}
          <div className="hidden lg:flex items-center space-x-2 text-sm font-medium">
            <FiPhoneCall className="text-lg" />
            <span>+2348130082248</span>
          </div>

          {/* Mobile Menu Button (always visible, stays on top) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-black text-2xl absolute right-8 z-50"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </header>

      {/* Divider (desktop only for cleaner UI) */}
      <hr className="border-t border-black hidden lg:block" />

      {/* Mobile Fullscreen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white text-black z-40 flex flex-col p-4 animate-slide-down">
          <div className="flex flex-col space-y-4 mt-8 text-lg font-medium uppercase tracking-wide">
            {navLinks.map((link) => (
              <React.Fragment key={link.name}>
                <Link
                  to={link.href}
                  className="hover:underline underline-offset-4 transition-all"
                  onClick={() => setIsMenuOpen(false)} // ✅ close menu without refresh
                >
                  {link.name}
                </Link>
                <hr className="border-t border-[#ff0000]" />
              </React.Fragment>
            ))}
            <div className="flex items-center space-x-2 mt-6">
              <FiPhoneCall className="text-lg" />
              <span>+2348130082248</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
