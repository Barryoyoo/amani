# Quick Start - Email Setup

## Step 1: Configure Email in `.env`

1. Open `backend/.env`
2. Get your Gmail App Password:
   - Go to https://myaccount.google.com/apppasswords
   - Enable 2-Factor Authentication if not already done
   - Select "Mail" and "Windows Computer"
   - Copy the 16-character password

3. Update `.env`:
```
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
OWNER_EMAIL=your-gmail@gmail.com
```

## Step 2: Start Backend

```bash
cd backend
npm install  # if not done already
npm run dev
```

You should see: `🧖 Amani Luxe Spa Server running on port 4000`

## Step 3: Start Frontend (in another terminal)

```bash
cd frontend
npm run dev
```

You should see: `Local:   http://localhost:3000/`

## Step 4: Test Contact Form

1. Go to http://localhost:3000/contact
2. Fill in the form:
   - Name: Your name
   - Email: your-email@gmail.com (can be different from EMAIL_USER)
   - Phone: +254 700 000 000
   - Message: Test message
3. Click "Send Message"
4. Check your email (owner receives all contacts, user gets confirmation)

## Step 5: Test Booking Form

1. Go to http://localhost:3000/booking
2. Fill in all 3 steps:
   - Step 1: Select a service
   - Step 2: Enter date/time/therapist
   - Step 3: Enter your details
3. Click "Complete Booking"
4. Check your email for confirmation

## Expected Emails

### Contact Form Emails:
- **To OWNER_EMAIL:** "New Contact Form Submission from [Name]"
- **To User Email:** "We received your message - Armani Luxe Spa"

### Booking Form Emails:
- **To OWNER_EMAIL:** "New Booking from [Name]"
- **To User Email:** "Booking Confirmation - Armani Luxe Spa"

## Troubleshooting

If emails don't arrive:
1. Check backend console for errors
2. Verify EMAIL_USER and EMAIL_PASSWORD in .env
3. Check spam/junk folder
4. Wait a few seconds (emails take time)
5. Restart backend after changing .env

See `EMAIL_SETUP.md` for detailed instructions.
