const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Email transporter configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'info@finoova.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Routes

// Contact form submission
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, phone, message, type } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER || 'info@finoova.com',
      to: 'info@finoova.com',
      subject: `New ${type || 'Contact'} Form Submission - FinoovA`,
      html: `
        <h2>New ${type || 'Contact'} Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>Submitted from FinoovA website</em></p>
      `
    };

    await transporter.sendMail(mailOptions);

    // Send confirmation email to user
    const confirmationMail = {
      from: process.env.EMAIL_USER || 'info@finoova.com',
      to: email,
      subject: 'Thank you for contacting FinoovA',
      html: `
        <h2>Thank you for your interest in FinoovA!</h2>
        <p>Dear ${name},</p>
        <p>We have received your ${type?.toLowerCase() || 'inquiry'} and will get back to you within 24 hours.</p>
        <p>Our team is excited to help you transform your financial operations with our AI-powered platform.</p>
        <br>
        <p>Best regards,</p>
        <p>The FinoovA Team</p>
        <hr>
        <p><em>FinoovA - Simplify Finance. Amplify Growth.</em></p>
      `
    };

    await transporter.sendMail(confirmationMail);

    res.status(200).json({ 
      success: true, 
      message: 'Form submitted successfully! We will contact you soon.' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again later.' 
    });
  }
});

// Newsletter subscription
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER || 'info@finoova.com',
      to: 'info@finoova.com',
      subject: 'New Newsletter Subscription - FinoovA',
      html: `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        <p><em>Subscribed from FinoovA website</em></p>
      `
    };

    await transporter.sendMail(mailOptions);

    // Send welcome email
    const welcomeMail = {
      from: process.env.EMAIL_USER || 'info@finoova.com',
      to: email,
      subject: 'Welcome to FinoovA Newsletter!',
      html: `
        <h2>Welcome to FinoovA!</h2>
        <p>Thank you for subscribing to our newsletter.</p>
        <p>You'll receive the latest insights on financial technology, compliance updates, and product announcements.</p>
        <br>
        <p>Stay tuned for exciting updates!</p>
        <p>The FinoovA Team</p>
      `
    };

    await transporter.sendMail(welcomeMail);

    res.status(200).json({ 
      success: true, 
      message: 'Successfully subscribed to newsletter!' 
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to subscribe. Please try again later.' 
    });
  }
});

// Demo request
app.post('/api/demo', async (req, res) => {
  try {
    const { name, email, company, phone, employees, useCase } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER || 'info@finoova.com',
      to: 'info@finoova.com',
      subject: 'New Demo Request - FinoovA',
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company Size:</strong> ${employees} employees</p>
        <p><strong>Use Case:</strong> ${useCase}</p>
        <hr>
        <p><em>Demo requested from FinoovA website</em></p>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Demo request submitted! We will schedule your personalized demo soon.' 
    });
  } catch (error) {
    console.error('Error processing demo request:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to submit demo request. Please try again later.' 
    });
  }
});

// Download brochure
app.post('/api/download', async (req, res) => {
  try {
    const { email, type } = req.body;

    const mailOptions = {
      from: process.env.EMAIL_USER || 'info@finoova.com',
      to: email,
      subject: `Your FinoovA ${type} Download`,
      html: `
        <h2>Thank you for your interest in FinoovA!</h2>
        <p>Please find your requested ${type.toLowerCase()} attached.</p>
        <p>If you have any questions or would like to schedule a demo, please don't hesitate to contact us.</p>
        <br>
        <p>Best regards,</p>
        <p>The FinoovA Team</p>
      `,
      attachments: [
        {
          filename: `FinoovA-${type.replace(' ', '-')}.pdf`,
          content: 'Sample PDF content - Replace with actual file',
          contentType: 'application/pdf'
        }
      ]
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: `${type} sent to your email successfully!` 
    });
  } catch (error) {
    console.error('Error sending download:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send download. Please try again later.' 
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'FinoovA API is running' });
});

app.listen(PORT, () => {
  console.log(`FinoovA API server running on port ${PORT}`);
});