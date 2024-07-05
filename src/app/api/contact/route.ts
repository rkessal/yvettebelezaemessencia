import { transporter } from '@/app/lib/nodemailer';
import { NextResponse } from 'next/server'
import { SendMailOptions } from 'nodemailer';
 
export async function POST(request: Request) {
  const body = await request.json()
  const mailData = {
    from: process.env.NEXT_PUBLIC_NODEMAILER_USER,
    to: process.env.NEXT_PUBLIC_TARGET,
    replyTo: body.email,
    subject: `Message From ${body.name}`,
    text: body.message + " | Enviado por: " + body.email,
    html: `<div>${body.message}</div><p>Enviado por:
    ${body.email}</p>`,
  };

  try {
    const info = await transporter.sendMail(mailData);
    return NextResponse.json({ OK: 'Message sent successfully' })
  } catch(error: any) {
    return NextResponse.json({error: error}, {status: 400})
  }


}