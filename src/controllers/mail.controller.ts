import { getMailService } from "../config/mail.js";

const sendMail = async (req: any, res: any) => {
  try {
    const data = req.body;
    const { sendMail, mailOpts } = getMailService();
    const senderName = data.name ? ` / ${data.name}` : "";

    const newOpts = {
      ...mailOpts,
      subject: `Message from ${data.email} - ${data.subject}`,
      html: `
        <h2>Message from ${data.email}${senderName}:</h2>
        <h3>${data.message}</h3>
      `,
    };

    await sendMail(newOpts);
    res.status(200).json({ message: "Mail sent successfully" });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export { sendMail };
