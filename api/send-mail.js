// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { name, email, message } = req.body;

//         try {
//             // Transport configuration for nodemailer
//             const transporter = nodemailer.createTransport({
//                 service: 'gmail',
//                 auth: {
//                     user: process.env.EMAIL_USER,
//                     pass: process.env.EMAIL_PASS,
//                 },
//             });

//             // Message settings
//             const mailOptions = {
//                 from: email,
//                 to: process.env.EMAIL_TO,
//                 subject: `Nowa wiadomość od ${name}`,
//                 text: message,
//             };

//             // Sending a message
//             await transporter.sendMail(mailOptions);
//             res.status(200).json({ success: true, message: 'Email sent successfully!' });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ success: false, message: 'Failed to send email.' });
//         }
//     } else {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).json({ message: `Method ${req.method} not allowed` });
//     }
// }

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: `"${name}" <${process.env.EMAIL_USER}>`, // ustalamy poprawnego nadawcę
                to: process.env.EMAIL_TO,
                subject: `Nowa wiadomość od ${name}`,
                replyTo: email, // ważne: pozwala odpowiedzieć na maila użytkownika
                text: `
Otrzymałeś nową wiadomość z formularza kontaktowego:

Imię i nazwisko: ${name}
Adres e-mail: ${email}

Treść wiadomości:
${message}
        `,
            };

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

