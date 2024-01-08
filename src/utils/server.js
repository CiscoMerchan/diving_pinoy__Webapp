// server.js
require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// Function to send email
const sendEmail = ({ email, name, lastName, message }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
      user: process.env.EMAIL_SERVICE_API_KEY,
      pass: process.env.EMAIL_SERVICE_SECRET,
    });
  };

  const mailOptions = {
    from: email,
    to: process.env.MY_EMAIL,
    subject: 'Subject of the email',
    text: `Name: ${name}\nLast Name: ${lastName}\nMessage: ${message}`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject('Error sending email');
      } else {
        resolve('Email sent: ' + info.response);
      }
    });
  });


app.post('/api/send-email', async (req, res) => {
  try {
    const { email, name, lastName, message } = req.body;
    await sendEmail({ email, name, lastName, message });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
