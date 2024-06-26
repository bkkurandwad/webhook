const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

app.use(express.json());

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'bhargavkurandwad@gmail.com',
    pass: 'auqokmgiwwprxypm'
  }
});

// Endpoint to send an email
async function sendMail (mailOptions) {
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: %s', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

module.exports = {
    sendMail,
  };

