const express = require('express')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv')
const { sendContactEmail, sendBookingEmail } = require('./emailService')

// Load environment variables
dotenv.config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// In-memory storage for demo (replace with database in production)
const contactMessages = []
const bookings = []

// API Routes

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' })
})

// Get all services
app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 1,
      name: 'Swedish Massage',
      price: 79,
      duration: 60,
      description: 'A classic massage technique to improve circulation and reduce tension.'
    },
    {
      id: 2,
      name: 'Deep Tissue Massage',
      price: 99,
      duration: 60,
      description: 'Therapeutic massage targeting deeper muscle layers for intense relief.'
    },
    {
      id: 3,
      name: 'Facial Treatment',
      price: 89,
      duration: 50,
      description: 'Rejuvenating facial with premium skincare products and techniques.'
    },
    {
      id: 4,
      name: 'Hot Stone Therapy',
      price: 109,
      duration: 60,
      description: 'Luxurious therapy using heated stones to melt away stress and tension.'
    },
    {
      id: 5,
      name: 'Aromatherapy Spa',
      price: 85,
      duration: 50,
      description: 'Relaxing treatment combining massage with therapeutic essential oils.'
    },
    {
      id: 6,
      name: 'Body Scrub & Polish',
      price: 69,
      duration: 45,
      description: 'Exfoliating treatment to remove dead skin and reveal silky smooth skin.'
    }
  ]
  res.json(services)
})

// Submit contact form
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' })
  }

  const newMessage = {
    id: contactMessages.length + 1,
    name,
    email,
    phone,
    message,
    timestamp: new Date()
  }

  contactMessages.push(newMessage)

  // Send email
  const emailResult = await sendContactEmail({ name, email, phone, message })

  console.log('New contact message:', newMessage)
  console.log('Email result:', emailResult)

  res.json({
    success: true,
    message: 'Your message has been received. We will contact you soon!',
    data: newMessage
  })
})

// Get all contact messages (admin endpoint)
app.get('/api/admin/messages', (req, res) => {
  res.json(contactMessages)
})

// Submit booking form
app.post('/api/bookings', async (req, res) => {
  const { service, date, time, therapist, name, email, phone, notes } = req.body

  if (!service || !date || !time || !name || !email || !phone) {
    return res.status(400).json({ error: 'All required fields must be filled' })
  }

  const newBooking = {
    id: bookings.length + 1,
    service,
    date,
    time,
    therapist,
    name,
    email,
    phone,
    notes,
    timestamp: new Date(),
    status: 'pending'
  }

  bookings.push(newBooking)

  // Send email
  const emailResult = await sendBookingEmail({ 
    name, email, phone, service, date, time, therapist, notes 
  })

  console.log('New booking:', newBooking)
  console.log('Email result:', emailResult)

  res.json({
    success: true,
    message: 'Your booking has been confirmed. Check your email for details!',
    data: newBooking
  })
})

// Get all bookings (admin endpoint)
app.get('/api/admin/bookings', (req, res) => {
  res.json(bookings)
})

// Get dashboard statistics
app.get('/api/admin/stats', (req, res) => {
  const totalBookings = bookings.length
  const pendingBookings = bookings.filter(b => b.status === 'pending').length
  const confirmedBookings = bookings.filter(b => b.status === 'confirmed').length
  const totalMessages = contactMessages.length

  // Service breakdown
  const serviceBreakdown = {}
  bookings.forEach(booking => {
    serviceBreakdown[booking.service] = (serviceBreakdown[booking.service] || 0) + 1
  })

  // Monthly bookings
  const monthlyBookings = {}
  bookings.forEach(booking => {
    const date = new Date(booking.timestamp)
    const month = date.toLocaleString('default', { month: 'short', year: 'numeric' })
    monthlyBookings[month] = (monthlyBookings[month] || 0) + 1
  })

  res.json({
    totalBookings,
    pendingBookings,
    confirmedBookings,
    totalMessages,
    serviceBreakdown,
    monthlyBookings
  })
})

// Update booking status
app.put('/api/admin/bookings/:id', (req, res) => {
  const { id } = req.params
  const { status } = req.body
  
  const booking = bookings.find(b => b.id === parseInt(id))
  if (!booking) {
    return res.status(404).json({ error: 'Booking not found' })
  }

  booking.status = status
  res.json({ success: true, booking })
})

// Serve static files from frontend build in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`🧖 Amani Luxe Spa Server running on port ${PORT}`)
})
