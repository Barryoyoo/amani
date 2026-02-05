# 🎯 Quick Start & Customization Guide

## 🏁 Quick Start (5 Minutes)

### 1. Start Backend
```powershell
cd backend
npm install
npm run dev
```
Backend runs on `http://localhost:4000`

### 2. Start Frontend (New Terminal)
```powershell
cd frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:3000`

### 3. View Website
Open `http://localhost:3000` in your browser

---

## 🎨 Customization Guide

### 1. Update Brand Name & Info

**Frontend** (`frontend/src/components/Navigation.jsx`)
```jsx
<Link to="/" className="text-2xl font-serif font-bold text-gold-700">
  Armani Luxe  // Change to your spa name
</Link>
```

**Backend** (`backend/index.js`)
```javascript
app.get('/api/spa/info', (req, res) => {
  res.json({
    name: 'Armani Luxe Spa',  // Change here
    location: 'Kilimani, Nairobi, Kenya',
    phone: '+254 700 000 000',
    email: 'info@armaniluxespa.com',
    // ...
  })
})
```

### 2. Update Contact Information

**Navigation Footer** (`frontend/src/components/Navigation.jsx`)
```jsx
<a href="tel:+254700000000">+254 700 000 000</a>  // Update phone
<a href="mailto:info@armaniluxespa.com">Email</a>  // Update email
```

**Contact Page** (`frontend/src/pages/Contact.jsx`)
```jsx
<div className="text-gray-700">
  <p>Kilimani, Nairobi, Kenya</p>  // Update address
</div>
<a href="tel:+254700000000">+254 700 000 000</a>  // Update phone
```

### 3. Update Services & Pricing

**Services Page** (`frontend/src/pages/Services.jsx`)
```javascript
const services = [
  {
    name: 'Swedish Massage',
    duration: '60 mins',
    price: '3,500',  // Update price in Ksh
    description: 'Update description here...',
    benefits: ['Update', 'benefits', 'here']
  },
  // Add more services
]
```

**Backend** (`backend/index.js`)
```javascript
app.get('/api/services', (req, res) => {
  const services = [
    {
      name: 'Swedish Massage',
      price: 3500,  // Update price
      // ...
    }
  ]
  res.json(services)
})
```

### 4. Update Testimonials

**Home Page** (`frontend/src/pages/Home.jsx`)
```javascript
{[
  { name: 'Sarah Kariuki', text: 'Update testimonial...' },
  { name: 'James Omondi', text: 'Update testimonial...' },
  // Add more testimonials
].map((testimonial, idx) => (
  // Component
))}
```

### 5. Update Team Members

**About Page** (`frontend/src/pages/About.jsx`)
```javascript
{[
  { 
    name: 'Amara Johnson', 
    role: 'Spa Director', 
    image: 'update-image-url' 
  },
  // Update team info
].map((member, idx) => (
  // Component
))}
```

### 6. Update Colors

**Tailwind Config** (`frontend/tailwind.config.js`)
```javascript
theme: {
  extend: {
    colors: {
      gold: {
        700: '#b8825a',  // Update gold shade
      },
      cream: {
        50: '#fffdf9',  // Update cream shade
      }
    }
  }
}
```

**CSS Variables** (`frontend/src/index.css`)
```css
body {
  background: #fdfbf7;  /* Update background */
  color: #2d2d2d;      /* Update text color */
}
```

### 7. Update Blog Posts

**Blog Page** (`frontend/src/pages/Blog.jsx`)
```javascript
const posts = [
  {
    title: 'Update blog title',
    author: 'Your Name',
    date: 'Jan 15, 2025',
    category: 'Wellness',
    image: 'update-image-url',
    excerpt: 'Update excerpt...'
  },
  // Add more posts
]
```

### 8. Update Gallery Images

**Gallery Page** (`frontend/src/pages/Gallery.jsx`)
```javascript
const images = [
  'update-image-url-1',
  'update-image-url-2',
  // Add your spa photos
]
```

### 9. Update Hours of Operation

**Footer** (`frontend/src/components/Footer.jsx`)
```jsx
<li className="text-cream-200">
  <span className="text-gold-500">🕐</span> Open Daily: 9AM - 9PM  // Update hours
</li>
```

### 10. Update Packages

**Packages Page** (`frontend/src/pages/Packages.jsx`)
```javascript
const packages = [
  {
    name: 'Relaxation Escape',
    price: '8,500',  // Update price
    duration: '2 hours',
    services: ['Update', 'services', 'here']
  },
  // Add more packages
]
```

---

## 📱 Using Real Images

