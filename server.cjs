const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;  // Używamy zmiennej środowiskowej dla portu

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "dist"))); // Obsługa plików statycznych

app.post("/send-email", async (req, res) => {
  console.log("Otrzymano żądanie POST na /send-email");
  console.log("Body żądania:", req.body);

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    console.error("Niekompletne dane wejściowe:", { name, email, message });
    return res.status(400).json({ error: "All fields are required." });
  }
  console.log("Email user:", process.env.EMAIL_USER);
  console.log("Email pass:", process.env.EMAIL_PASS);
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });


    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO,
      subject: `Nowa wiadomość od ${name}`,
      text: message,
      html: `<p><strong>Imię:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Wiadomość:</strong></p>
             <p>${message}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("E-mail wysłany:", info.response);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Błąd wysyłania e-maila:", error);
    res.status(500).json({ error: "Failed to send email. Try again later." });
  }
});

// Obsługa React Routera
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Uruchamianie serwera
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});


