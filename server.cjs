const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;  // Używamy zmiennej środowiskowej dla portu

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "dist"))); // Obsługa plików statycznych

// Endpoint do obsługi wysyłania e-maili
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  // Walidacja danych wejściowych
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Konfiguracja transportera nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Użyj TLS
      auth: {
        user: process.env.EMAIL_USER, // Twój e-mail
        pass: process.env.EMAIL_PASS, // Twoje hasło aplikacji
      },
    });

    // Opcje e-maila
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO, // Odbiorca
      subject: `Nowa wiadomość od ${name}`,
      text: message,
      html: `<p><strong>Imię:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Wiadomość:</strong></p>
             <p>${message}</p>`,
    };

    // Wysyłanie e-maila
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email. Try again later." });
  }
});

// Obsługa React Routera
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Uruchamianie serwera
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
