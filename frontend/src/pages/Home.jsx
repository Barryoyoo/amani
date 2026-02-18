import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FaSpa, FaHeartbeat, FaUsers, FaAward } from 'react-icons/fa'
import { servicesData } from '../utils/servicesData'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Home() {
  const featuredServices = servicesData.slice(0, 3)
  const heroVideoSources = [
    import.meta.env.VITE_HERO_VIDEO_URL,
    'https://www.pexels.com/download/video/6929265/'
  ].filter(Boolean)
  return (
    <>
      <Helmet>
        <title>Amani Temptress Spa | Indulge Your Senses — Kilimani, Nairobi</title>
        <meta name="description" content="Escape to Amani Temptress Spa. Where desire meets indulgence. Intimate massage, sensual treatments & forbidden pleasures await in the heart of Kilimani, Nairobi." />
      </Helmet>

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          {heroVideoSources.map((src, i) => (
            <source key={i} src={src} type="video/mp4" />
          ))}
        </video>
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="text-center text-gold-100 z-10 px-6" data-aos="fade-up">
          <h1 className="text-gold-100 text-5xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg">
            Surrender to Your Desires
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-bold text-burgundy-100">
            An intimate sanctuary in Kilimani where pleasure awakens. Let our hands take you somewhere you've never been. Escape the ordinary. Indulge the forbidden.
          </p>
          <Link 
            to="/booking"
            className="px-8 py-3 bg-burgundy-900 text-gold-100 rounded-lg hover:bg-burgundy-900 hover:shadow-xl hover:shadow-burgundy-500/40 transition-all duration-300 font-semibold inline-block"
          >
            Claim Your Escape
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gold-50 to-burgundy-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-burgundy-900">A Glimpse Into Temptation</h2>
            <p className="text-burgundy-600 mt-3">Atmosphere curated to awaken every sense</p>
          </div>
          <Slider
            dots
            autoplay
            autoplaySpeed={3500}
            infinite
            speed={600}
            slidesToShow={1}
            slidesToScroll={1}
            arrows={false}
          >
            {[
              'https://images.pexels.com/photos/3997995/pexels-photo-3997995.jpeg',
              'https://images.pexels.com/photos/3997980/pexels-photo-3997980.jpeg',
              'https://images.pexels.com/photos/6187656/pexels-photo-6187656.jpeg',
              'https://images.pexels.com/photos/2660262/pexels-photo-2660262.jpeg'
            ].map((src, i) => (
              <div key={i}>
                <div className="relative h-[28rem] md:h-[44rem] rounded-2xl overflow-hidden shadow-xl border border-gold-200">
                  <img src={src} alt="Amani Temptress Spa" className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/50 via-burgundy-700/20 to-transparent"></div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gold-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-burgundy-900 mb-6 text-center">Why We Tempt You</h2>
          <p className="text-lg text-burgundy-600 mb-8 max-w-2xl mx-auto text-center">
            Where discretion meets desire. Every touch designed to awaken.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
            {[
              { icon: <FaSpa className="text-4xl text-gold-700" />, title: 'Intimate Expertise', desc: 'Hands that know exactly what you crave' },
              { icon: <FaHeartbeat className="text-4xl text-gold-700" />, title: 'Sensual Mastery', desc: 'Every stroke designed for pure pleasure' },
              { icon: <FaUsers className="text-4xl text-gold-700" />, title: 'Beguiling Therapists', desc: 'Skilled in the art of indulgence' },
              { icon: <FaAward className="text-4xl text-gold-700" />, title: 'Forbidden Luxury', desc: 'Experiences you will not find anywhere else' },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="text-center p-8 rounded-lg bg-burgundy-50/80 shadow-lg hover:shadow-xl border border-gold-200/50 hover:border-gold-400 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-3 text-burgundy-900">{item.title}</h3>
                <p className="text-burgundy-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Featured Services */}
      <section className="py-20 bg-burgundy-50 text-burgundy-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-burgundy-900 mb-6 text-center">Indulge Your Fantasies</h2>
          <p className="text-lg text-burgundy-600 mb-8 max-w-2xl mx-auto text-center">
            Handpicked experiences that will leave you breathless
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {featuredServices.map((service, idx) => (
              <div 
                key={idx}
                className="rounded-xl overflow-hidden group cursor-pointer bg-gold-50 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gold-200/50"
                data-aos="fade-up"
              >
                <div className="relative h-72 overflow-hidden bg-burgundy-100">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2 text-burgundy-900">{service.name}</h3>
                  <p className="text-gold-700 mb-2 font-semibold text-lg">Ksh {service.price}</p>
                  <p className="text-burgundy-600 text-sm mb-4 line-clamp-2">{service.description}</p>
                  <Link to="/services" className="text-gold-700 hover:text-gold-800 font-semibold flex items-center gap-2">
                    Discover More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="px-8 py-3 border-2 border-gold-700 text-gold-700 rounded-lg hover:bg-gold-700 hover:text-burgundy-900 transition-all duration-300 font-semibold inline-block gold-glow">
              Explore All Pleasures
            </Link>
          </div>
        </div>
      </section>

      {/* Placeholder for removed expert section */}
      {/* Testimonials */}
      <section className="py-20 bg-gold-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-burgundy-900 mb-6 text-center">They Surrendered. So Can You.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { name: 'Sarah K.', text: 'I left in a daze. What happened in that room... Ive never felt so utterly alive. I will be back. Soon.' },
              { name: 'James O.', text: 'Forbidden in the best way. The therapists know exactly how to make you forget the world outside.' },
              { name: 'Emily W.', text: 'Every touch was intentional. Every moment, exquisite. I crave it already.' },
            ].map((testimonial, idx) => (
              <div 
                key={idx}
                className="bg-burgundy-50 p-8 rounded-lg shadow-lg border border-burgundy-100/50"
                data-aos="fade-up"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-gold-700">★</span>)}
                </div>
                <p className="text-burgundy-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-burgundy-900">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-burgundy-300 via-burgundy-400 to-burgundy-600 text-gold-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Your Desire Awaits
          </h2>
          <p className="text-xl mb-8 text-gold-200">
            Don't resist. Surrender. Book now and discover what you've been craving.
          </p>
          <Link 
            to="/booking"
            className="px-8 py-3 bg-gold-600 text-burgundy-900 rounded-lg hover:bg-gold-500 hover:shadow-lg transition-all duration-300 font-semibold inline-block"
          >
            Indulge Now
          </Link>
        </div>
      </section>
    </>
  )
}
