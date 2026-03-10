# 🎯 Quick Start Guide - Amani Temptress Spa

## 🚀 Get Started in 2 Minutes

### Step 1: Install Dependencies
```bash
cd "c:\Users\BARRACK OYOO\Music\Spa\Spa"
npm run install-all
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
```
http://localhost:3000
```

✅ Done! Your website is live! 

---

## 📱 Website Structure

### **Page 1: Landing Page** (/)
One beautiful page with everything:
- Hero section with video
- About the spa
- Why choose us (4 features)
- All 8 services with images and details
- 8 therapist team members
- Quick contact section
- Customer testimonials

**Scroll to sections using navigation:**
- Click "Home" → scrolls to hero
- Click "About" → scrolls to about section
- Click "Services" → scrolls to services
- Click "Contact" → goes to contact page

### **Page 2: Contact Page** (/contact)
Professional contact page with:
- Contact form with validation
- Phone, email, location, hours
- Google Maps integration
- Call/Email quick links

---

## 🧭 Navigation Structure

The website has a clean, simple navigation:
- **Desktop Menu**: Home, About, Services links (scroll to page 1 sections) + Contact link (goes to page 2)
- **Mobile Menu**: Hamburger menu with same links
- **Dark Mode Toggle**: Sun/moon icon in top-right

---

## 🎨 Easy Customization

### Update Contact Information:
Find these files and replace the contact details:

**File 1:** `frontend/src/pages/LandingPage.jsx`
- Replace `+254710574902` with your phone
- Replace `amanitemptressspa@gmail.com` with your email
- Replace `Kindaruma Rd, Nairobi` with your location

**File 2:** `frontend/src/pages/ContactPage.jsx`
- Same replacements as above

### Update Services:
**File:** `frontend/src/utils/servicesData.js`

Add/Edit services in this format:
```javascript
{
  name: 'Service Name',
  duration: '90 mins',
  price: '5000',
  image: 'https://image-url.jpg',
  description: 'Description of the service...',
  benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3']
}
```

### Update Team Members:
**File:** `frontend/src/pages/LandingPage.jsx`

Find the team section and update:
```javascript
{ name: 'Name', role: 'Specialization', image: 'photo-url' }
```

### Change Colors (Burgundy & Gold):
**File:** `frontend/tailwind.config.js`

Modify the color values in the `colors` object:
```javascript
burgundy: {
  50: '#fdf5f6',
  900: '#4a1d33',  // Change these values
  // ...
}
gold: {
  50: '#fdf9f1',
  600: '#c29543',  // Change these values
  // ...
}
```

---

## ✨ Key Features

✅ Fully responsive (works on mobile, tablet, desktop)
✅ Dark mode toggle
✅ Smooth scroll animations
✅ Contact form with backend integration
✅ Professional luxury design
✅ SEO optimized
✅ Fast performance
✅ Clean, maintainable code

---

## 📞 Contact Information

**Current (Update these):**
- Phone: +254 710 574 902
- Email: amanitemptressspa@gmail.com
- Location: Kindaruma Rd, Nairobi, Kenya
- Hours: Open Daily 24/7

---

## 🧪 Testing Guide

### On Desktop:
1. Open http://localhost:3000
2. Scroll through the landing page
3. Click "About", "Services" (smooth scroll)
4. Click "Contact" (goes to contact page)
5. Fill out contact form
6. Toggle dark mode (moon icon)
7. Click "Home" to go back

### On Mobile:
1. Press `F12` to open DevTools
2. Click the device icon (top-left of DevTools)
3. Select "iPhone 12" or any mobile device
4. Tap hamburger menu (☰) to see mobile menu
5. Test all features on mobile view

---

## 🎓 For School Presentation

### What to Show:
1. **Landing Page Features**:
   - Full-screen hero video
   - Smooth scroll to sections (About, Services)
   - 8 services with professional cards
   - 8 therapist team profiles
   - Testimonials section

2. **Contact Page**:
   - Professional contact form
   - Google Maps integration
   - Direct phone/email links

3. **Responsive Design**:
   - Desktop view
   - Mobile view (F12 → Device toggle)
   - Tablet view
   - Hamburger menu on mobile

4. **Interactive Features**:
   - Dark mode toggle
   - Smooth scroll animations
   - Hover effects on buttons/cards
   - Form validation

5. **Code Quality**:
   - React components
   - Tailwind CSS styling
   - Responsive design
   - Clean file structure

### Talking Points:
- "This is a single-page landing site with all information in one flow, plus a dedicated contact page"
- "Built with React and Tailwind CSS for modern, responsive design"
- "Smooth animations make it engaging and professional"
- "Contact form integrated with backend API"
- "Dark mode support for better user experience"
- "Fully mobile responsive"

---

## 📁 File Structure

```
Spa/
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── LandingPage.jsx    ← Main landing page
│   │   │   └── ContactPage.jsx    ← Contact page
│   │   ├── components/
│   │   │   ├── Navigation.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
├── backend/
│   ├── index.js
│   └── package.json
└── package.json (root)
```

---

## 🚀 Build & Deploy

### Build for Production:
```bash
npm run build
```

### Deploy to Netlify:
1. Commit code to Git
2. Go to netlify.com
3. Click "New site from Git"
4. Select your repo
5. Build command: `npm run build`
6. Publish folder: `frontend/dist`
7. Deploy!

---

## 💡 Pro Tips

1. Use `<section id="services">` sections on landing page so you can scroll to them
2. All images use `loading="lazy"` for performance
3. Dark mode is handled by CSS classes (add `dark:` to tailwind classes)
4. Contact form validation prevents empty submissions
5. Animations use AOS library for scroll-triggered effects

---

## ✅ You're Ready!

Your **professional 2-page portfolio website** is set up and ready to:
- ✅ Impress your school/teacher
- ✅ Showcase web development skills
- ✅ Look great in your portfolio
- ✅ Demonstrate modern web technologies
- ✅ Function on any device

---

## 🆘 Troubleshooting

### Port Already in Use:
```bash
npm run dev -- --port 3001
```

### Dependencies Not Installing:
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Images Not Loading:
- Check if image URLs are valid
- Replace with your own image URLs
- Use Unsplash or Pexels for free images

### Form Not Submitting:
- Make sure backend is running (`npm run dev`)
- Check browser console for errors (F12)
- Verify API endpoint is correct

---

**Happy coding! Your website is ready to showcase!** 🎉

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
