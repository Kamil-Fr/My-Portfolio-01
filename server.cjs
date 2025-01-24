// const express = require('express');
// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
// const bodyParser = require('body-parser');

// dotenv.config();

// const app = express();
// const port = process.env.PORT || 5000;

// // JSON parsing middleware
// app.use(bodyParser.json());

// // Creating a transporter for sending emails
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.EMAIL_USER, 
//         pass: process.env.EMAIL_PASS, 
//     },
// });

// // Endpoint for form handling
// app.post('/send-email', async (req, res) => {
//     const { name, email, message } = req.body;

//     try {
//         await transporter.sendMail({
//             from: process.env.EMAIL_USER,
//             to: process.env.EMAIL_USER, 
//             subject: `New message from ${name}`,
//             text: `You have a new message from ${name} (${email}):\n\n${message}`,
//         });

//         res.status(200).json({ message: 'Email sent successfully!' });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).json({ error: 'An error occurred while sending the email.' });
//     }
// });

// // Starting the server
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

