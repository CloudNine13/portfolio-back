import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPdf = async (req: any, res: any) => {
  try {
    const { language } = req.query;

    if (!language) {
      return res.status(400).json({ error: "Language is required" });
    }

    const pdfPath = path.join(__dirname, `../assets/resumes/${language}.pdf`);

    res.status(200).sendFile(pdfPath);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export { getPdf as getPDF };
