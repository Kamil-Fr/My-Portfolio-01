import sendgrid from '@sendgrid/mail';

// Ustaw klucz API z SendGrid
sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        try {
            // Wyślij e-mail
            await sendgrid.send({
                to: process.env.EMAIL_USER, // Twój adres e-mail
                from: email, // Twój adres e-mail, z którego wysyłasz
                subject: `New message from ${name}`,
                text: `Message from ${name} (${email}):\n\n${message}`,
            });

            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
