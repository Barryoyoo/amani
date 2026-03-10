# Armani Luxe Spa - Modern Luxury Spa Website

## 🏢 Project Overview

A fully responsive, modern luxury spa website for **Armani Luxe Spa** built with cutting-edge technology. The website is designed to be visually stunning, user-friendly, and conversion-focused, with a luxury aesthetic and seamless user experience.

### Key Features

✨ **Modern Design** - Elegant luxury aesthetic with gold, cream, and black color palette
📱 **Fully Responsive** - Mobile-first design optimized for all devices
⚡ **Fast Performance** - Optimized for speed and SEO
🎨 **Interactive UI** - Smooth animations and transitions using Framer Motion and AOS
📅 **Online Booking System** - Multi-step booking with date/time selection
💬 **Contact Forms** - Easy-to-use inquiry and contact forms
🖼️ **Gallery Section** - Beautiful showcasing of spa facilities
📝 **Blog Section** - Wellness tips and lifestyle content
🔒 **Secure Backend** - Express.js API with security features

---

## 📁 Project Structure

```
Spa/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navigation.jsx    # Top navbar with mobile menu
│   │   │   └── Footer.jsx        # Footer with links and contact info
│   │   ├── pages/
│   │   │   ├── Home.jsx          # Hero, services, testimonials
│   │   │   ├── About.jsx         # About, mission, team
│   │   │   ├── Services.jsx      # All services with pricing
│   │   │   ├── Packages.jsx      # Spa packages and bundles
│   │   │   ├── Gallery.jsx       # Photo gallery
│   │   │   ├── Blog.jsx          # Wellness blog posts
│   │   │   ├── Contact.jsx       # Contact form with map
│   │   │   ├── Booking.jsx       # Multi-step booking system
│   │   │   └── NotFound.jsx      # 404 page
│   │   ├── App.jsx               # Main app with routing
│   │   ├── main.jsx              # React DOM entry
│   │   ├── index.css             # Global styles + Tailwind
│   │   ├── utils/                # Helper functions
│   │   ├── assets/               # Images, icons
│   │   └── styles/               # Additional stylesheets
│   ├── index.html                # HTML template
│   ├── vite.config.js            # Vite configuration
│   ├── tailwind.config.js        # Tailwind CSS config
│   ├── postcss.config.js         # PostCSS config
│   └── package.json              # Frontend dependencies
│
├── backend/
│   ├── index.js                  # Main server file
│   ├── routes/                   # API route handlers
│   ├── controllers/              # Business logic
│   ├── models/                   # Data models
│   ├── middleware/               # Custom middleware
│   └── package.json              # Backend dependencies
│
├── README.md                     # This file
└── package.json                  # Root package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn
- Git
- Modern browser

### Installation

1. **Clone the repository**
   ```bash
   cd Spa
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

### Running the Development Server

**Terminal 1 - Backend (Port 4000)**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend (Port 3000)**
```bash
cd frontend
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## 💻 Technology Stack

### Frontend
- **React 18** - UI library
- **React Router v6** - Navigation
- **Tailwind CSS 3** - Utility-first styling
- **Vite** - Build tool
- **Axios** - HTTP client
- **React Icons** - Icon library
- **Framer Motion** - Animations
- **AOS (Animate On Scroll)** - Scroll animations
- **React Helmet Async** - Meta tags management

### Backend
- **Express.js 4** - Web framework
- **Node.js** - Runtime
- **CORS** - Cross-origin requests
- **Helmet** - Security headers
- **Express Rate Limit** - API protection
- **Body Parser** - Request parsing

### Styling
- **Tailwind CSS** - Utility classes
- **PostCSS** - CSS processing
- **Google Fonts** - Custom typography (Playfair Display, Inter)

---

## 🎨 Design & Color Palette

### Primary Colors
- **Gold** (#c89b73) - Primary accent, luxury feel
- **Cream** (#fdfbf7) - Light background
- **Dark** (#1a1a1a) - Text and dark sections

### Typography
- **Headings**: Playfair Display (serif) - Elegant and sophisticated
- **Body**: Inter (sans-serif) - Clean and readable

### Design Features
- Luxury aesthetic with gold accents
- Smooth transitions and hover effects
- Mobile-first responsive design
- Accessibility-focused UI
- High-quality imagery

---

## 📄 Pages & Features

### 1. **Home** (`/`)
- Full-width hero section with CTA
- Why Choose Us section
- Featured services showcase
- Client testimonials
- Call-to-action section

### 2. **About** (`/about`)
- Company story
- Mission & vision statement
- Core values
- Team members showcase

### 3. **Services** (`/services`)
- All spa services with descriptions
- Pricing in Kenyan Shillings (KSH)
- Service duration and benefits
- Custom treatment options

### 4. **Packages** (`/packages`)
- Pre-built spa packages
- Corporate packages
- Group/celebration packages
- Special occasion bundles

### 5. **Gallery** (`/gallery`)
- Beautiful spa facility photos
- Treatment room showcases
- Ambiance imagery

### 6. **Blog** (`/blog`)
- Wellness tips and advice
- Spa lifestyle content
- SEO-optimized articles
- Author and date information

### 7. **Contact** (`/contact`)
- Contact information display
- Interactive contact form
- Google Maps integration
- Operating hours

### 8. **Booking** (`/booking`)
- Multi-step booking wizard
- Service selection
- Date/time picker
- Therapist preference
- Personal information collection

### 9. **Navigation**
- Sticky header with logo
- Main navigation menu
- Mobile hamburger menu
- Contact info in top bar
- Social media links

---

## 🔌 API Endpoints

### Services
- `GET /api/services` - Get all services
- `GET /api/services/:id` - Get single service

### Bookings
- `POST /api/bookings` - Create new booking
- `GET /api/admin/bookings` - Get all bookings (admin)

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/admin/messages` - Get all messages (admin)

