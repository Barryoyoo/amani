# Email Setup Guide for Armani Luxe Spa

## Setup Instructions

### For Gmail Users:

1. **Enable 2-Factor Authentication:**
   - Go to https://myaccount.google.com/
   - Click on "Security" in the left sidebar
   - Enable "2-Step Verification"

2. **Generate App Password:**
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Windows Computer" (or your device)
   - Google will generate a 16-character password
   - Copy this password

3. **Update .env file:**
   - Open `backend/.env`
   - Replace `your-email@gmail.com` with your Gmail address
   - Replace `your-app-password-here` with the 16-character password from step 2
   - Make sure OWNER_EMAIL matches your email

### Example .env file:
```
EMAIL_USER=barrack@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
OWNER_EMAIL=barrack@gmail.com
PORT=4000
FRONTEND_URL=http://localhost:3000
```

**Note:** Make sure there are no spaces at the beginning or end of values.

## How It Works

### Contact Form:
1. User fills out the contact form and clicks "Send"
2. Form data is sent to `POST /api/contact`
3. Backend sends two emails:
   - **To Owner:** Full contact details for follow-up
   - **To User:** Confirmation that message was received

### Booking Form:
1. User completes the booking form and clicks "Book"
2. Form data is sent to `POST /api/bookings`
3. Backend sends two emails:
   - **To Owner:** Booking details for scheduling
   - **To User:** Confirmation with booking details

## Testing

1. **Start backend:**
   ```bash
   cd backend
   npm run dev
   ```

2. **Start frontend (in another terminal):**
   ```bash
   cd frontend
   npm run dev
   ```

3. **Test the contact form:**
   - Go to http://localhost:3000/contact
   - Fill in the form and submit
   - Check your email for confirmation

4. **Test the booking form:**
   - Go to http://localhost:3000/booking
   - Fill in the booking form
   - Check your email for confirmation

## Troubleshooting

### "Email failed to send" error:
- Check that EMAIL_USER and EMAIL_PASSWORD are correct in .env
- Verify that 2-Factor Authentication is enabled on Gmail
- Verify that the App Password was generated correctly
- Make sure backend has restarted after updating .env

### "Invalid email address" error:
- Check that OWNER_EMAIL is a valid email format
- Make sure there are no extra spaces

### Emails not received:
- Check spam/junk folder
- Wait a few moments (emails can take time)
- Check browser console for errors
- Check backend console logs

## For Production Deployment

1. **Never commit .env file** - add it to .gitignore
2. **Use environment variables** in your hosting provider (Vercel, Railway, Heroku, etc.)
3. **Use a transactional email service** for better reliability:
   - SendGrid
   - Mailgun
   - AWS SES
   - Brevo (formerly Sendinblue)

## Example Production Setup (SendGrid):

```javascript
// In emailService.js
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY
  }
})
```
