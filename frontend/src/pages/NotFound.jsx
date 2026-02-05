import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>

      <section className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800 text-white flex items-center justify-center px-6">
        <div className="text-center max-w-2xl" data-aos="fade-up">
          <h1 className="text-9xl font-serif font-bold text-gold-500 mb-4">404</h1>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-300 mb-8">
            We couldn't find the page you're looking for. But don't worry, your spa experience awaits!
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/" className="px-8 py-3 bg-burgundy-900 text-white rounded-lg hover:bg-burgundy-800 transition-all duration-300 font-semibold inline-block">
              Return Home
            </Link>
            <Link to="/services" className="px-8 py-3 border-2 border-gold-500 text-gold-500 rounded-lg hover:bg-gold-700 hover:text-white transition-all duration-300 font-semibold inline-block">
              View Services
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}