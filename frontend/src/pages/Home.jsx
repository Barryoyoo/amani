import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { FaSpa, FaHeartbeat, FaUsers, FaAward, FaArrowRight } from 'react-icons/fa'

export default function Home() {
  const heroVideoSources = [
    import.meta.env.VITE_HERO_VIDEO_URL,
    'https://www.pexels.com/download/video/6929265/'
  ].filter(Boolean)
  return (
    <>
      <Helmet>
        <title>Amani Temptress Spa | Nairobi's Luxury Sanctuary</title>
        <meta name="description" content="Premium massage and spa services in Kilimani, Nairobi. Experience ultimate relaxation with our expert therapists. Book your escape today." />
      </Helmet>

      {/* Premium Hero Section */}
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
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="text-center text-gold-100 z-10 px-6" data-aos="fade-up">
          <h1 className="text-gold-100 text-6xl md:text-7xl font-serif font-bold mb-6 drop-shadow-lg">
            Amani Temptress Spa
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light text-burgundy-50">
            Nairobi's Premier Luxury Spa & Wellness Sanctuary
          </p>
          <Link 
            to="/services"
            className="inline-flex items-center gap-3 px-10 py-4 bg-gold-600 text-burgundy-900 rounded-lg hover:bg-gold-500 hover:shadow-2xl transition-all duration-300 font-semibold text-lg gold-shimmer"
          >
            Explore Services <FaArrowRight />
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-gradient-to-b from-gold-50 to-gold-100">
        <div className="max-w-5xl mx-auto px-6 text-center" data-aos="fade-up">
          <h2 className="text-5xl md:text-5xl font-serif font-bold text-burgundy-900 mb-8">
            Where Luxury Meets Wellness
          </h2>
          <p className="text-xl text-burgundy-700 max-w-3xl mx-auto leading-relaxed mb-6">
            Located in the heart of Kilimani, Amani Temptress Spa offers an exquisite collection of therapeutic and sensual massage treatments. Our expert therapists are trained in traditional and modern techniques designed to rejuvenate your body, calm your mind, and elevate your spirit.
          </p>
          <p className="text-lg text-burgundy-600">
            Discretion • Expertise • Luxury
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
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

      {/* Services Preview */}
      <section className="py-24 bg-burgundy-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-burgundy-900 mb-4 text-center">Our Services</h2>
          <p className="text-lg text-burgundy-600 mb-16 max-w-2xl mx-auto text-center">Discover our carefully curated selection of treatments</p>

          <div className="bg-gold-50 rounded-2xl p-12 border-2 border-gold-300 shadow-lg" data-aos="fade-up">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-serif font-bold text-burgundy-900 mb-6">Premium Massage Therapies</h3>
                <p className="text-burgundy-700 mb-6 text-lg leading-relaxed">
                  From traditional Swedish massage to exotic sensual treatments, we offer 8 signature services tailored to your wellness needs.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center gap-3 text-burgundy-700">
                    <span className="text-gold-700 font-bold text-xl">✓</span>
                    <span>Swedish & Deep Tissue Massage</span>
                  </li>
                  <li className="flex items-center gap-3 text-burgundy-700">
                    <span className="text-gold-700 font-bold text-xl">✓</span>
                    <span>Thai & Sensual Treatments</span>
                  </li>
                  <li className="flex items-center gap-3 text-burgundy-700">
                    <span className="text-gold-700 font-bold text-xl">✓</span>
                    <span>Four Hands & Couples Massage</span>
                  </li>
                  <li className="flex items-center gap-3 text-burgundy-700">
                    <span className="text-gold-700 font-bold text-xl">✓</span>
                    <span>Holistic & Energy Healing</span>
                  </li>
                </ul>
                <Link 
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-burgundy-900 text-gold-100 rounded-lg hover:bg-burgundy-800 transition-all duration-300 font-semibold"
                >
                  View All Services <FaArrowRight />
                </Link>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=600&fit=crop"
                  alt="Spa Treatment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-gradient-to-r from-burgundy-900 to-burgundy-800">
        <div className="max-w-4xl mx-auto px-6 text-center text-gold-100">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to Indulge?</h2>
          <p className="text-xl mb-8 text-gold-200">Contact us to schedule your perfect wellness experience</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+254710574902"
              className="px-8 py-3 bg-gold-600 text-burgundy-900 rounded-lg hover:bg-gold-500 transition-all duration-300 font-semibold text-lg"
            >
              Call: +254 710 574 902
            </a>
            <a 
              href="mailto:amanitemptressspa@gmail.com"
              className="px-8 py-3 border-2 border-gold-500 text-gold-100 rounded-lg hover:bg-gold-500 hover:text-burgundy-900 transition-all duration-300 font-semibold text-lg"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
