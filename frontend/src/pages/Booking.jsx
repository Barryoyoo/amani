import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useSearchParams } from 'react-router-dom'
import { servicesData } from '../utils/servicesData'

export default function Booking() {
  const [searchParams] = useSearchParams()
  const serviceFromUrl = searchParams.get('service')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    therapist: '',
    notes: ''
  })

  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  // Transform servicesData to match booking form format
  const services = servicesData.map(service => ({
    id: service.name,
    name: service.name,
    duration: service.duration,
    price: `Ksh ${service.price}`
  }))

  // Keep therapist list in sync with About page team section
  const therapists = ['Layla', 'Amara', 'Zola', 'Nia', 'Kenna', 'Sade', 'Imani', 'Asha']

  // Set service from URL parameter on component mount
  useEffect(() => {
    if (serviceFromUrl) {
      setFormData(prev => ({
        ...prev,
        service: serviceFromUrl
      }))
    }
  }, [serviceFromUrl])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setSubmitError('')
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (res.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setFormData({ name: '', email: '', phone: '', service: '', date: '', time: '', therapist: '', notes: '' })
          setStep(1)
          setSubmitted(false)
        }, 3000)
      } else {
        const message = await res.text().catch(() => '')
        setSubmitError(message || 'Booking failed. Please try again.')
      }
    } catch (error) {
      console.error('Error booking:', error)
      setSubmitError('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Book Your Escape | Amani Temptress Spa</title>
        <meta name="description" content="Claim your appointment. Your indulgence is just a few clicks away. Discreet. Easy. Irresistible." />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-serif text-gold-100 font-bold mb-6">Claim Your Escape</h1>
          <p className="text-xl text-gold-100 max-w-2xl">Your pleasure awaits. Secure your session—discreetly.</p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-20 bg-gold-50">
        <div className="max-w-4xl mx-auto px-6">
          {submitted ? (
            <div className="bg-gold-100 border-2 border-gold-500 text-burgundy-800 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-serif font-bold mb-4">✓ Booking Confirmed!</h2>
              <p className="text-lg">We've sent you a confirmation email with all the details.</p>
              <p className="mt-4 text-sm">We look forward to seeing you soon!</p>
            </div>
          ) : (
            <div>
              {/* Progress Steps */}
              <div className="flex justify-between mb-8">
                {[1, 2, 3].map(s => (
                  <div key={s} className={`flex-1 text-center pb-4 ${s <= step ? 'border-b-4 border-gold-700' : 'border-b-4 border-burgundy-200'}`}>
                    <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-300 ${s <= step ? 'bg-gold-700 text-burgundy-900' : 'bg-burgundy-200 text-burgundy-600'}`}>
                      {s}
                    </div>
                    <p className="text-sm mt-2 text-burgundy-900 transition-colors duration-300">{s === 1 ? 'Service' : s === 2 ? 'Details' : 'Confirmation'}</p>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 bg-burgundy-50 p-8 rounded-lg shadow-lg border border-burgundy-100/50 transition-colors duration-300">
                {submitError && (
                  <div className="bg-burgundy-100 border-2 border-burgundy-500 text-burgundy-900 p-4 rounded-lg">
                    {submitError}
                  </div>
                )}
                {/* Step 1: Service Selection */}
                {step === 1 && (
                  <div>
                    <label className="block text-burgundy-900 font-semibold mb-4 transition-colors duration-300">Select a Service</label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {services.map(service => (
                        <label key={service.id} className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.service === service.name ? 'border-gold-700 bg-gold-100' : 'border-burgundy-200'}`}>
                          <input
                            type="radio"
                            name="service"
                            value={service.name}
                            checked={formData.service === service.name}
                            onChange={handleChange}
                            className="mr-3"
                          />
                          <div>
                            <p className="font-semibold text-burgundy-900 transition-colors duration-300">{service.name}</p>
                            <p className="text-sm text-burgundy-600 transition-colors duration-300">{service.duration} • {service.price}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Appointment Details */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="date" className="block text-burgundy-900 font-semibold mb-2 transition-colors duration-300">Preferred Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-burgundy-200 rounded-lg bg-gold-50 text-burgundy-900 focus:outline-none focus:border-gold-700 focus:ring-1 focus:ring-gold-500 transition-colors duration-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="time" className="block text-burgundy-900 font-semibold mb-2 transition-colors duration-300">Preferred Time</label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-burgundy-200 rounded-lg bg-gold-50 text-burgundy-900 focus:outline-none focus:border-gold-700 focus:ring-1 focus:ring-gold-500 transition-colors duration-300"
                      >
                        <option value="">Select time</option>
                        {['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'].map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="therapist" className="block text-burgundy-900 font-semibold mb-2 transition-colors duration-300">Preferred Therapist</label>
                      <select
                        id="therapist"
                        name="therapist"
                        value={formData.therapist}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-burgundy-200 rounded-lg bg-gold-50 text-burgundy-900 focus:outline-none focus:border-gold-700 focus:ring-1 focus:ring-gold-500 transition-colors duration-300"
                      >
                        <option value="">Any available</option>
                        {therapists.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 3: Personal Information */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-burgundy-900 font-semibold mb-2 transition-colors duration-300">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-burgundy-200 rounded-lg bg-gold-50 text-burgundy-900 focus:outline-none focus:border-gold-700 focus:ring-1 focus:ring-gold-500 transition-colors duration-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-burgundy-900 font-semibold mb-2 transition-colors duration-300">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-burgundy-200 rounded-lg bg-gold-50 text-burgundy-900 focus:outline-none focus:border-gold-700 focus:ring-1 focus:ring-gold-500 transition-colors duration-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-burgundy-900 font-semibold mb-2 transition-colors duration-300">Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-burgundy-200 rounded-lg bg-gold-50 text-burgundy-900 focus:outline-none focus:border-gold-700 focus:ring-1 focus:ring-gold-500 transition-colors duration-300"
                      />
                    </div>

                    <div>
                      <label htmlFor="notes" className="block text-burgundy-900 font-semibold mb-2 transition-colors duration-300">Special Requests (Optional)</label>
                      <textarea
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows="3"
                        className="w-full px-4 py-3 border border-burgundy-200 rounded-lg bg-gold-50 text-burgundy-900 focus:outline-none focus:border-gold-700 focus:ring-1 focus:ring-gold-500 resize-none transition-colors duration-300"
                        placeholder="Any allergies or special requests?"
                      ></textarea>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-4 mt-8">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="px-8 py-3 border-2 border-burgundy-900 text-burgundy-900 rounded-lg hover:bg-burgundy-900 hover:text-gold-100 transition-all duration-300 font-semibold flex-1"
                    >
                      Back
                    </button>
                  )}
                  {step < 3 && (
                    <button
                      type="button"
                      onClick={() => formData.service && step === 1 ? setStep(2) : formData.date && formData.time && step === 2 ? setStep(3) : null}
                      disabled={step === 1 && !formData.service || step === 2 && (!formData.date || !formData.time)}
                      className="px-8 py-3 bg-burgundy-900 text-gold-100 rounded-lg hover:bg-burgundy-800 transition-all duration-300 font-semibold flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Next
                    </button>
                  )}
                  {step === 3 && (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary flex-1 bg-burgundy-900 text-gold-100 hover:bg-burgundy-700 transition-all duration-300 font-bold disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-burgundy-900"
                    >
                      <span className="inline-flex items-center justify-center gap-2">
                        {isSubmitting && (
                          <span
                            className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-burgundy-900/40 border-t-gold-500"
                            aria-hidden="true"
                          />
                        )}
                        {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
                      </span>
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
