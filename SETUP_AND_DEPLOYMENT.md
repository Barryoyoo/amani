# Amani Temptress Spa - Complete Setup & Deployment Guide

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Git (optional)

### Installation Steps

```bash
# 1. Navigate to the project directory
cd "path/to/Spa/Spa"

# 2. Install all dependencies (frontend + backend)
npm run install-all

# 3. Start the development environment
npm run dev
```

**Your application will be running on:**
- Frontend (React): http://localhost:3000
- Backend (Express): http://localhost:5000

---

## 📁 Project Structure Explained

```
Spa/
├── frontend/                 # React + Vite application
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Navigation.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ...
│   │   ├── pages/            # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Booking.jsx
│   │   │   └── NotFound.jsx
│   │   ├── context/          # React Context (Theme)
│   │   │   └── ThemeContext.jsx
│   │   ├── utils/            # Utility functions & data
│   │   │   └── servicesData.js
│   │   ├── App.jsx           # Main app component
│   │   ├── main.jsx          # Entry point
│   │   ├── index.css         # Global styles
│   │   └── App.css           # App styles
│   ├── index.html            # HTML template
│   ├── vite.config.js        # Vite configuration
│   ├── tailwind.config.js    # Tailwind CSS config
│   ├── postcss.config.js     # PostCSS config
│   └── package.json          # Frontend dependencies
│
├── backend/                  # Express.js API server
│   ├── index.js              # Main server file
│   ├── emailService.js       # Email configuration
│   ├── controllers/          # Route handlers
│   ├── middleware/           # Custom middleware
│   ├── models/               # Database models
│   ├── routes/               # API routes
│   └── package.json          # Backend dependencies
│
├── package.json              # Root workspace config
└── WEBSITE_OVERVIEW.md       # Project overview
```

---

## 🔧 Configuration Files

### Frontend Configuration

#### `vite.config.js`
- Defines development server settings
- Hot Module Replacement (HMR) configuration
- Build output settings

#### `tailwind.config.js`
- Custom color palette (gold & burgundy)
- Extended spacing utilities
- Dark mode configuration
- Font family definitions

#### `postcss.config.js`
- PostCSS plugins for Tailwind CSS
- Autoprefixer for cross-browser compatibility

### Backend Configuration

#### `backend/index.js`
- Express server setup
- CORS configuration
- API routes definition
- Port configuration (default: 5000)

#### `backend/emailService.js`
- Email service integration
- SMTP configuration for contact forms
- Transactional email setup

---

## 📝 Environment Variables

Create a `.env` file in the frontend root with:

```env
VITE_API_BASE_URL=http://localhost:5000
VITE_HERO_VIDEO_URL=https://your-video-url.mp4
```

Create a `.env` file in the backend root with:

```env
PORT=5000
NODE_ENV=development
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_RECEIVER=amanitemptressspa@gmail.com
```

---

## 🎨 Customization Guide

### Updating Contact Information

**In `frontend/src/components/Navigation.jsx`:**
```jsx
<a href="tel:+254710574902">  // Change phone number
<a href="mailto:amanitemptressspa@gmail.com">  // Change email
```

**In `frontend/src/pages/Contact.jsx`:**
```jsx
<a href="tel:+254710574902">  // Update phone
<a href="mailto:amanitemptressspa@gmail.com">  // Update email
<p className="text-gray-700">Kindaruma Rd, Nairobi, Kenya</p>  // Update address
```

**In `frontend/src/components/Footer.jsx`:**
```jsx
// Update all contact details, social media links
```

### Updating Services

Edit `frontend/src/utils/servicesData.js`:

```javascript
{
  name: 'Your Service Name',
  duration: '90 mins',
  price: '5000',
  image: 'https://image-url.jpg',
  description: 'Service description...',
  benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
}
```

### Updating Team Members

Edit `frontend/src/pages/About.jsx` in the team section and update:
- In `frontend/src/pages/Booking.jsx` therapist array:

```javascript
const therapists = ['Layla', 'Amara', 'Zola', 'Nia', 'Kenna', 'Sade', 'Imani', 'Asha']
```

### Changing Colors

Edit `frontend/tailwind.config.js` and modify the color palette:

```javascript
colors: {
  gold: { /* your color palette */ },
  burgundy: { /* your color palette */ },
}
```

