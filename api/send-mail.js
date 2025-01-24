// import sendgrid from '@sendgrid/mail';

// // Ustaw klucz API z SendGrid
// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { name, email, message } = req.body;

//         try {
//             // Wyślij e-mail
//             await sendgrid.send({
//                 to: process.env.EMAIL_USER, // Twój adres e-mail
//                 from: email, // Twój adres e-mail, z którego wysyłasz
//                 subject: `New message from ${name}`,
//                 text: `Message from ${name} (${email}):\n\n${message}`,
//             });

//             res.status(200).json({ message: 'Email sent successfully!' });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ error: 'Error sending email' });
//         }
//     } else {
//         res.status(405).json({ error: 'Method Not Allowed' });
//     }
// }



// const nodemailer = require('nodemailer');

// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).send({ message: 'Only POST requests allowed' });
//     }

//     const { name, email, message } = req.body;

//     // Sprawdzamy, czy wszystkie dane zostały dostarczone
//     if (!name || !email || !message) {
//         return res.status(400).send('All fields are required!');
//     }

//     try {
//         console.log('Preparing to send email...');

//         // Tworzymy transporter Nodemailer
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: process.env.EMAIL_USER, // Twój adres e-mail
//                 pass: process.env.EMAIL_PASS, // Hasło aplikacji (Upewnij się, że masz włączone "Less secure apps" w ustawieniach Google, lub używasz hasła aplikacji)
//             },
//             debug: true,
//         });

//         // Konfiguracja wiadomości e-mail
//         const mailOptions = {
//             from: email,
//             to: process.env.EMAIL_USER, // Twój e-mail
//             subject: `Message from ${name}`,
//             text: `You received a message from your website contact form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
//         };

//         // Logowanie do testowania
//         console.log('Sending email...');

//         // Wysyłamy wiadomość
//         await transporter.sendMail(mailOptions);
//         console.log('Email sent successfully.');

//         res.status(200).send('Email sent successfully!');
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).send('Failed to send email.');
//     }
// }



import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        try {
            // Konfiguracja transportu dla nodemailer
            const transporter = nodemailer.createTransport({
                service: 'gmail', // lub inny dostawca SMTP
                auth: {
                    user: process.env.EMAIL_USER, // Twój email
                    pass: process.env.EMAIL_PASS, // Hasło lub token aplikacji
                },
            });

            // Ustawienia wiadomości
            const mailOptions = {
                from: email,
                to: process.env.EMAIL_TO, // Email odbiorcy
                subject: `Nowa wiadomość od ${name}`,
                text: message,
            };

            // Wysyłanie wiadomości
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true, message: 'Email sent successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Failed to send email.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
}
