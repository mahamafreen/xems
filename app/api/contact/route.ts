import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, company, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required fields.' },
                { status: 400 }
            );
        }

        // Configure your SMTP settings via environment variables
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.zoho.com',
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: process.env.SMTP_SECURE === 'true' || process.env.SMTP_PORT === '465',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER || email,
            to: process.env.EMAIL_USER, // Send to yourself
            replyTo: email,
            subject: `New Contact Form Mission from ${name} at ${company || 'Unknown Company'}`,
            text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage:\n${message}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #6366f1;">New Contact Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <br />
          <h3>Message:</h3>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Email sent successfully!' },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Contact form error:', error?.message || error);
        console.error('SMTP Config:', {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            user: process.env.EMAIL_USER,
            passSet: !!process.env.EMAIL_PASS,
        });
        return NextResponse.json(
            { error: error?.message || 'Failed to send email. Please check server logs.' },
            { status: 500 }
        );
    }
}
