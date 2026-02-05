import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FaLeaf, FaHandsHelping, FaGlobeAmericas } from 'react-icons/fa'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Amani Temptress Spa | Luxury Massage & Wellness in Kilimani, Nairobi </title>
        <meta name="description" content="Discover the story of Amani Temptress Spa in Kilimani, Nairobi. Learn about our mission, vision, expert therapists, and commitment to luxury massage, facials, and holistic wellness." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-white">About Amani Temptress Spa - Luxury Massage & Wellness in Nairobi</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            About Amani Temptress Spa - Luxury Massage & Wellness in Nairobi
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-900 mb-8">Our Story</h2>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Founded in 2019, Amani Temptress Spa set out to redefine luxury wellness in Nairobi. Located in Kilimani, we specialize in premium massage therapies, facials, and holistic treatments designed to restore balance and rejuvenate your body and mind. Over the years, we’ve become one of the most trusted spas in Nairobi, serving thousands of satisfied clients.
              </p>
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Over the years, we've grown to become one of the most trusted luxury spas in Kilimani, serving thousands 
                of satisfied clients who trust us with their wellness journeys.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, our commitment remains unchanged: to provide exceptional, personalized wellness experiences that 
                transform bodies, minds, and spirits.
              </p>
            </div>
            <div data-aos="fade-left">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&h=600&fit=crop"
                alt="Spa Interior"
                className="rounded-xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gold-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-900 text-center mb-12">Our Mission & Vision</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-white dark:bg-dark-600 rounded-lg transition-colors duration-300" data-aos="fade-up">
              <h3 className="text-2xl font-serif font-bold text-dark-900 dark:text-black mb-4 flex items-center gap-3 transition-colors duration-300">
                <FaLeaf className="text-gold-700 dark:text-gold-600 transition-colors duration-300" /> 
                Our Mission - Transformative Luxury Spa Experiences.
              </h3>
              <p className=" dark:text-black leading-relaxed transition-colors duration-300">
                To create transformative wellness experiences through professional, luxurious treatments that restore 
                balance to body, mind, and soul, while maintaining the highest standards of excellence and sustainability.
              </p>
            </div>
            <div className="p-8 bg-white dark:bg-dark-600 rounded-lg transition-colors duration-300" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-serif font-bold text-dark-900 dark:text-gray-900 mb-4 flex items-center gap-3 transition-colors duration-300">
                <FaGlobeAmericas className="text-gold-700 dark:text-gold-600 transition-colors duration-300" /> 
                Our Vision - Leading Luxury Spa.
              </h3>
              <p className="text-black dark:text-black leading-relaxed transition-colors duration-300">
                To be the most beloved luxury spa destination in Nairobi, recognized for exceptional service, 
                innovation in wellness, and our dedication to client satisfaction and well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-900 text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Excellence', desc: 'We deliver the highest quality in everything we do.' },
              { title: 'Integrity', desc: 'We operate with honesty, transparency, and respect.' },
              { title: 'Wellness First', desc: 'Your health and happiness are our top priority.' },
              { title: 'Innovation', desc: 'We continually improve our services and techniques.' },
              { title: 'Luxury', desc: 'We create elegant, premium experiences.' },
              { title: 'Sustainability', desc: 'We care for our community and environment.' },
            ].map((value, idx) => (
              <div key={idx} className="text-center p-8 bg-gradient-to-br from-gold-50 to-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300" data-aos="fade-up">
                <h3 className="text-xl font-serif font-bold text-burgundy-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-900 text-center mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Highly trained professionals dedicated to your wellness
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Layla',
                role: 'Erotic & Lingam Massage',
                image: 'https://horizons-cdn.hostinger.com/d7f3bf87-4fbd-4487-acdb-fba6792bc020/zm1-uSu3U.jpg',
              },
              {
                name: 'Amara',
                role: 'Tantra & Sensual Arts',
                image: 'https://horizons-cdn.hostinger.com/d7f3bf87-4fbd-4487-acdb-fba6792bc020/sms-5SgKW.jpg',
              },
              {
                name: 'Zola',
                role: 'Deep Tissue & Reflexology',
                image: 'https://horizons-cdn.hostinger.com/d7f3bf87-4fbd-4487-acdb-fba6792bc020/he4-IDbcx.jpg',
              },
              {
                name: 'Nia',
                role: 'Body Wrap Specialist',
                image: 'https://horizons-cdn.hostinger.com/d7f3bf87-4fbd-4487-acdb-fba6792bc020/he2-2DLkF.jpg',
              },
              {
                name: 'Kenna',
                role: 'Four Hands & Couples Massage',
                image: 'https://horizons-cdn.hostinger.com/d7f3bf87-4fbd-4487-acdb-fba6792bc020/m4-vee-6aMeP.jpg',
              },
              {
                name: 'Sade',
                role: 'Shiatsu & Thai Massage',
                image: 'https://horizons-cdn.hostinger.com/d7f3bf87-4fbd-4487-acdb-fba6792bc020/hs8-Fev1x.jpg',
              },
              {
                name:  'Imani' ,
                role: 'Body to Body & Sensual Touch',
                image: 'https://horizons-cdn.hostinger.com/d7f3bf87-4fbd-4487-acdb-fba6792bc020/m1-joy-rqFlX.jpg',
              },
              {
                name: 'Asha',
                role: 'Holistic & Energy Healing',
                image: 'https://horizons-cdn.hostinger.com/d7f3bf87-4fbd-4487-acdb-fba6792bc020/hs4-SsSvC.jpg',
              },
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300" data-aos="fade-up">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-serif font-bold text-dark-900 mb-2">{member.name}</h3>
                  <p className="text-burgundy-700 font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
