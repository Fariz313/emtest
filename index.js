const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// POST route to send emails
app.get('/send-email', (req, res) => {
    const { to, subject, text } = req.body;

    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'devcubiconia@gmail.com', // your email address
            pass: 'phwl hpge pekn kayg' // your password
        }
    });

    // Setup email data with unicode symbols
    const mailOptions = {
        from: 'devcubiconia@gmail.com', // sender address
        to: 'fariz313.akbar@gmail.com',
        subject :"sub", // Subject line
        text : "prod plain text body"
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Failed to send email');
        } else {
            console.log('Email sent: %s', info.messageId);
            res.send('Email sent successfully');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
