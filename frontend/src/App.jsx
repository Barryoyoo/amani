import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Components
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

// Pages - 2 Main Pages
import LandingPage from './pages/LandingPage'
import ContactPage from './pages/ContactPage'
import Booking from './pages/Booking'
import Therapists from './pages/Therapists'

import './index.css'

function StickyCTA() {
  const location = useLocation()
  if (location.pathname === '/contact') return null
  return (
    <a
      href="/#contact"
      className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full bg-gold-600 text-burgundy-900 font-semibold shadow-lg hover:bg-gold-500 transition-all duration-300 gold-glow gold-shimmer"
    >
      Contact
    </a>
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
                <Route path="/" element={<LandingPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/therapists" element={<Therapists />} />
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
