import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;

function escapeHtml(value: string) {
    return value
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { name, email, company = '', message } = body;

        if (
            typeof name !== 'string' ||
            typeof email !== 'string' ||
            typeof message !== 'string' ||
            !name.trim() ||
            !message.trim() ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
        ) {
            return NextResponse.json(
                { error: 'Please provide a valid name, email, and message.' },
                { status: 400 }
            );
        }

        if (!resendApiKey) {
            console.error('RESEND_API_KEY is not configured.');
            return NextResponse.json(
                { error: 'Email service is not configured.' },
                { status: 503 }
            );
        }

        const resend = new Resend(resendApiKey);
        const safeName = escapeHtml(name.trim());
        const safeEmail = escapeHtml(email.trim());
        const safeCompany = escapeHtml(typeof company === 'string' ? company.trim() : '');
        const safeMessage = escapeHtml(message.trim());

        const { data, error } = await resend.emails.send({
            from: 'XEMS Contact Form <contact@xems.space>',
            to: ['contact@xems.space'],
                        replyTo: email.trim(),
                        subject: `New Contact Form Mission from ${name.trim()} at ${company || 'Unknown Company'}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2 style="color: #6366f1;">New Contact Request</h2>
                    <p><strong>Name:</strong> ${safeName}</p>
                    <p><strong>Email:</strong> ${safeEmail}</p>
                    <p><strong>Company:</strong> ${safeCompany || 'Not provided'}</p>
          <br />
          <h3>Message:</h3>
                    <p style="white-space: pre-wrap;">${safeMessage}</p>
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
