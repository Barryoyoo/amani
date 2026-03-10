import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FaSpa, FaHeartbeat, FaUsers, FaAward, FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLeaf, FaWater } from 'react-icons/fa'
import { servicesData } from '../utils/servicesData'

export default function LandingPage() {
  const navigate = useNavigate()

  const handleBooking = (serviceName) => {
    navigate(`/booking?service=${encodeURIComponent(serviceName)}`)
  }

  return (
    <>
      <Helmet>
        <title>Amani Temptress Spa | Luxury Wellness in Kilimani, Nairobi</title>
        <meta name="description" content="Nairobi's most exclusive spa sanctuary. Premium massage treatments, discrete luxury wellness, expert therapists. Book your private escape today." />
      </Helmet>

      {/* ========== HERO SECTION - Premium Video Background ========== */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" id="home">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-burgundy-900/20 to-black/30 z-10"></div>
          <video
            className="w-full h-full object-cover"
            src="https://videos.pexels.com/video-files/856190/856190-hd_1280_720_30fps.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        
        {/* Hero Content */}
        <div className="text-center text-white z-20 px-6 max-w-4xl" data-aos="fade-up">
          <div className="mb-6">
            <p className="text-gold-400 text-lg tracking-[3px] uppercase font-light">Welcome to Paradise</p>
          </div>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 drop-shadow-2xl">
            Amani <span className="text-gold-400">Temptress</span> Spa
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light text-gray-100 leading-relaxed">
            Nairobi's Most Exclusive Luxury Spa & Wellness Sanctuary
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="#services"
              className="px-10 py-4 bg-gold-600 text-burgundy-900 rounded-lg hover:bg-gold-500 hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
            >
              Explore Services
            </a>
            <Link 
              to="/contact"
              className="px-10 py-4 border-2 border-gold-400 text-gold-400 rounded-lg hover:bg-gold-400 hover:text-burgundy-900 transition-all duration-300 font-semibold text-lg"
            >
              Book Now
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* ========== WELCOME / ABOUT SECTION ========== */}
      <section className="py-32 bg-gradient-to-b from-white to-gold-50 dark:from-dark-900 dark:to-dark-800 dark:text-cream" id="about">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20" data-aos="fade-up">
            <div className="inline-block mb-6">
              <p className="text-gold-600 text-lg tracking-widest uppercase font-light">~ Welcome ~</p>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-burgundy-900 mb-6">
              Where Luxury Meets Wellness
            </h2>
            <p className="text-xl text-burgundy-700 max-w-3xl mx-auto leading-relaxed font-light">
              Amani Temptress Spa is Kilimani's most exclusive wellness sanctuary, offering bespoke luxury treatments designed for the discerning client.
            </p>
          </div>

          {/* About Grid */}
          <div className="grid md:grid-cols-2 gap-16 items-center" data-aos="fade-up">
            <div>
              <p className="text-gold-600 text-sm tracking-widest uppercase mb-4 font-semibold">Our Philosophy</p>
              <h3 className="text-4xl font-serif font-bold text-burgundy-900 mb-6">Your Private Escape</h3>
              <p className="text-burgundy-700 mb-6 text-lg leading-relaxed font-light">
                Nestled in the heart of Kilimani, we've created an exclusive sanctuary where your deepest desires are honored and your privacy is sacred. Every visit is a personalized journey.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <span className="text-gold-600 text-2xl mt-1">✦</span>
                  <div>
                    <h4 className="font-serif font-bold text-burgundy-900 mb-1">Complete Discretion</h4>
                    <p className="text-burgundy-600 text-sm">Your privacy is our highest priority. Confidential bookings, discreet service.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-gold-600 text-2xl mt-1">✦</span>
                  <div>
                    <h4 className="font-serif font-bold text-burgundy-900 mb-1">Expert Therapists</h4>
                    <p className="text-burgundy-600 text-sm">Professionally trained practitioners with years of experience in luxury wellness.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-gold-600 text-2xl mt-1">✦</span>
                  <div>
                    <h4 className="font-serif font-bold text-burgundy-900 mb-1">Premium Experience</h4>
                    <p className="text-burgundy-600 text-sm">Luxury amenities, finest products, and impeccable service throughout.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-gold-600 text-2xl mt-1">✦</span>
                  <div>
                    <h4 className="font-serif font-bold text-burgundy-900 mb-1">Personalized Service</h4>
                    <p className="text-burgundy-600 text-sm">Every treatment is customized to your exact preferences and desires.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1607330289024-1535d7fc407b?w=500&h=600&fit=crop"
                  alt="Luxury Spa Interior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-600 text-white rounded-2xl p-8 shadow-xl max-w-xs">
                <p className="text-sm uppercase tracking-widest font-semibold mb-2">Since 2018</p>
                <p className="font-serif text-2xl font-bold">Nairobi's Premier Wellness Destination</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="py-24 bg-white dark:bg-dark-900 dark:text-cream">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-burgundy-900 mb-4 text-center">Why Choose Amani</h2>
          <p className="text-lg text-burgundy-600 mb-16 max-w-2xl mx-auto text-center">Experience the difference of premium wellness</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaSpa className="text-4xl text-gold-700" />, title: 'Expert Therapists', desc: 'Highly trained professionals' },
              { icon: <FaHeartbeat className="text-4xl text-gold-700" />, title: 'Wellness Focused', desc: 'Holistic approach to health' },
              { icon: <FaAward className="text-4xl text-gold-700" />, title: 'Premium Quality', desc: 'Finest oils and products' },
              { icon: <FaUsers className="text-4xl text-gold-700" />, title: 'Discretion First', desc: 'Your privacy matters most' },
            ].map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-lg bg-gold-50 shadow-md hover:shadow-lg border border-gold-200 transition-all duration-300 text-center"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-2 text-burgundy-900">{item.title}</h3>
                <p className="text-burgundy-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section className="py-32 bg-burgundy-50 dark:bg-dark-800 dark:text-cream" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-gold-600 text-sm uppercase tracking-widest font-semibold mb-4">~ Our Treatments ~</p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-burgundy-900 mb-6">
              Signature Wellness Experiences
            </h2>
            <p className="text-xl text-burgundy-600 max-w-2xl mx-auto font-light">
              Every treatment is a journey. From therapeutic classics to sensual indulgences, discover your perfect escape.
            </p>
          </div>

          {/* Featured Treatments Spotlight */}
          <div className="grid md:grid-cols-2 gap-8 mb-16" data-aos="fade-up">
            <div className="bg-white dark:bg-dark-900 rounded-2xl overflow-hidden shadow-xl border-l-4 border-gold-600">
              <div className="h-64 bg-gradient-to-br from-burgundy-900 to-burgundy-700 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544161515-81e9bcd3c5d0?w=500&h=300&fit=crop"
                  alt="Hot Stone Massage"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900 via-transparent"></div>
              </div>
              <div className="p-8">
                <p className="text-gold-600 text-xs uppercase tracking-widest font-bold mb-2">Most Popular</p>
                <h3 className="text-3xl font-serif font-bold text-burgundy-900 dark:text-cream mb-3">Hot Stone Massage</h3>
                <p className="text-burgundy-600 dark:text-cream/80 mb-4 leading-relaxed">Experience ancient healing traditions with smooth, heated stones that melt away tension and restore balance to your body and soul.</p>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gold-700 font-bold text-2xl">Ksh 5,000</span>
                  <span className="text-burgundy-600 text-sm">60 mins</span>
                </div>
                <button
                  onClick={() => handleBooking('Hot Stone Massage')}
                  className="w-full px-4 py-2 bg-gold-600 text-burgundy-900 rounded-lg hover:bg-gold-500 transition-all duration-300 font-semibold"
                >
                  Book Now
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-900 rounded-2xl overflow-hidden shadow-xl border-l-4 border-gold-600">
              <div className="h-64 bg-gradient-to-br from-gold-700 to-gold-600 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1599220436620-f5f6e6aa5e88?w=500&h=300&fit=crop"
                  alt="Couples Massage"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gold-900 via-transparent"></div>
              </div>
              <div className="p-8">
                <p className="text-gold-600 text-xs uppercase tracking-widest font-bold mb-2">For Two</p>
                <h3 className="text-3xl font-serif font-bold text-burgundy-900 dark:text-cream mb-3">Couples Indulgence</h3>
                <p className="text-burgundy-600 dark:text-cream/80 mb-4 leading-relaxed">Share an unforgettable experience with someone special. Synchronized treatments in our private couples' sanctuary designed for ultimate connection.</p>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gold-700 font-bold text-2xl">Ksh 8,500</span>
                  <span className="text-burgundy-600 text-sm">90 mins</span>
                </div>
                <button
                  onClick={() => handleBooking('Four Hands Massage')}
                  className="w-full px-4 py-2 bg-gold-600 text-burgundy-900 rounded-lg hover:bg-gold-500 transition-all duration-300 font-semibold"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          {/* All Services Grid */}
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-bold text-burgundy-900 mb-8 text-center">Complete Service Menu</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {servicesData.map((service, idx) => (
              <div 
                key={idx}
                className="group bg-gold-50 dark:bg-dark-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gold-200 dark:border-dark-700 hover:border-gold-400"
                data-aos="fade-up"
              >
                <div className="relative overflow-hidden bg-burgundy-100 dark:bg-dark-700 h-72">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/60 via-burgundy-700/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-burgundy-900 dark:text-cream mb-3">{service.name}</h3>
                  
                  <div className="flex items-center justify-between mb-6 pb-6 border-b-2 border-burgundy-200">
                    <div>
                      <p className="text-gold-700 font-bold text-2xl">Ksh {service.price}</p>
                      <p className="text-burgundy-500 text-sm mt-1">{service.duration}</p>
                    </div>
                  </div>
                  
                  <p className="text-burgundy-700 dark:text-cream/80 mb-6 line-clamp-3">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="text-sm text-burgundy-700 flex items-center gap-2">
                        <span className="text-gold-700 font-bold">✦</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleBooking(service.name)}
                    className="w-full px-4 py-2 bg-gold-600 text-burgundy-900 rounded-lg hover:bg-gold-500 transition-all duration-300 font-semibold"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* ========== TEAM SECTION ========== */}
      <section className="py-32 bg-white dark:bg-dark-900 dark:text-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold-600 text-sm uppercase tracking-widest font-semibold mb-4">~ Meet Our Therapists ~</p>
            <h2 className="text-5xl font-serif font-bold text-burgundy-900 mb-6">Your Wellness Experts</h2>
            <p className="text-xl text-burgundy-600 max-w-2xl mx-auto font-light">
              Professionally trained practitioners dedicated to your comfort and satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Layla', role: 'Erotic & Lingam Massage', image: 'https://horizons-cdn.hostinger.com/d7f3bf87-4fbd-4487-acdb-fba6792bc020/zm1-uSu3U.jpg' },
              { name: 'Amara', role: 'Tantra & Sensual Arts', image: 'https://horizons-cdn.hostinger.com/d7f3bf87-4fbd-4487-acdb-fba6792bc020/sms-5SgKW.jpg' },
              { name: 'Zola', role: 'Deep Tissue & Reflexology', image: 'https://horizons-cdn.hostinger.com/d7f3bf87-4fbd-4487-acdb-fba6792bc020/he4-IDbcx.jpg' },
              { name: 'Nia', role: 'Body Wrap Specialist', image: 'https://horizons-cdn.hostinger.com/d7f3bf87-4fbd-4487-acdb-fba6792bc020/he2-2DLkF.jpg' },
              { name: 'Kenna', role: 'Four Hands & Couples', image: 'https://horizons-cdn.hostinger.com/d7f3bf87-4fbd-4487-acdb-fba6792bc020/m4-vee-6aMeP.jpg' },
              { name: 'Sade', role: 'Shiatsu & Thai Massage', image: 'https://horizons-cdn.hostinger.com/d7f3bf87-4fbd-4487-acdb-fba6792bc020/hs8-Fev1x.jpg' },
              { name: 'Imani', role: 'Body to Body Touch', image: 'https://horizons-cdn.hostinger.com/d7f3bf87-4fbd-4487-acdb-fba6792bc020/m1-joy-rqFlX.jpg' },
              { name: 'Asha', role: 'Holistic & Energy', image: 'https://horizons-cdn.hostinger.com/d7f3bf87-4fbd-4487-acdb-fba6792bc020/hs4-SsSvC.jpg' },
            ].map((member, idx) => (
              <div key={idx} className="group bg-gold-50 dark:bg-dark-900 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gold-200 dark:border-dark-700" data-aos="fade-up">
                <div className="relative h-64 overflow-hidden bg-burgundy-100 dark:bg-dark-700">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-serif font-bold text-burgundy-900 dark:text-cream mb-1">{member.name}</h3>
                  <p className="text-burgundy-600 dark:text-cream/80 text-sm font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT SECTION ========== */}
      <section className="py-32 bg-gradient-to-b from-burgundy-50 to-burgundy-100 dark:from-dark-900 dark:to-dark-800 dark:text-cream" id="contact">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold-600 text-sm uppercase tracking-widest font-semibold mb-4">~ Ready for Your Escape? ~</p>
            <h2 className="text-5xl font-serif font-bold text-burgundy-900 mb-6">Book Your Luxury Experience</h2>
            <p className="text-xl text-burgundy-600 font-light">We're just a call or message away. Your private sanctuary awaits.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg border-l-4 border-gold-600 text-center" data-aos="fade-up">
              <div className="text-4xl text-gold-700 mb-4 flex justify-center"><FaPhone /></div>
              <h3 className="text-xl font-serif font-bold text-burgundy-900 mb-3">Call Us</h3>
              <a href="tel:+254710574902" className="text-lg font-semibold text-gold-700 hover:text-gold-800 transition-colors">
                +254 710 574 902
              </a>
            </div>

            <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg border-l-4 border-gold-600 text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="text-4xl text-gold-700 mb-4 flex justify-center"><FaEnvelope /></div>
              <h3 className="text-xl font-serif font-bold text-burgundy-900 mb-3">Email Us</h3>
              <a href="mailto:amanitemptressspa@gmail.com" className="text-lg font-semibold text-gold-700 hover:text-gold-800 transition-colors break-all">
                amanitemptressspa@gmail.com
              </a>
            </div>

            <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg border-l-4 border-gold-600 text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="text-4xl text-gold-700 mb-4 flex justify-center"><FaMapMarkerAlt /></div>
              <h3 className="text-xl font-serif font-bold text-burgundy-900 mb-3">Visit Us</h3>
              <a href="https://maps.google.com/?q=Kindaruma+Rd,+Nairobi" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gold-700 hover:text-gold-800 transition-colors">
                Kindaruma Rd, Nairobi
              </a>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-10 py-4 bg-burgundy-900 text-gold-100 rounded-lg hover:bg-burgundy-800 transition-all duration-300 font-semibold text-lg shadow-lg"
            >
              Send us a Message <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section className="py-32 bg-burgundy-900 text-white relative overflow-hidden dark:bg-dark-900">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-burgundy-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <p className="text-gold-400 text-sm uppercase tracking-widest font-semibold mb-4">~ Voices of Bliss ~</p>
            <h2 className="text-5xl text-gold-200 md:text-6xl font-serif font-bold mb-6">Client Testimonials</h2>
            <p className="text-xl text-gold-100 max-w-2xl mx-auto font-light">What our guests say about their Amani experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah M.',
                quote: 'The most rejuvenating experience of my life. The attention to detail and professional service exceeded all expectations. I\'ve already booked my next visit.',
                rating: 5
              },
              {
                name: 'Michael T.',
                quote: 'A true sanctuary in the heart of Kilimani. The therapists are incredibly skilled, and the entire experience feels like a luxurious escape from the city.',
                rating: 5
              },
              {
                name: 'Jennifer K.',
                quote: 'Discretion, luxury, and genuine care. My partner and I visited for our anniversary and it was absolutely perfect. Highly recommended!',
                rating: 5
              },
            ].map((testimonial, idx) => (
              <div 
                key={idx}
                className="bg-burgundy-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gold-600/30 hover:border-gold-600 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gold-100 text-lg mb-6 italic font-light leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="text-gold-400 font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
