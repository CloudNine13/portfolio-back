import nodemailer from "nodemailer";

export const getMailService = () => {
  const mailOpts = {
    from: process.env.SMTP_FROM || "",
    to: process.env.SMTP_TO || "",
    subject: "",
    text: "",
  };

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "localhost",
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 0,
    secure: false,
    auth: {
      user: process.env.SMTP_USER || "",
      pass: process.env.SMTP_PASS || "",
    },
  });
  return { sendMail: transporter.sendMail.bind(transporter), mailOpts };
};
