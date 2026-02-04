import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FaSpa, FaHeartbeat, FaUsers, FaAward } from 'react-icons/fa'
import { servicesData } from '../utils/servicesData'

export default function Home() {
  const featuredServices = servicesData.slice(0, 3)
  return (
    <>
      <Helmet>
        <title>Amani Temptress Spa | Best Massage & Luxury Spa in Kilimani, Nairobi</title>
        <meta name="description" content="Relax at Amani Temptress Spa in Kilimani, Nairobi. Expert massage, facials, aromatherapy & wellness treatments designed for stress relief, rejuvenation, and pure luxury" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center flex items-center justify-center" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(92, 91, 91, 0.4), rgba(26, 26, 26, 0.4)), url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1920&h=1080&fit=crop')`
      }}>
        <div className="text-center text-white z-10" data-aos="fade-up">
          <h1 className="text-white text-5xl md:text-7xl font-serif font-bold mb-6">
            Luxury Massage Spa in Kilimani, Nairobi - Amani Temptress
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-bold text-gray-100">
            At Amani Temptress Spa in Kilimani, Nairobi, we specialize in premium massage therapies, facials, and holistic wellness treatments. Our expert therapists help you relieve stress, ease muscle tension, and rejuvenate your body and mind.
          </p>
          <Link 
            to="/booking"
            className="px-8 py-3 bg-gold-700 text-white rounded-lg hover:bg-gold-800 transition-all duration-300 font-semibold inline-block"
          >
            Book Your Experience
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-dark-900 mb-6 text-center">Why Choose Armani Luxe</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-center">
            Experience excellence in luxury wellness and personalized care
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: <FaSpa className="text-4xl text-gold-700" />, title: 'Premium Services', desc: 'Exclusive treatments using luxury products' },
              { icon: <FaHeartbeat className="text-4xl text-gold-700" />, title: 'Wellness Focus', desc: 'Holistic approach to health and relaxation' },
              { icon: <FaUsers className="text-4xl text-gold-700" />, title: 'Expert Therapists', desc: 'Highly trained and certified professionals' },
              { icon: <FaAward className="text-4xl text-gold-700" />, title: 'Award Winning', desc: 'Recognized for excellence in service' },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="text-center p-8 rounded-lg bg-white shadow-lg hover:shadow-xl"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-3 text-dark-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Featured Services */}
      <section className="py-20 bg-gray-50 text-dark-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-dark-900 mb-6 text-center">Our Featured Services</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto text-center">
            Curated experiences for your ultimate relaxation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredServices.map((service, idx) => (
              <div 
                key={idx}
                className="rounded-xl overflow-hidden group cursor-pointer bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
                data-aos="fade-up"
              >
                <div className="relative h-72 overflow-hidden bg-gray-200">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2 text-dark-900">{service.name}</h3>
                  <p className="text-gold-700 mb-2 font-semibold text-lg">Ksh {service.price}</p>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                  <Link to="/services" className="text-gold-700 hover:text-gold-800 font-semibold flex items-center gap-2">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="px-8 py-3 border-2 border-gold-700 text-gold-700 rounded-lg hover:bg-gold-700 hover:text-white transition-all duration-300 font-semibold inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Placeholder for removed expert section */}
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-dark-900 mb-6 text-center">What Our Clients Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { name: 'Sarah Kariuki', text: 'Absolutely heavenly experience. The therapists are incredibly skilled and the ambiance is pure luxury.' },
              { name: 'James Omondi', text: 'Best massage I\'ve ever had. Will definitely be coming back. Highly recommended!' },
              { name: 'Emily Watson', text: 'The attention to detail is amazing. Every aspect of my visit was perfect from start to finish.' },
            ].map((testimonial, idx) => (
              <div 
                key={idx}
                className="bg-white p-8 rounded-lg shadow-lg"
                data-aos="fade-up"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-gold-700">★</span>)}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-dark-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Treat Yourself?
          </h2>
          <p className="text-xl mb-8">
            Book your appointment now and experience the ultimate in luxury wellness
          </p>
          <Link 
            to="/booking"
            className="px-8 py-3 bg-dark-900 text-white rounded-lg hover:bg-dark-800 transition-all duration-300 font-semibold inline-block"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  )
}