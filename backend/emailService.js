const nodemailer = require('nodemailer')

// Configure your email service here
// For Gmail: Use an App Password (not your regular password)
// For other email providers: Configure accordingly

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'bodoro2017@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'perv gynx puui fuqj'
  }
})

// Send contact form email
const sendContactEmail = async (contactData) => {
  try {
    const { name, email, phone, message } = contactData
    const ownerEmail = process.env.OWNER_EMAIL || 'amanitemtressspa@gmail.com'

    // Email to owner
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: ownerEmail,
      subject: `New Contact Form Submission from ${name}`,
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0;">
    <div style="background: linear-gradient(135deg, #8b2e3f 0%, #d4af37 100%); padding: 40px 20px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 1px;">NEW CONTACT FORM SUBMISSION</h1>
      <div style="width: 80px; height: 3px; background: linear-gradient(to right, #ffffff, rgba(255,255,255,0.3)); margin: 15px auto;"></div>
    </div>
    
    <div style="padding: 40px 30px;">
      <div style="margin-bottom: 30px;">
        <div style="font-size: 16px; font-weight: 600; color: #8b2e3f; margin-bottom: 15px; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Contact Information</div>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <div style="margin: 8px 0; color: #333333; font-size: 14px;"><strong style="color: #8b2e3f;">Name:</strong> ${name}</div>
          <div style="margin: 8px 0; color: #333333; font-size: 14px;"><strong style="color: #8b2e3f;">Email:</strong> <a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a></div>
          <div style="margin: 8px 0; color: #333333; font-size: 14px;"><strong style="color: #8b2e3f;">Phone:</strong> ${phone || 'Not provided'}</div>
        </div>
      </div>
      
      <div style="margin-bottom: 30px;">
        <div style="font-size: 16px; font-weight: 600; color: #8b2e3f; margin-bottom: 15px; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Message</div>
        <div style="background-color: #fafafa; border-left: 4px solid #d4af37; padding: 20px; border-radius: 4px;">
          <p style="margin: 0; color: #555555; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word;">${message.replace(/\n/g, '<br>')}</p>
        </div>
      </div>
    </div>
    
    <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
      <div style="font-size: 12px; color: #888888; margin: 5px 0;">This email was sent from your contact form</div>
      <div style="font-size: 12px; color: #888888; margin: 5px 0;">Submitted on: ${new Date().toLocaleString()}</div>
      <div style="font-size: 12px; color: #d4af37; margin-top: 10px;">Amani Temptress Spa</div>
    </div>
  </div>
</body>
</html>`
    })

    // Confirmation email to client
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We received your message - Amani temptress Spa',
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0;">
    <div style="background: linear-gradient(135deg, #8b2e3f 0%, #d4af37 100%); padding: 40px 20px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 1px;">THANK YOU FOR CONTACTING US!</h1>
      <div style="width: 80px; height: 3px; background: linear-gradient(to right, #ffffff, rgba(255,255,255,0.3)); margin: 15px auto;"></div>
    </div>
    
    <div style="padding: 40px 30px;">
      <div style="font-size: 16px; color: #333333; line-height: 1.6; margin-bottom: 20px;">
        <p>Dear <strong>${name}</strong>,</p>
        <p>Thank you for reaching out to us. We have received your message and our team will review it shortly. We appreciate your interest and will get back to you as soon as possible.</p>
      </div>
      
      <div style="margin-bottom: 30px;">
        <div style="font-size: 16px; font-weight: 600; color: #8b2e3f; margin-bottom: 15px; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Your Message</div>
        <div style="background-color: #fafafa; border-left: 4px solid #d4af37; padding: 20px; border-radius: 4px;">
          <p style="margin: 0; color: #555555; line-height: 1.6; white-space: pre-wrap; word-wrap: break-word;">${message.replace(/\n/g, '<br>')}</p>
        </div>
      </div>
      
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; text-align: center; margin: 30px 0;">
        <p style="font-size: 14px; color: #666666; margin: 0;">If you have any urgent matters, please don't hesitate to call us or visit our location.</p>
      </div>
    </div>
    
    <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
      <div style="font-weight: 600; color: #8b2e3f; font-size: 14px;">Amani Temptress Spa</div>
      <div style="font-size: 12px; color: #888888; margin: 5px 0;">Kilimani, Nairobi</div>
      <div style="font-size: 12px; color: #888888; margin: 5px 0;">Phone: +254 710 574 902</div>
      <div style="font-size: 12px; color: #888888; margin: 5px 0;">Email: <a href="mailto:amanitemptressspa@gmail.com" style="color: #d4af37; text-decoration: none;">amanitemptressspa@gmail.com</a></div>
    </div>
  </div>
</body>
</html>`
    })

    return { success: true, message: 'Message sent successfully' }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error: error.message }
  }
}

