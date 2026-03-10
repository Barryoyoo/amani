import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function Therapists() {
  const therapists = [
    { name: 'Layla', role: 'Sensual Specialist', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=900&fit=crop', blurb: 'Graceful, intuitive, and deeply indulgent touch.' },
    { name: 'Amara', role: 'Tantric & Four Hands', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=900&fit=crop', blurb: 'Connective energy and mesmerizing rhythm.' },
    { name: 'Zola', role: 'Body-to-Body Rituals', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=900&fit=crop', blurb: 'Every curve, every breath—pure immersion.' },
    { name: 'Nia', role: 'Deep Release', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=900&fit=crop', blurb: 'Firm pressure and teasing warmth intertwined.' },
    { name: 'Kenna', role: 'Slow Burn Tease', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=800&h=900&fit=crop', blurb: 'Patience and build—waves of sensation.' },
    { name: 'Sade', role: 'Velvet Touch', img: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=800&h=900&fit=crop', blurb: 'Silken glide and lingering warmth.' },
    { name: 'Imani', role: 'Awakening Rituals', img: 'https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?w=800&h=900&fit=crop', blurb: 'Whisper-soft beginnings, intense finales.' },
    { name: 'Asha', role: 'Intimate Body Work', img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&h=900&fit=crop', blurb: 'Confident, attentive, undeniably addictive.' },
  ]

  return (
    <>
      <Helmet>
        <title>Our Therapists | Amani Temptress Spa</title>
        <meta name="description" content="Meet our beguiling therapists—experts in sensual mastery and intimate indulgence." />
      </Helmet>

      <section className="bg-gold-50 dark:bg-dark-900 text-burgundy-900 dark:text-cream py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Meet Our Therapists</h1>
          <p className="text-burgundy-700 dark:text-cream/80 max-w-2xl">Stunning, skilled, and discreet—each one a master of indulgence.</p>
        </div>
      </section>

      <section className="py-16 bg-burgundy-50 dark:bg-dark-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {therapists.map((t) => (
              <div key={t.name} className="rounded-2xl overflow-hidden bg-gold-50 dark:bg-dark-900 border border-gold-200 dark:border-dark-700 shadow hover:shadow-xl transition-all">
                <div className="h-80 overflow-hidden">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-serif font-bold text-burgundy-900 dark:text-cream">{t.name}</h3>
                  <p className="text-gold-700 font-semibold mb-2">{t.role}</p>
                  <p className="text-burgundy-700 dark:text-cream/80 mb-4 text-sm leading-relaxed">{t.blurb}</p>
                  <Link
                    to={`/booking?therapist=${encodeURIComponent(t.name)}`}
                    className="inline-block w-full text-center px-5 py-3 bg-burgundy-900 text-gold-100 rounded-lg hover:bg-burgundy-800 transition-all font-semibold"
                  >
                    Book {t.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-burgundy-900 via-burgundy-800 to-burgundy-900 text-gold-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready to Surrender?</h2>
          <p className="text-gold-200 mb-6">Choose your muse. We’ll handle your desires with devotion.</p>
          <Link to="/booking" className="px-8 py-3 bg-gold-600 text-burgundy-900 rounded-lg hover:bg-gold-500 transition-all font-semibold">Indulge Now</Link>
        </div>
      </section>
    </>
  )
}

