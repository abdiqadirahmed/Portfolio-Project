// sendEmail.js

const nodemailer = require('nodemailer');

// Function to send an email
async function sendEmail(recipient, subject, message) {
    // Create a transporter with OAuth2
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'zamqadiro@gmail.com',
            clientId: 'zamqadiro@gmail.com',
            clientSecret: 'zamqadiro@gmail.com',
            refreshToken: 'zamqadiro@gmail.com',
        }
    });

    // Setup email data
    let mailOptions = {
        from: 'zamqadiro@gmail.com', // Change this to a valid email address
        to: recipient,
        subject: subject,
        text: message
    };

    // Send email
    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return info.response;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

module.exports = sendEmail;

