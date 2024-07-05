import nodemailer from "nodemailer";
import { NextResponse } from 'next/server'

const config = {
  transporter: {
    port: process.env.NODEMAILER_PORT as unknown as number,
    host: process.env.NODEMAILER_HOST,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
    secure: true,
  },
  target: process.env.NODEMAILER_TARGET
};

const transporter = nodemailer.createTransport(config.transporter);

const checkConfig = (configObject: Object, parentKey = '') => {
  for (const [key, value] of Object.entries(configObject)) {
    if (typeof value === 'object' && value !== null) {
      checkConfig(value, `${parentKey}${key}.`);
    } else if (!value) {
      throw Error(`Missing env variable for key: ${parentKey}${key}`);
    }
  }
  return true;
};
 
export async function POST(request: Request) {
  try {
    checkConfig(config)
  } catch (error: any) {
    return NextResponse.json({error: error.message}, {status: 500})
  }

  const body = await request.json()
  const mailData = {
    from: config.transporter.auth.user,
    to: config.target,
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