### Updating Images

Replace image URLs in components:
- Homepage: `pages/Home.jsx`
- Services: `pages/Services.jsx`
- About: `pages/About.jsx`
- Navigation logo: `components/Navigation.jsx`

---

## 🌐 Deployment Guide

### Deploy to Netlify (Frontend)

1. **Build the frontend:**
```bash
cd frontend
npm run build
```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Create new site from Git
   - Select your repository
   - Build command: `npm run build`
   - Publish directory: `frontend/dist`

3. **Set environment variables:**
   - In Netlify dashboard → Site settings → Build & deploy
   - Add environment variables from `.env`

### Deploy to Heroku (Backend)

1. **Install Heroku CLI:**
```bash
npm install -g heroku
```

2. **Create Heroku app:**
```bash
heroku create your-app-name
```

3. **Set environment variables:**
```bash
heroku config:set PORT=5000
heroku config:set EMAIL_USER=your-email
heroku config:set EMAIL_PASS=your-app-password
```

4. **Deploy:**
```bash
git push heroku main
```

### Deploy to Vercel (Frontend)

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import Git repository
   - Framework preset: Vite
   - Build command: `npm run build`

2. **Set environment variables in Vercel dashboard**

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use different port
npm run dev -- --port 3001
```

### Dependencies Issues
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### CORS Errors
- Ensure backend is running on port 5000
- Check `CORS` headers in `backend/index.js`
- Update `VITE_API_BASE_URL` in `.env`

### Email Not Sending
- Check email credentials in `.env`
- Verify SMTP settings in `backend/emailService.js`
- For Gmail: Use app-specific password, not account password
- Enable "Less secure app access" if needed

---

## 📊 Performance Optimization

### Frontend
- Images are lazy-loaded (`loading="lazy"`)
- Code splitting with React Router
- Minification on build
- CSS purging with Tailwind

### Backend
- Request compression
- Connection pooling
- Caching headers
- Rate limiting

---

## 🔒 Security Checklist

- [ ] Update all contact information
- [ ] Set secure CORS origins
- [ ] Use HTTPS in production
- [ ] Sanitize form inputs
- [ ] Hash sensitive data
- [ ] Use environment variables for secrets
- [ ] Implement rate limiting
- [ ] Add CAPTCHA to contact form
- [ ] Regular security updates
- [ ] SSL certificate for domain

---

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

---

## 📞 Support & Help

For issues or questions:
- Email: amanitemptressspa@gmail.com
- Phone: +254 710 574 902
- Developer: Barrack Oyoo

---

## 📄 License

This project is created as an educational school project. All rights reserved.

---

## ✅ Pre-Launch Checklist

Before going live:
- [ ] Update all contact information
- [ ] Test all forms and functionality
- [ ] Check responsive design on mobile
- [ ] Verify email sending works
- [ ] Test booking system
- [ ] Optimize images
- [ ] Set up analytics (Google Analytics)
- [ ] Configure domain name
- [ ] Set up SSL certificate
- [ ] Create privacy policy
- [ ] Create terms of service
- [ ] Test dark mode functionality
- [ ] Verify all links work
- [ ] Test navigation on mobile
- [ ] Check loading times
- [ ] Test on different browsers
- [ ] Set up backups
- [ ] Monitor server logs

---

## 🚀 Going Live

1. **Domain Setup:**
   - Purchase domain from registrar
   - Point DNS to hosting provider
   - Wait for DNS propagation (24-48 hours)

2. **SSL Certificate:**
   - Install SSL (usually free with Netlify/Vercel)
   - Verify HTTPS works

3. **Email Configuration:**
   - Set up SPF/DKIM records
   - Test contact form emails
   - Configure email forwarding

4. **Analytics:**
   - Add Google Analytics ID
   - Set up Google Search Console
   - Monitor traffic

5. **Backup & Monitoring:**
   - Set up regular backups
   - Monitor uptime
   - Log server errors

---

## 📈 Maintenance

### Weekly
- Check contact form submissions
- Monitor server logs
- Verify email delivery

### Monthly
- Update dependencies
- Check for security patches
- Review analytics

### Quarterly
- Full security audit
- Performance optimization
- Backup verification

---

Happy Coding! 🎉