### Spa Info
- `GET /api/spa/info` - Get spa information
- `GET /api/health` - Health check

---

## 🔒 Security Features

- Helmet.js for security headers
- CORS configuration
- Rate limiting on API endpoints
- Input validation
- XSS protection
- CSRF prevention

---

## 📱 Responsive Design

- **Mobile**: < 768px - Full stack mobile UI
- **Tablet**: 768px - 1024px - Optimized layout
- **Desktop**: > 1024px - Full featured layout

All pages are optimized for touch and mobile navigation.

---

## 🎯 SEO Optimization

- Meta tags for each page
- Open Graph tags for social sharing
- Semantic HTML structure
- Fast loading performance
- Mobile-friendly design
- XML sitemaps (to be implemented)
- Schema.org structured data (to be implemented)

---

## 📊 Analytics & Tracking

Ready to integrate:
- Google Analytics
- Facebook Pixel
- Hotjar for heatmaps
- Conversion tracking

---

## 🚢 Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the `dist` folder
```

### Backend Deployment (Heroku/Railway/Render)
```bash
# Push to git repo
git push heroku main

# Or use environment variables for production
NODE_ENV=production
PORT=4000
```

---

## 📦 Environment Variables

### Backend (.env)
```
NODE_ENV=development
PORT=4000
CORS_ORIGIN=http://localhost:3000

# For production
STRIPE_KEY=your_stripe_key
MAILGUN_API=your_mailgun_key
DATABASE_URL=your_mongodb_uri
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:4000
VITE_GOOGLE_MAPS_KEY=your_maps_key
```

---

## 🎉 Next Steps & Enhancements

### Phase 2 Features
- [ ] Mpesa payment integration
- [ ] WhatsApp Business API integration
- [ ] Email notifications (Nodemailer)
- [ ] MongoDB/Postgres database
- [ ] User authentication
- [ ] Appointment reminders
- [ ] Google Calendar sync
- [ ] Newsletter subscription
- [ ] Instagram feed integration
- [ ] Review system

### Phase 3 Features
- [ ] Admin dashboard
- [ ] Staff management
- [ ] Inventory tracking
- [ ] Analytics dashboard
- [ ] Email marketing
- [ ] SMS notifications
- [ ] Mobile app
- [ ] Progressive Web App (PWA)

---

## 📞 Support & Contact

**Armani Luxe Spa**
- 📍 Kilimani, Nairobi, Kenya
- 📞 +254 700 000 000
- 📧 info@armaniluxespa.com
- 🌐 www.armaniluxespa.com
- ⏰ Open Daily: 9AM - 9PM

---

## 📄 License

This project is proprietary to Armani Luxe Spa. All rights reserved.

---

## 🙏 Credits

Built with modern web technologies and best practices for luxury brand websites.

---

**Last Updated**: January 29, 2025
**Version**: 1.0.0
**Status**: Launch Ready ✨

---

## 🤝 Contributing

For updates and improvements, contact the development team.

Enjoy your journey with Armani Luxe Spa! ✨💆‍♀️
