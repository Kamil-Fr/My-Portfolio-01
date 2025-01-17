// Import required libraries
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // Loading environment variables
const path = require('path');

// Create an instance of the Express app
const app = express();

// Port on which the app will run
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Handle CORS requests
app.use(bodyParser.json()); // Handle JSON in request bodies
app.use(express.static(path.join(__dirname, 'dist'))); // Serve static files from the Vite build folder

// POST endpoint for sending emails
app.post('/send-email', async (req, res) => {
  console.log('Received POST request on /send-email');
  console.log('Request body:', req.body);

  const { name, email, message } = req.body;

  // Check if all required fields are provided
  if (!name || !email || !message) {
    console.error('Incomplete input data:', { name, email, message });
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Create a transporter for sending the email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com', // You can change the host if you use another provider
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.EMAIL_USER, // Your email (e.g., Gmail)
      pass: process.env.EMAIL_PASS, // Your email password
    },
  });

  // Set up the email content
  const mailOptions = {
    from: `"${name}" <${email}>`, // Sender's email
    to: process.env.EMAIL_TO, // Recipient's email
    subject: `New message from ${name}`, // Subject of the email
    text: message, // Plain text message
    html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong></p><p>${message}</p>`, // HTML message
  };

  // Send the email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

// Handle React Router for client-side routing in SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
