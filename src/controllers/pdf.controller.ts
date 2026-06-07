import path from "path";

const getPdf = async (req: any, res: any) => {
  try {
    const { language } = req.query;

    if (!language) {
      return res.status(400).json({ error: "Language is required" });
    }

    const filePath = path.join(
      process.cwd(),
      "src",
      "assets",
      "resumes",
      `${language}.pdf`,
    );

    res.status(200).sendFile(filePath);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export { getPdf as getPDF };
