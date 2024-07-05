export const config = {
  transporter: {
    port: process.env.NEXT_PUBLIC_NODEMAILER_PORT as unknown as number,
    host: process.env.NEXT_PUBLIC_NODEMAILER_HOST,
    auth: {
      user: process.env.NEXT_PUBLIC_NODEMAILER_USER,
      pass: process.env.NEXT_PUBLIC_NODEMAILER_PASS,
    },
    secure: true,
  },
  target: process.env.NEXT_PUBLIC_TARGET
};