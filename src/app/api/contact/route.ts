import { NextResponse } from 'next/server';

import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import { ContactEmail } from '@/components/emails/contact';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  const { email, fullname, company, message, phone } = await request.json();

  try {
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `${fullname} from ${company}`,
      html: render(ContactEmail({ email, fullname, company, message, phone })),
    });

    // TODO: send recipt email

    return NextResponse.json({
      status: 200,
      success: true,
      message: 'Email sent successfully',
    });
  } catch (error) {
    return NextResponse.json({
      status: 400,
      message: 'Could not send email',
    });
  }
}
