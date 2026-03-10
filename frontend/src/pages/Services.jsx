import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { FaClock, FaPhone, FaEnvelope } from 'react-icons/fa'
import { servicesData } from '../utils/servicesData'

export default function Services() {
  const [expandedService, setExpandedService] = useState(null)
  
  const services = servicesData

  return (
    <>
      <Helmet>
        <title>Services | Amani Temptress Spa — Premium Massage & Wellness</title>
        <meta name="description" content="Discover our luxury massage services in Nairobi. Swedish, Thai, Deep Tissue, Sensual, and specialist treatments by expert therapists." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-100 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-burgundy-600 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Signature Services</h1>
          <p className="text-xl max-w-3xl text-gold-200">
            Expertly crafted treatments designed to restore your body, calm your mind, and elevate your wellness journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx}
                className="group bg-gold-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gold-200 hover:border-gold-400 cursor-pointer"
                onClick={() => setExpandedService(expandedService === idx ? null : idx)}
                data-aos="fade-up"
              >
                <div className="relative overflow-hidden bg-burgundy-100 h-80">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/60 via-burgundy-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-serif font-bold text-burgundy-900 mb-3">{service.name}</h3>
                  
                  <div className="flex items-center justify-between mb-6 pb-6 border-b-2 border-burgundy-200">
                    <div>
                      <p className="text-gold-700 font-bold text-2xl">Ksh {service.price}</p>
                      <p className="text-burgundy-500 text-sm mt-1">From • {service.duration}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-burgundy-600 text-xs font-semibold uppercase tracking-wider">Premium</p>
                    </div>
                  </div>
                  
                  <p className="text-burgundy-700 mb-6 leading-relaxed">{service.description}</p>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-burgundy-900 mb-3 uppercase tracking-wide">What You'll Experience:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-burgundy-700 flex items-center gap-3">
                          <span className="text-gold-700 text-lg font-bold">✦</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking Info */}
                  <div className="bg-burgundy-50 rounded-lg p-4 border border-burgundy-100">
                    <p className="text-sm text-burgundy-600 text-center font-semibold">
                      📞 <a href="tel:+254710574902" className="text-gold-700 hover:underline">+254 710 574 902</a> to Book
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-24 bg-burgundy-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-burgundy-900 mb-8 text-center">Why Choose Our Services</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-gold-600" data-aos="fade-up">
              <h3 className="text-xl font-serif font-bold text-burgundy-900 mb-4">Expert Therapists</h3>
              <p className="text-burgundy-700">Highly trained professionals with years of experience in wellness and therapeutic massage techniques.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-gold-600" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-serif font-bold text-burgundy-900 mb-4">Premium Products</h3>
              <p className="text-burgundy-700">Only the finest massage oils and products used to ensure the best experience for your skin.</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-gold-600" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-serif font-bold text-burgundy-900 mb-4">Customized Sessions</h3>
              <p className="text-burgundy-700">Every treatment is tailored to your specific needs and preferences for maximum wellness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="py-24 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-100">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center">Ready to Book?</h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-burgundy-700/50 rounded-xl p-8 backdrop-blur-sm" data-aos="fade-up">
              <div className="text-4xl mb-4"><FaPhone className="mx-auto text-gold-400" /></div>
              <h3 className="text-xl font-serif font-bold mb-3">Call Us</h3>
              <a href="tel:+254710574902" className="text-gold-300 hover:text-gold-100 transition-colors text-lg font-semibold">
                +254 710 574 902
              </a>
            </div>

            <div className="bg-burgundy-700/50 rounded-xl p-8 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl mb-4"><FaEnvelope className="mx-auto text-gold-400" /></div>
              <h3 className="text-xl font-serif font-bold mb-3">Email Us</h3>
              <a href="mailto:amanitemptressspa@gmail.com" className="text-gold-300 hover:text-gold-100 transition-colors text-lg font-semibold break-all">
                amanitemptressspa@gmail.com
              </a>
            </div>

            <div className="bg-burgundy-700/50 rounded-xl p-8 backdrop-blur-sm" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl mb-4"><FaClock className="mx-auto text-gold-400" /></div>
              <h3 className="text-xl font-serif font-bold mb-3">Hours</h3>
              <p className="text-gold-300 text-lg font-semibold">
                Open Daily<br/>
                <span className="text-sm">00:00 - 23:59</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Treatments */}
      <section className="py-20 bg-gold-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-burgundy-900 mb-4 text-center">Bespoke Desires</h2>
          <p className="text-lg text-burgundy-600 mb-16 max-w-2xl mx-auto text-center leading-relaxed">
            Your fantasy, our canvas. Tell us what you crave—we'll create an experience crafted exclusively for you.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div 
              className="bg-gradient-to-br from-gold-50 to-white rounded-2xl p-8 border border-gold-200 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-6" 
              data-aos="fade-right"
            >
              <div className="text-6xl">✨</div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-bold text-burgundy-900 mb-3">Your Secret Journey</h3>
                <p className="text-burgundy-700 leading-relaxed">
                  Describe your desires. Our therapists will design a private ritual—each touch mapped to your deepest fantasies.
                </p>
              </div>
            </div>
            <div 
              className="bg-gradient-to-br from-burgundy-50 to-white rounded-2xl p-8 border border-burgundy-200 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-6" 
              data-aos="fade-left"
            >
              <div className="text-6xl">💆</div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-bold text-burgundy-900 mb-3">Shared Indulgence</h3>
                <p className="text-burgundy-700 leading-relaxed">
                  Bring someone special. Private couples' sessions, discreet group experiences—whatever your desire, we make it happen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}  

