import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // Twój email (np. Gmail)
                pass: process.env.EMAIL_PASS, // Hasło lub App Password
            },
            // debug: true,
        });

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_TO, // Odbiorca (Twój email)
            subject: `New message from ${name}`,
            text: message,
            html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email. Please try again later." });
    }
}
