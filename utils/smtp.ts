import nodemailer from 'nodemailer';

interface Props {
  to: string;
  subject: string;
  body: string;
}

export const sendEmail = async ({ to, subject, body }: Props) => {
  const { NEXT_PUBLIC_SMTP_PASSWORD, NEXT_PUBLIC_SMTP_EMAIL } = process.env;

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: NEXT_PUBLIC_SMTP_EMAIL,
      pass: NEXT_PUBLIC_SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log({ testResult });
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: NEXT_PUBLIC_SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
};
