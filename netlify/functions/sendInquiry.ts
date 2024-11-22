import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

const handler: Handler = async (event) => {
    try {
        const { name, email, message } = JSON.parse(event.body || '{}');

        // Nodemailer transporter configuration
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'bookingsrealestate@gmail.com', // Replace with your email
                pass: 'eivu qjpv xcos fwaz',          // Replace with your app password
            },
        });

        // Email to the company
        const companyMailOptions = {
            from: email,
            to: 'bookingsrealestate@gmail.com', // Replace with your email
            subject: `Inquiry from ${name}`,
            text: `Message: ${message}\n\nEmail: ${email}`,
        };

        // Email to the user
        const userMailOptions = {
            from: 'bookingsrealestate@gmail.com', // Replace with your email
            to: email,
            subject: `Thank you for your inquiry, ${name}!`,
            text: `Hi ${name},

Thank you for reaching out to MR Transport! We have received your inquiry and will get back to you as soon as possible.

Here is a copy of your message for your reference:
---
${message}
---

If you have any urgent questions, feel free to contact us directly at bookingsrealestate@gmail.com.

Best regards,  
The MR Transport Team
`,
        };

        // Send both emails
        await transporter.sendMail(companyMailOptions);
        await transporter.sendMail(userMailOptions);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully!' }),
        };
    } catch (error) {
        console.error('Error sending email:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email.' }),
        };
    }
};

export { handler };
