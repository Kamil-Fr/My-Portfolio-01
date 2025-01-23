const nodemailer = require('nodemailer');

// Funkcja handler dla API Vercel
export default async function handler(req, res) {
    if (req.method === 'OPTIONS') {
        // Obsługa preflight dla CORS
        res.setHeader('Access-Control-Allow-Origin', '*'); // Dostosuj do swojej domeny w produkcji
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Only POST requests are allowed' });
    }

    const { name, email, message } = req.body;

    // Sprawdź, czy wszystkie dane są dostarczone
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        // Tworzenie transportera Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Twoje dane logowania do Gmaila
                pass: process.env.EMAIL_PASS, // Hasło aplikacji
            },
        });

        // Opcje wiadomości
        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_TO, // Odbiorca
            subject: `New message from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
                   <p><strong>Email:</strong> ${email}</p>
                   <p><strong>Message:</strong> ${message}</p>`,
        };

        // Wysyłanie maila
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send email. Please try again later.' });
    }
}