// Send booking confirmation email
const sendBookingEmail = async (bookingData) => {
  try {
    const { name, email, phone, service, date, time, therapist, notes } = bookingData
    const ownerEmail = process.env.OWNER_EMAIL || 'amanitemptressspa@gmail.com'

    // Email to owner
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: ownerEmail,
      subject: `New Booking from ${name}`,
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0;">
    <div style="background: linear-gradient(135deg, #8b2e3f 0%, #d4af37 100%); padding: 40px 20px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 1px;">NEW SPA BOOKING</h1>
      <div style="width: 80px; height: 3px; background: linear-gradient(to right, #ffffff, rgba(255,255,255,0.3)); margin: 15px auto;"></div>
    </div>
    
    <div style="padding: 40px 30px;">
      <div style="margin-bottom: 30px;">
        <div style="font-size: 16px; font-weight: 600; color: #8b2e3f; margin-bottom: 15px; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Client Information</div>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 15px;">
          <div style="margin: 8px 0; color: #333333; font-size: 14px;"><strong style="color: #8b2e3f;">Name:</strong> ${name}</div>
          <div style="margin: 8px 0; color: #333333; font-size: 14px;"><strong style="color: #8b2e3f;">Email:</strong> <a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a></div>
          <div style="margin: 8px 0; color: #333333; font-size: 14px;"><strong style="color: #8b2e3f;">Phone:</strong> ${phone}</div>
        </div>
      </div>
      
      <div style="margin-bottom: 30px;">
        <div style="font-size: 16px; font-weight: 600; color: #8b2e3f; margin-bottom: 15px; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Booking Details</div>
        <div style="background-color: #fff9e6; padding: 15px; border-left: 4px solid #d4af37; border-radius: 4px;">
          <p style="margin: 5px 0; color: #333333;"><strong style="color: #8b2e3f;">Service:</strong> ${service}</p>
          <p style="margin: 5px 0; color: #333333;"><strong style="color: #8b2e3f;">Date:</strong> ${date}</p>
          <p style="margin: 5px 0; color: #333333;"><strong style="color: #8b2e3f;">Time:</strong> ${time}</p>
          <p style="margin: 5px 0; color: #333333;"><strong style="color: #8b2e3f;">Preferred Therapist:</strong> ${therapist || 'Not specified'}</p>
          ${notes ? `<p style="margin: 5px 0; color: #333333;"><strong style="color: #8b2e3f;">Special Requests:</strong> ${notes}</p>` : ''}
        </div>
      </div>
    </div>
    
    <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
      <div style="font-size: 12px; color: #888888; margin: 5px 0;">Booking received on: ${new Date().toLocaleString()}</div>
      <div style="font-size: 12px; color: #d4af37; font-weight: 600; margin-top: 10px;">Amani Temptress Spa</div>
    </div>
  </div>
</body>
</html>`
    })

    // Confirmation email to client
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Booking Confirmation - Armani Luxe Spa',
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e0e0e0;">
    <div style="background: linear-gradient(135deg, #8b2e3f 0%, #d4af37 100%); padding: 40px 20px; text-align: center;">
      <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 1px;">YOUR BOOKING IS CONFIRMED!</h1>
      <div style="width: 80px; height: 3px; background: linear-gradient(to right, #ffffff, rgba(255,255,255,0.3)); margin: 15px auto;"></div>
    </div>
    
    <div style="padding: 40px 30px;">
      <div style="font-size: 16px; color: #333333; line-height: 1.6; margin-bottom: 20px;">
        <p>Dear <strong>${name}</strong>,</p>
        <p>Thank you for choosing Armani Luxe Spa! We're thrilled to confirm your booking. Our team is looking forward to providing you with an exceptional spa experience.</p>
      </div>
      
      <div style="margin-bottom: 30px;">
        <div style="font-size: 16px; font-weight: 600; color: #8b2e3f; margin-bottom: 15px; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Your Booking Details</div>
        <div style="background: linear-gradient(135deg, #fff9e6 0%, #fffaf0 100%); padding: 20px; border-left: 4px solid #d4af37; border-radius: 4px;">
          <p style="margin: 10px 0; color: #333333;"><strong>Service:</strong> ${service}</p>
          <p style="margin: 10px 0; color: #333333;"><strong>Date:</strong> ${date}</p>
          <p style="margin: 10px 0; color: #333333;"><strong>Time:</strong> ${time}</p>
          <p style="margin: 10px 0; color: #333333;"><strong>Therapist:</strong> ${therapist || 'To be assigned by our team'}</p>
          ${notes ? `<p style="margin: 10px 0; color: #333333;"><strong>Special Requests:</strong> ${notes}</p>` : ''}
        </div>
      </div>
      
      <div style="margin-bottom: 30px;">
        <div style="font-size: 16px; font-weight: 600; color: #8b2e3f; margin-bottom: 15px; border-bottom: 2px solid #d4af37; padding-bottom: 10px;">Contact Us</div>
        <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px;">
          <p style="margin: 8px 0; font-size: 14px; color: #333333;"><strong>Phone:</strong> <a href="tel:+254710574902" style="color: #d4af37; text-decoration: none;">+254 710 574 902</a></p>
          <p style="margin: 8px 0; font-size: 14px; color: #333333;"><strong>Email:</strong> <a href="mailto:amanitemptressspa@gmail.com" style="color: #d4af37; text-decoration: none;">amanitemptressspa@gmail.com</a></p>
          <p style="margin: 8px 0; font-size: 14px; color: #333333;"><strong>Location:</strong> Kilimani, Nairobi</p>
        </div>
      </div>
      
      <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 30px 0;">
        <p style="font-size: 14px; color: #666666; margin: 0;"><strong>📍 Please arrive 10 minutes early</strong></p>
        <p style="font-size: 14px; color: #666666; margin: 10px 0;">If you need to reschedule or have any questions, please contact us at your earliest convenience.</p>
      </div>
    </div>
    
    <div style="background-color: #f5f5f5; padding: 20px; text-align: center; border-top: 1px solid #e0e0e0;">
      <div style="font-weight: 600; color: #8b2e3f; font-size: 14px;">Amani Temptress Spa</div>
      <div style="font-size: 12px; color: #888888; margin: 5px 0;">Where Luxury Meets Wellness</div>
      <div style="font-size: 12px; color: #888888; margin-top: 10px;">We can't wait to pamper you!</div>
    </div>
  </div>
</body>
</html>`
    })

    return { success: true, message: 'Booking confirmation sent' }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error: error.message }
  }
}

module.exports = {
  sendContactEmail,
  sendBookingEmail,
  transporter
}