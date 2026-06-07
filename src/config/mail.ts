import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "localhost",
  port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASS || "",
  },
});

const mailOpts = {
  from: "test@example.com",
  to: process.env.SMTP_TO || "",
  subject: "test subject",
  text: "test message",
  html: "<b>test message</b>",
};

export const getMailService = () => {
  return { sendMail: transporter.sendMail, mailOpts };
};
