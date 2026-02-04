import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FaCheck } from 'react-icons/fa'

export default function Packages() {
  const packages = [
    {
      name: 'Relaxation Escape',
      price: '8,500',
      duration: '2 hours',
      color: 'bg-gold-100',
      services: ['Swedish Massage (60 min)', 'Facial Treatment (30 min)', 'Refreshments']
    },
    {
      name: 'Royal Indulgence',
      price: '15,000',
      duration: '3.5 hours',
      color: 'bg-gold-100',
      isPopular: true,
      services: ['Hot Stone Massage (75 min)', 'Facial Treatment (60 min)', 'Body Wrap (45 min)', 'Light Lunch', 'Spa Robe & Amenities']
    },
    {
      name: 'Couple\'s Retreat',
      price: '20,000',
      duration: '3 hours',
      color: 'bg-gold-100',
      services: ['Swedish Massage (60 min)', 'Couple Spa Package', 'Aromatherapy Bath', 'Spa Meal for Two']
    },
    {
      name: 'Complete Wellness',
      price: '18,500',
      duration: '4 hours',
      color: 'bg-gold-100',
      services: ['Deep Tissue Massage (75 min)', 'Facial Treatment (60 min)', 'Body Wrap (45 min)', 'Meditation Session', 'Wellness Consultation']
    },
  ]

  return (
    <>
      <Helmet>
        <title>Packages</title>
        <meta name="description" content="Explore our luxury spa packages and exclusive offerings." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Spa Packages</h1>
          <p className="text-xl text-gray-300 max-w-2xl transition-colors duration-300">
            Curated packages designed for ultimate relaxation and rejuvenation.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, idx) => (
              <div 
                key={idx}
                className={`rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all ${pkg.color} dark:bg-dark-700 dark:shadow-lg ${pkg.isPopular ? 'border-4 border-gold-700 transform md:scale-105' : ''}`}
                data-aos="fade-up"
              >
                {pkg.isPopular && (
                  <div className="bg-gold-700 dark:bg-gold-600 text-white dark:text-dark-900 px-4 py-2 rounded-full inline-block mb-4 text-sm font-bold transition-colors duration-300">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-3xl font-serif font-bold text-dark-900 dark:text-white mb-2 transition-colors duration-300">{pkg.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">Duration: {pkg.duration}</p>
                <div className="text-4xl font-bold text-gold-700 dark:text-gold-600 mb-6 transition-colors duration-300">Ksh {pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.services.map((service, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      <FaCheck className="text-gold-700 dark:text-gold-600" /> {service}
                    </li>
                  ))}
                </ul>
                <button className="px-8 py-3 bg-burgundy-900 text-white rounded-lg hover:bg-burgundy-800 transition-all duration-300 font-semibold w-full">Book Package</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate & Group */}
      <section className="py-20 bg-white dark:bg-dark-700 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-dark-900 mb-12 text-center">Corporate & Group Packages</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div data-aos="fade-right">
              <h3 className="text-2xl font-serif font-bold text-gold-700 dark:text-gold-600 mb-4 transition-colors duration-300">Team Wellness</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                Strengthen your team bonds while promoting wellness. Our corporate packages include group massages, 
                team meditation sessions, and customized wellness programs.
              </p>
              <button className="px-8 py-3 border-2 border-burgundy-900 text-burgundy-900 rounded-lg hover:bg-burgundy-900 hover:text-white transition-all duration-300 font-semibold">Get Quote</button>
            </div>
            <div data-aos="fade-left">
              <h3 className="text-2xl font-serif font-bold text-gold-700 dark:text-gold-600 mb-4 transition-colors duration-300">Special Occasions</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed transition-colors duration-300">
                Celebrate in style! Perfect for bachelorette parties, celebrations, and special gatherings with 
                discounted group rates and customized spa experiences.
              </p>
              <button className="px-8 py-3 border-2 border-burgundy-900 text-burgundy-900 rounded-lg hover:bg-burgundy-900 hover:text-white transition-all duration-300 font-semibold">Inquire Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}