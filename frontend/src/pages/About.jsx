import React from 'react'
import { Helmet } from 'react-helmet-async'
import { FaLeaf, FaHandsHelping, FaGlobeAmericas } from 'react-icons/fa'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Amani Temptress Spa | Where Desire Meets Indulgence</title>
        <meta name="description" content="The secret behind Amani Temptress Spa. An intimate sanctuary in Kilimani where pleasure is an art form. Discretion. Expertise. You." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-burgundy-300 via-burgundy-400 to-burgundy-600 text-gold-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-gold-100">The Art of Seduction</h1>
          <p className="text-xl text-gold-100 max-w-2xl">
            Behind closed doors in Kilimani, we've perfected the craft of indulgence.
          </p>
        </div>
      </section>

      {/* Our Secret */}
      <section className="py-24 bg-gold-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-burgundy-900 mb-8">Our Secret</h2>
              <p className="text-burgundy-700 mb-4 text-lg leading-relaxed">
                Since 2019, Amani Temptress Spa has been the whispered secret of Kilimani. Behind our doors, we've mastered the art of sensual touch—premium massage, intimate treatments designed to awaken what you've kept hidden. Thousands have surrendered here. Discretion has always been our promise.
              </p>
              <p className="text-burgundy-700 mb-4 text-lg leading-relaxed">
                We've grown into the most sought-after intimate sanctuary in Kilimani—where those who crave something more find exactly what they need. Discretion, expertise, desire.
              </p>
              <p className="text-burgundy-700 text-lg leading-relaxed">
                Today, our promise remains: to deliver experiences that leave you breathless, craving more. Your fantasy. Our craft.
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
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-burgundy-900 text-center mb-12">What We Promise</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 bg-burgundy-50 rounded-lg border border-burgundy-100/50" data-aos="fade-up">
              <h3 className="text-2xl font-serif font-bold text-burgundy-900 mb-4 flex items-center gap-3">
                <FaLeaf className="text-gold-700" /> 
                Awaken Your Senses
              </h3>
              <p className="text-burgundy-700 leading-relaxed">
                Every touch crafted to awaken. Every session designed to leave you transformed—body, mind, and soul. We deliver what you crave, with the discretion you deserve.
              </p>
            </div>
            <div className="p-8 bg-burgundy-50 rounded-lg border border-burgundy-100/50" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-serif font-bold text-burgundy-900 mb-4 flex items-center gap-3">
                <FaGlobeAmericas className="text-gold-700" /> 
                Nairobi's Best-Kept Secret
              </h3>
              <p className="text-burgundy-700 leading-relaxed">
                To remain the whispered destination for those who know—where desire meets expertise, and every visit leaves you longing for more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-gold-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-burgundy-900 text-center mb-12">What We Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Discretion', desc: 'Your desires stay between us. Always.' },
              { title: 'Expertise', desc: 'Hands trained in the art of pleasure.' },
              { title: 'Desire First', desc: 'Your fantasies are our blueprint.' },
              { title: 'Indulgence', desc: 'We never hold back. Neither should you.' },
              { title: 'Luxury', desc: 'Every detail designed to seduce.' },
              { title: 'Trust', desc: 'You surrender. We deliver. Every time.' },
            ].map((value, idx) => (
              <div key={idx} className="text-center p-8 bg-gradient-to-br from-gold-50 to-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300" data-aos="fade-up">
                <h3 className="text-xl font-serif font-bold text-burgundy-900 mb-3">{value.title}</h3>
                <p className="text-burgundy-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-burgundy-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-burgundy-900 text-center mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-burgundy-600 text-center mb-12">
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
              <div key={idx} className="bg-gold-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gold-200/50" data-aos="fade-up">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-serif font-bold text-burgundy-900 mb-2">{member.name}</h3>
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
