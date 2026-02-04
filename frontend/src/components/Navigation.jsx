import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FiMenu, FiX, FiPhone, FiMail } from 'react-icons/fi'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-burgundy-900 text-white py-3 px-6 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:+254710574902" className="flex items-center gap-2 hover:text-gold-500">
              <FiPhone size={16} /> +254 710 574 902
            </a>
            <a href="mailto:amanitempreessspa@gmail.com" className="flex items-center gap-2 hover:text-gold-500">
              <FiMail size={16} /> amanitempreessspa@gmail.com
            </a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gold-500"><FaInstagram /></a>
            <a href="#" className="hover:text-gold-500"><FaFacebook /></a>
            <a href="#" className="hover:text-gold-500"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="sticky top-0 z-40 bg-white shadow-md border-b-2 border-burgundy-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-3xl font-serif font-bold text-burgundy-900 tracking-wide letter-spacing-1 hover:text-gold-700 transition-colors duration-300" style={{ letterSpacing: '0.05em' }}>
            Amani Temptress Spa
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-dark-900 hover:text-burgundy-900 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex gap-4 items-center">
            <Link
              to="/booking"
              className="px-8 py-3 bg-burgundy-900 text-white rounded-lg hover:bg-burgundy-800 transition-all duration-300 font-semibold"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex gap-4 items-center">
            <button
              className="text-dark-900 text-2xl"
              onClick={toggleMenu}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white px-6 py-4 border-t-2 border-burgundy-500">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-dark-900 hover:text-burgundy-900 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/booking"
                className="px-8 py-3 bg-burgundy-900 text-white rounded-lg hover:bg-burgundy-800 transition-all duration-300 font-semibold text-center"
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
