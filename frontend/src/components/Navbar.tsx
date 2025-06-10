// src/components/Navbar.tsx
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-[#2E2E2E] dark:bg-[#F4F4F4] text-[#FFFFFF] dark:text-[#2E2E2E] p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight">
          <Link to="/" className="hover:text-[#44B0E2] transition">
            JotThoughts
          </Link>
        </div>

        {/* Links, Hamburger, and Auth Buttons Container */}
        <div className="flex items-center space-x-10">
          {/* Navigation Links - Hidden on mobile */}
          <ul className="hidden md:flex space-x-10">
            <li>
              <Link to="/" className="hover:text-[#44B0E2] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#44B0E2] transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-[#44B0E2] transition">
                Blog
              </Link>
            </li>
          </ul>

          {/* Auth Buttons - Hidden on mobile */}
          <div className="hidden md:flex space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 bg-[#FFFFFF] text-[#2E2E2E] dark:text-[#2E2E2E] rounded-md hover:bg-[#b2cae2] transition active:scale-95"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 bg-[#44B0E2] text-[#FFFFFF] rounded-md hover:bg-[#3A9CCF] transition active:scale-95"
            >
              Signup
            </Link>
          </div>

          {/* Hamburger Menu Button (Visible on mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-xl focus:outline-none"
            title="Toggle Menu"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Visible when toggled */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2E2E2E] dark:bg-[#F4F4F4] p-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link
                to="/"
                className="hover:text-[#44B0E2] transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-[#44B0E2] transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:text-[#44B0E2] transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
            
            {/* Auth Buttons in Mobile Menu - On the same line */}
            <li className="flex justify-center space-x-4">
              <Link
                to="/login"
                className="w-24 px-4 py-2 bg-[#FFFFFF] text-[#2E2E2E] dark:text-[#2E2E2E] rounded-md hover:bg-[#b2cae2] transition active:scale-95 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="w-24 px-4 py-2 bg-[#44B0E2] text-[#FFFFFF] rounded-md hover:bg-[#3A9CCF] transition active:scale-95 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;