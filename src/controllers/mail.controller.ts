// import { getMailService } from "../config/mail.js";

const sendMail = async (req: any, res: any) => {
  try {
    const data = req.body;
    console.log(data);
    // const { sendMail, mailOpts } = getMailService();
    // const newOpts = {
    //   ...mailOpts,
    //   from: data.email,
    //   subject: data.subject,
    //   text: data.message,
    //   html: `<p>${data.message}</p>`,
    // };
    // await sendMail(newOpts);
    res.status(200).json({ message: "Mail sent successfully" });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export { sendMail };
