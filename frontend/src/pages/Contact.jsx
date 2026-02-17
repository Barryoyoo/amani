import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Amani Temptress Spa — Your Desire Awaits</title>
        <meta name="description" content="Reach out discreetly. We're here for your inquiries, fantasies, and bookings. Your secret is safe with us." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl text-gold-100 font-serif font-bold mb-6">Whisper to Us</h1>
          <p className="text-xl text-gold-100 max-w-2xl">Tell us what you crave. Discretion guaranteed.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 bg-gold-50">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-serif text-burgundy-900 mb-8">Share Your Desire</h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-gold-700 text-2xl mt-1"><FaMapMarkerAlt /></div>
                <div>
<<<<<<< HEAD
                  <h3 className="font-semibold text-burgundy-900 mb-1">Location</h3>
                  <p className="text-burgundy-700">Kilimani, Nairobi, Kenya</p>
=======
                  <h3 className="font-semibold text-dark-900 mb-1">Location</h3>
                  <p className="text-gray-700">Kindaruma Rd, Nairobi, Kenya</p>
>>>>>>> c045311fdcd0575daeb3148b607371eb9c2cd9ea
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-gold-700 text-2xl mt-1"><FaPhone /></div>
                <div>
<<<<<<< HEAD
                  <h3 className="font-semibold text-burgundy-900 mb-1">Phone</h3>
                  <a href="tel:+254700000000" className="text-burgundy-700 hover:text-gold-700">+254 700 000 000</a>
=======
                  <h3 className="font-semibold text-dark-900 mb-1">Phone</h3>
                  <a href="tel:+254710574902" className="text-gray-700 hover:text-gold-700">+254 710 574 902</a>
>>>>>>> c045311fdcd0575daeb3148b607371eb9c2cd9ea
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-gold-700 text-2xl mt-1"><FaEnvelope /></div>
                <div>
<<<<<<< HEAD
                  <h3 className="font-semibold text-burgundy-900 mb-1">Email</h3>
                  <a href="mailto:info@armaniluxespa.com" className="text-burgundy-700 hover:text-gold-700">info@armaniluxespa.com</a>
=======
                  <h3 className="font-semibold text-dark-900 mb-1">Email</h3>
                  <a href="mailto:amanitemptressspa@gmail.com" className="text-gray-700 hover:text-gold-700">amanitemptressspa@gmail.com</a>
>>>>>>> c045311fdcd0575daeb3148b607371eb9c2cd9ea
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-gold-700 text-2xl mt-1"><FaClock /></div>
                <div>
<<<<<<< HEAD
                  <h3 className="font-semibold text-burgundy-900 mb-1">Hours</h3>
                  <p className="text-burgundy-700">
                    Mon-Fri: 9AM - 9PM<br/>
                    Sat-Sun: 10AM - 8PM
=======
                  <h3 className="font-semibold text-dark-900 mb-1">Hours</h3>
                  <p className="text-gray-700">
                    Closed: 23:59<br/>
                    Open: 00:00
>>>>>>> c045311fdcd0575daeb3148b607371eb9c2cd9ea
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="mt-8 rounded-lg overflow-hidden h-80">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63820.71771722101!2d36.791215!3d-1.297796!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1098497ba161%3A0x9d8afd76d92f37a3!2sKindaruma%20Rd%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1770109255307!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <h2 className="text-4xl md:text-5xl font-serif text-burgundy-900 mb-8">Whisper to Us</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-burgundy-900 font-semibold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-burgundy-200 bg-gold-50 text-burgundy-900 placeholder-burgundy-400 rounded-lg focus:outline-none focus:border-gold-700 focus:ring-1 focus:ring-gold-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-burgundy-900 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-burgundy-200 bg-gold-50 text-burgundy-900 placeholder-burgundy-400 rounded-lg focus:outline-none focus:border-gold-700 focus:ring-1 focus:ring-gold-500"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-burgundy-900 font-semibold mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-burgundy-200 bg-gold-50 text-burgundy-900 placeholder-burgundy-400 rounded-lg focus:outline-none focus:border-gold-700 focus:ring-1 focus:ring-gold-500"
                  placeholder="Your phone number"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-burgundy-900 font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-burgundy-200 bg-gold-50 text-burgundy-900 placeholder-burgundy-400 rounded-lg focus:outline-none focus:border-gold-700 focus:ring-1 focus:ring-gold-500"
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-burgundy-900 font-semibold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-burgundy-200 bg-gold-50 text-burgundy-900 placeholder-burgundy-400 rounded-lg focus:outline-none focus:border-gold-700 focus:ring-1 focus:ring-gold-500 resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="px-8 py-3 bg-gold-600 text-burgundy-900 rounded-lg hover:bg-gold-500 transition-all duration-300 font-semibold w-full"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>

              {submitted && (
                <div className="bg-gold-100 border border-gold-500 text-burgundy-800 px-4 py-3 rounded-lg">
                  ✓ Thank you! Your message has been sent successfully. We'll be in touch soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
