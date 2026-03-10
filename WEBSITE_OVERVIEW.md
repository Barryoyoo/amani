# Amani Temptress Spa Website Overview

## 📱 Project Structure & Features

### Frontend Pages (React + Vite)
- **Home** (`/`) - Hero section with video background, featured services carousel, testimonials, and CTA
- **Services** (`/services`) - Full service catalog with filtering by duration, pricing, and descriptions
- **About** (`/about`) - Company story, core values, team member profiles with photos
- **Contact** (`/contact`) - Contact form, location map, business hours, and contact information
- **Booking** (`/booking`) - Multi-step booking wizard with service/date/time/therapist selection
- **Navigation** - Sticky header with mobile-responsive menu, dark mode toggle
- **Footer** - Social links, quick links, contact info, legal pages

### Key Features
✨ **Dark Mode Support** - Theme toggler in navigation
📱 **Fully Responsive** - Mobile, tablet, and desktop optimized
🎯 **Multi-Step Booking** - Intuitive 3-step booking process
🎨 **Elegant Design** - Luxury spa aesthetic with burgundy & gold color scheme
📍 **Location & Hours** - Integrated Google Maps and contact details
💬 **Contact Form** - Direct messaging system to admin email
⭐ **Testimonials** - Customer reviews section on homepage
🎪 **Service Carousel** - Featured services with carousel slider
🔍 **Service Filtering** - Filter services by duration

---

## 🛠️ Current Business Information

### Contact Details
- **Phone:** +254 710 574 902
- **Email:** amanitemptressspa@gmail.com
- **Location:** Kindaruma Rd, Nairobi, Kenya
- **Hours:** Open Daily 24/7 (00:00 - 23:59)

### Team Members (Therapists)
1. Layla - Erotic & Lingam Massage
2. Amara - Tantra & Sensual Arts
3. Zola - Deep Tissue & Reflexology
4. Nia - Body Wrap Specialist
5. Kenna - Four Hands & Couples Massage
6. Sade - Shiatsu & Thai Massage
7. Imani - Body to Body & Sensual Touch
8. Asha - Holistic & Energy Healing

### Services Offered (8 Total)
1. Swedish Massage - 90 mins (Ksh 4,000-6,000)
2. Deep Tissue Massage - 90 mins (Ksh 4,500-7,000)
3. Thai Massage - 60 mins (Ksh 4,000-5,000)
4. Sensual Massage - 90 mins (Ksh 6,000-8,000)
5. Exotic Massage - 120 mins (Ksh 8,000-10,000)
6. Body to Body Massage - 150 mins (Ksh 9,000-11,000)
7. Four Hands Massage - 120 mins (Ksh 10,000-15,000)
8. Back Massage - 30 mins (Ksh 3,000-4,000)

---

## 📝 Customization Guide

### To Update Business Information:
1. **Contact Info** - Edit in `Navigation.jsx` and `Contact.jsx`
2. **Services** - Modify `utils/servicesData.js`
3. **Team Members** - Update team section in `pages/About.jsx` and therapist list in `pages/Booking.jsx`
4. **Social Media Links** - Update in `Navigation.jsx` and `Footer.jsx`
5. **Images** - Replace image URLs in components
6. **Color Scheme** - Modify `tailwind.config.js` (burgundy & gold colors)

### To Add New Pages:
1. Create component in `pages/PageName.jsx`
2. Add import in `App.jsx`
3. Add route in `App.jsx` Routes
4. Add navigation link in `Navigation.jsx`

---

## 🚀 Development Commands

```bash
# Install dependencies
npm run install-all

# Start development server (Frontend: 3000, Backend: 5000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🎨 Design Highlights

### Color Palette
- **Primary:** Burgundy (#800020) - Luxury & Sophistication
- **Accent:** Gold (#D4AF37) - Elegance & Glamour
- **Light:** Gold-50 (#FFFBF0) - Backgrounds
- **Dark:** Burgundy-900 (#4A0015) - Text & Headers

### Typography
- **Headers:** Serif font (luxury feel)
- **Body:** Sans-serif (clean & readable)
- **Spacing:** Generous padding & margins for luxury spacing

### Interactive Elements
- Smooth hover transitions on all buttons & links
- Gold glow effects on CTA buttons
- Carousel for featured services
- Modal-style booking process
- Dark mode support throughout

---

## 📊 SEO & Meta Tags

Each page includes:
- Custom title tags
- Meta descriptions
- Helmet for dynamic head management
- Open Graph ready (future implementation)

---

## 🔐 Security & Privacy

- Contact form validation
- Email sanitization on backend
- Booking data encryption ready
- HTTPS support for production

---

## 📱 Mobile Optimization

- Responsive grid layouts (1, 2, 3 columns)
- Touch-friendly button sizes
- Mobile menu hamburger navigation
- Image optimization with lazy loading
- Optimized form inputs for mobile keyboards

---

## 🎯 Future Enhancement Ideas

1. Online payment integration (M-Pesa, Stripe)
2. Appointment reminders via SMS/Email
3. Blog section for wellness tips
4. Gallery section with before/after treatments
5. Loyalty program & gift cards
6. AI-powered chatbot for inquiries
7. Video testimonials
8. Virtual tour of spa facility
9. Push notifications for offers
10. Multi-language support

---

## 📄 License & Credits

- **Developer:** Barrack Oyoo
- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Animations:** AOS (Animate On Scroll)
- **Icons:** React Icons
- **Carousel:** Slick Carousel
- **Form Handling:** React Hook Form

---

## ✅ School Project Status

This is an **original school project** featuring:
- Professional web development practices
- Full-stack architecture (React frontend, Express backend)
- Responsive design
- Modern UI/UX
- Database-ready architecture
- SEO optimization

**Developed as an educational project to demonstrate web development capabilities.**
