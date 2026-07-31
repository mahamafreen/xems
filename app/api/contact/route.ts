import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

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

        const { data, error } = await resend.emails.send({
            from: 'XEMS Contact Form <onboarding@resend.dev>',
            to: ['contact@xems.space'],
            replyTo: email,
            subject: `New Contact Form Mission from ${name} at ${company || 'Unknown Company'}`,
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
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json(
                { error: error.message || 'Failed to send email.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: 'Email sent successfully!', id: data?.id },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Contact form error:', error?.message || error);
        return NextResponse.json(
            { error: error?.message || 'Failed to send email. Please check server logs.' },
            { status: 500 }
        );
    }
}
