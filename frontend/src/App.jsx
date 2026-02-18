import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Components
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import NotFound from './pages/NotFound'

import './index.css'

function StickyCTA() {
  const location = useLocation()
  if (location.pathname === '/booking') return null
  return (
    <Link
      to="/booking"
      className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full bg-gold-600 text-burgundy-900 font-semibold shadow-lg hover:bg-gold-500 transition-all duration-300 gold-glow gold-shimmer"
    >
      Book Now
    </Link>
  )
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    })
  }, [])

  return (
    <ThemeProvider>
      <HelmetProvider>
        <Router>
          <div className="app-container">
            <Navigation />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <StickyCTA />
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  )
}