### Replace Placeholder Images

1. **Hero Image** (Home page)
   - File: `frontend/src/pages/Home.jsx`
   - Search for: `backgroundImage: 'url(https://images.unsplash.com/...'`
   - Replace with your image URL

2. **Service Images**
   - File: `frontend/src/pages/Home.jsx` and `Services.jsx`
   - Replace image URLs with your spa photos

3. **Team Images**
   - File: `frontend/src/pages/About.jsx`
   - Update team member image URLs

4. **Gallery Images**
   - File: `frontend/src/pages/Gallery.jsx`
   - Add all spa facility photos

### Image Sources
- Unsplash: `https://unsplash.com/`
- Pexels: `https://www.pexels.com/`
- Your own photos: Upload to Cloudinary/AWS S3

---

## 🔌 Integrate APIs & Services

### 1. Add Google Maps

**Contact Page** - Replace iframe src:
```jsx
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.xxx"
  // Get embed code from Google Maps
/>
```

### 2. Setup Email Service

Install Nodemailer:
```bash
npm install nodemailer
```

In `backend/index.js`:
```javascript
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})
```

### 3. Add Payment Integration

#### Stripe
```bash
npm install stripe
```

```javascript
const stripe = require('stripe')(process.env.STRIPE_KEY)

app.post('/api/payment', async (req, res) => {
  // Payment logic
})
```

#### M-Pesa
```bash
npm install mpesa-api
```

---

## 🚀 Going Live Checklist

- [ ] Updated all contact information
- [ ] Changed all placeholder images
- [ ] Updated pricing in local currency (KSH)
- [ ] Customized testimonials
- [ ] Updated team information
- [ ] Set up email service
- [ ] Set up payment gateway
- [ ] Configured Google Maps
- [ ] Added Google Analytics
- [ ] Set up SSL certificate
- [ ] Configured domain name
- [ ] Tested all forms
- [ ] Tested booking system
- [ ] Mobile responsiveness verified
- [ ] SEO optimized
- [ ] Performance optimized

---

## 🆘 Common Questions

### Q: How do I change the website theme?
**A:** Update `frontend/tailwind.config.js` and `frontend/src/index.css` with your colors.

### Q: Can I add more pages?
**A:** Yes! Create a new file in `frontend/src/pages/` and add a route in `frontend/src/App.jsx`.

### Q: How do I add more services?
**A:** Update the services array in both `frontend/src/pages/Services.jsx` and `backend/index.js`.

### Q: How do I set up the booking system?
**A:** The booking system is ready to go! Connect it to your database for persistent storage.

### Q: How do I deploy this?
**A:** Follow the `DEPLOYMENT_GUIDE.md` for step-by-step instructions.

### Q: Can I accept payments?
**A:** Yes! Integrate Stripe or M-Pesa following the DEPLOYMENT_GUIDE.md

---

## 📚 File Structure Reference

### Key Files to Customize

| File | Purpose |
|------|---------|
| `frontend/src/components/Navigation.jsx` | Header, logo, contact info |
| `frontend/src/components/Footer.jsx` | Footer, links, hours |
| `frontend/src/pages/Home.jsx` | Homepage content |
| `frontend/src/pages/Services.jsx` | Services & pricing |
| `frontend/src/pages/About.jsx` | About, mission, team |
| `frontend/src/pages/Contact.jsx` | Contact info & form |
| `frontend/tailwind.config.js` | Colors & theme |
| `frontend/src/index.css` | Global styles |
| `backend/index.js` | API endpoints |

---

## 💡 Tips

1. **Use your own images** - Replace Unsplash photos with spa photos for better branding
2. **Update metadata** - Change website title in `frontend/index.html`
3. **Add Google Analytics** - Track visitor behavior
4. **Enable HTTPS** - Security is important
5. **Optimize images** - Use compressed images for faster loading
6. **Mobile test** - Always test on mobile devices
7. **Get reviews** - Display real client testimonials
8. **Update regularly** - Add blog posts and news regularly

---

## 🎯 Next Steps

1. **Customize** the website with your information
2. **Test locally** - Make sure everything works
3. **Deploy** following DEPLOYMENT_GUIDE.md
4. **Promote** your website on social media
5. **Monitor** analytics and user feedback
6. **Iterate** and improve based on feedback

---

## 📞 Need Help?

Refer to:
- `PROJECT_GUIDE.md` - Full project documentation
- `DEPLOYMENT_GUIDE.md` - How to deploy
- Code comments in each file

---

**Happy Building! ✨**

Good luck with your Armani Luxe Spa website! 🧖‍♀️💆‍♂️
