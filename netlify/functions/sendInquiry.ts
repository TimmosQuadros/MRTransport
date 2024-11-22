import { Handler } from '@netlify/functions';
import nodemailer from 'nodemailer';

const handler: Handler = async (event) => {
    try {
        const { name, email, message } = JSON.parse(event.body || '{}');

        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'bookingsrealestate@gmail.com',
                pass: 'eivu qjpv xcos fwaz',
            },
        });

        const mailOptions = {
            from: 'your-email@gmail.com',
            to: 'destination-email@example.com',
            subject: `Inquiry from ${name}`,
            text: `Message: ${message}\n\nEmail: ${email}`,
        };

        await transporter.sendMail(mailOptions);

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