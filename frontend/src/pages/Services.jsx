import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { FaClock, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { servicesData } from '../utils/servicesData'

export default function Services() {
  const navigate = useNavigate()
  const services = servicesData

  const handleBookNow = (serviceName) => {
    navigate(`/booking?service=${encodeURIComponent(serviceName)}`)
  }

  return (
    <>
      <Helmet>
        <title>Services | Armani Luxe Spa</title>
        <meta name="description" content="Explore our luxury spa services including massage, facials, and body treatments." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl text-white md:text-6xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            Discover our full range of luxury treatments designed for your complete wellness.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-900 mb-4">Luxury Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully curated selection of premium treatments
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-gold-400 group"
                data-aos="fade-up"
              >
                <div className="relative overflow-hidden bg-gray-200 h-72">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-serif font-bold text-dark-900 mb-3">{service.name}</h3>
                  <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                    <span className="text-gold-700 font-bold text-lg">Ksh {service.price}</span>
                    <span className="text-sm text-gray-500 flex items-center gap-1"><FaClock size={13} /> {service.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.benefits.slice(0, 2).map((benefit, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                        <span className="text-gold-700 font-bold">✓</span> {benefit}
                      </li>
                    ))}
                  </ul>
                  <button 
                    onClick={() => handleBookNow(service.name)}
                    className="px-6 py-3 bg-burgundy-900 text-white rounded-lg hover:bg-burgundy-800 transition-all duration-300 font-semibold w-full shadow-md hover:shadow-lg">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Treatments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-dark-900 mb-4 text-center">Custom Treatments</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto text-center leading-relaxed">
            Can't find what you're looking for? We offer bespoke custom treatments tailored specifically to your individual needs and wellness goals.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div 
              className="bg-gradient-to-br from-gold-50 to-white rounded-2xl p-8 border border-gold-200 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-6" 
              data-aos="fade-right"
            >
              <div className="text-6xl">✨</div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-bold text-dark-900 mb-3">Personalized Wellness Plans</h3>
                <p className="text-gray-700 leading-relaxed">
                  Let our expert therapists create a customized wellness plan that addresses your specific needs, concerns, and wellness goals for lasting results.
                </p>
              </div>
            </div>
            <div 
              className="bg-gradient-to-br from-burgundy-50 to-white rounded-2xl p-8 border border-burgundy-200 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-6" 
              data-aos="fade-left"
            >
              <div className="text-6xl">💆</div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-bold text-dark-900 mb-3">Couple & Group Packages</h3>
                <p className="text-gray-700 leading-relaxed">
                  Perfect for celebrations, team building, or quality time with loved ones. We offer special group rates and exclusive package deals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
