require('dotenv').config(); // To musi być na samym początku!
console.log("Plik .env załadowany");
if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
    throw new Error("Zmienne środowiskowe nie są ustawione lub plik .env nie jest prawidłowy!");
}
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS);
console.log("EMAIL_TO:", process.env.EMAIL_TO);

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS);
    console.log("EMAIL_TO:", process.env.EMAIL_TO);
    // Obsługa metod innych niż POST
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} not allowed.` });
    }

    const { name, email, message } = req.body;

    // Walidacja danych wejściowych
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        // Konfiguracja transportu Nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Twój e-mail z pliku .env
                pass: process.env.EMAIL_PASS, // Hasło aplikacji z pliku .env
            },
        });

        // Opcje wiadomości e-mail
        await transporter.sendMail({
            from: process.env.EMAIL_USER, // Nadawca wiadomości
            to: process.env.EMAIL_TO, // Odbiorca wiadomości (również z pliku .env)
            subject: `Nowa wiadomość od ${name}`,
            text: `Od: ${name} (${email})\n\nTreść:\n${message}`,
        });

        res.status(200).json({ success: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email.' });
    }
}
