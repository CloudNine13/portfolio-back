import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pdfRoute from "./routes/pdf.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/pdf", pdfRoute);

app.listen(PORT, () => {
  console.log(`Port open on http://localhost:${PORT}`);
});
