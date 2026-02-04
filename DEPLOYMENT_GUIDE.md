# 🚀 Armani Luxe Spa - Deployment Guide

Complete guide for deploying the Armani Luxe Spa website to production.

---

## 📋 Pre-Deployment Checklist

- [ ] All code tested locally
- [ ] Environment variables configured
- [ ] Dependencies updated
- [ ] Build process tested
- [ ] API endpoints verified
- [ ] SSL certificate ready
- [ ] Domain registered
- [ ] DNS configured
- [ ] Database prepared (if using MongoDB/Postgres)
- [ ] Email service configured

---

## 🔧 Build Process

### Frontend Build
```bash
cd frontend
npm install
npm run build
```

This creates an optimized `dist/` folder ready for production.

### Backend Setup
```bash
cd backend
npm install
npm run build  # if applicable
```

---

## 🌍 Hosting Options

### Option 1: Vercel (Frontend) + Render (Backend)

#### Frontend on Vercel
1. Push code to GitHub
2. Connect Vercel to GitHub repo
3. Select `frontend` as root directory
4. Set build command: `npm run build`
5. Set output directory: `dist`
6. Configure environment variables
7. Deploy

#### Backend on Render
1. Create new Web Service on Render
2. Connect GitHub repo
3. Set start command: `npm start`
4. Configure environment variables
5. Deploy

### Option 2: Heroku (Full Stack)

```bash
# Login to Heroku
heroku login

# Create app
heroku create armani-luxe-spa

# Set buildpacks
heroku buildpacks:add heroku/nodejs
heroku buildpacks:add heroku/static

# Add environment variables
heroku config:set NODE_ENV=production

# Deploy
git push heroku main
```

### Option 3: Digital Ocean / AWS / Google Cloud

**Backend on DigitalOcean App Platform**
1. Create new app
2. Connect GitHub repo
3. Select backend directory
4. Configure port (4000)
5. Add environment variables
6. Deploy

**Frontend on Netlify or CloudFront**
1. Deploy built `dist` folder
2. Configure domain
3. Enable HTTPS

---

## 🛠️ Configuration for Production

### Backend (.env.production)
```
NODE_ENV=production
PORT=4000
CORS_ORIGIN=https://www.armaniluxespa.com

# Database
DATABASE_URL=mongodb+srv://user:pass@cluster.mongodb.net/db

# Email Service (Mailgun or SendGrid)
MAILGUN_API_KEY=your_key
MAILGUN_DOMAIN=your_domain

# Payment (Stripe/Mpesa)
STRIPE_SECRET_KEY=your_key
MPESA_API_KEY=your_key

# Security
JWT_SECRET=your_secret
SESSION_SECRET=your_secret
```

### Frontend (.env.production)
```
VITE_API_URL=https://api.armaniluxespa.com
VITE_GOOGLE_MAPS_KEY=your_key
VITE_ANALYTICS_ID=G-XXXXX
```

---

## 🔐 Security Hardening

### SSL/HTTPS
- Get SSL certificate (Let's Encrypt free)
- Force HTTPS redirect
- Add HSTS header

### API Security
- Enable CORS properly
- Add rate limiting
- Validate all inputs
- Use helmet.js
- Add API keys for sensitive endpoints

### Database
- Use environment variables for credentials
- Enable encryption at rest
- Regular backups
- Restrict IP access

---

## 📧 Email Setup (Nodemailer)

### Using Mailgun
```javascript
// backend/utils/email.js
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: process.env.MAILGUN_SMTP_HOST,
  port: 587,
  auth: {
    user: process.env.MAILGUN_USER,
    pass: process.env.MAILGUN_PASS
  }
})

module.exports = transporter
```

---

## 💳 Payment Integration

### Stripe Setup
1. Create Stripe account
2. Get API keys
3. Install Stripe npm package
4. Implement payment flow in backend

```bash
npm install stripe
```

### M-Pesa Integration
1. Register with Safaricom
2. Get API credentials
3. Implement in backend
4. Test in sandbox

---

## 📊 Database Setup (MongoDB Atlas)

1. Create MongoDB Atlas account
2. Create cluster
3. Get connection string
4. Add to environment variables
5. Update backend to use MongoDB

```javascript
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
```

---

## 📱 Domain & DNS

### Register Domain
1. Register at GoDaddy, Namecheap, or similar
2. Set nameservers to hosting provider

### Configure DNS
```
Frontend:
CNAME: www -> your-vercel-deployment.vercel.app

Backend:
A Record: api -> your-backend-ip
```

---

## 🔄 CI/CD Pipeline

### GitHub Actions Example
```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: cd frontend && npm install && npm run build
      - run: cd backend && npm install
      # Deploy steps
```

---

## 📈 Performance Optimization

### Image Optimization
```bash
npm install sharp
```

### Caching Strategy
- Cache static assets (CSS, JS)
- Cache API responses
- Set appropriate Cache-Control headers

### CDN Setup
- Cloudflare or Fastly for CDN
- Serve images from CDN
- Gzip compression enabled

---

## 🧪 Testing Before Production

```bash
# Build test
npm run build

# Install production dependencies
npm install --production

# Run locally
NODE_ENV=production npm start

# Test endpoints
curl http://localhost:4000/api/health
```

---

## 📊 Monitoring & Analytics

### Error Tracking
- Sentry for error monitoring
- Log aggregation

### Analytics
- Google Analytics
- Hotjar for user behavior

### Uptime Monitoring
- Uptime Robot
- StatusPage.io

---

## 🚨 Troubleshooting

### Common Issues

**Port already in use**
```bash
# Kill process on port 4000
lsof -ti:4000 | xargs kill -9
```

**CORS errors**
- Check backend CORS configuration
- Ensure frontend URL is whitelisted

**Database connection issues**
- Verify connection string
- Check IP whitelist in MongoDB Atlas
- Ensure database exists

---

## 📞 Support

For deployment support:
- Check logs: `heroku logs --tail`
- Render dashboard
- Vercel deployment logs

---

**Last Updated**: January 29, 2025
**Version**: 1.0.0

Happy Deploying! 🎉
