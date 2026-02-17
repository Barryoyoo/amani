import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-burgundy-900 text-gold-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-gold-100 mb-4">Amani Temptress Spa</h3>
            <p className="text-burgundy-200 mb-6 leading-relaxed text-sm">
              An intimate sanctuary in Kilimani where desire meets indulgence. Discretion assured.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gold-500 hover:text-gold-400 transition-colors text-lg hover:scale-110 duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-gold-500 hover:text-gold-400 transition-colors text-lg hover:scale-110 duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-gold-500 hover:text-gold-400 transition-colors text-lg hover:scale-110 duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-gold-500 hover:text-gold-400 transition-colors text-lg hover:scale-110 duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold text-gold-100 mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-burgundy-200 hover:text-gold-400 transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-burgundy-200 hover:text-gold-400 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-burgundy-200 hover:text-gold-400 transition-colors text-sm">Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-bold text-gold-100 mb-6">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-burgundy-200 flex items-start gap-3">
                <span className="text-gold-500 text-lg flex-shrink-0">📍</span>
                <a href="https://maps.google.com/?q=Kindaruma+Rd,+Nairobi" target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">Kindaruma Rd, Nairobi, Kenya</a>
              </li>
              <li className="text-burgundy-200 flex items-start gap-3">
                <span className="text-gold-500 text-lg flex-shrink-0">📞</span>
                <a href="tel:+254710574902" className="hover:text-gold-400 transition-colors">+254 710 574 902</a>
              </li>
              <li className="text-burgundy-200 flex items-start gap-3">
                <span className="text-gold-500 text-lg flex-shrink-0">✉️</span>
                <a href="mailto:amanitemptressspa@gmail.com" className="hover:text-gold-400 transition-colors break-all">amanitemptressspa@gmail.com</a>
              </li>
              <li className="text-burgundy-200 flex items-start gap-3">
                <span className="text-gold-500 text-lg flex-shrink-0">🕐</span>
                <span>Open Daily</span>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-lg font-serif font-bold text-gold-100 mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-burgundy-200 hover:text-gold-400 transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-burgundy-200 hover:text-gold-400 transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-burgundy-200 hover:text-gold-400 transition-colors text-sm">Cancellation Policy</a></li>
              <li><a href="#" className="text-burgundy-200 hover:text-gold-400 transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold-700 pt-8">
          <p className="text-burgundy-300 text-sm text-center">
            &copy; {currentYear} Amani Temptress Spa. All rights reserved.
          </p>
          <p className="text-burgundy-300 text-sm text-center">Site developed by <a href="tel:+254710574902" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:text-gold-400 transition-colors">Barrack Oyoo</a></p>
        </div>
      </div>
    </footer>
  )
}
