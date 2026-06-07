import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pdfRoute from "./routes/pdf.route.js";
import mailRoute from "./routes/mail.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/pdf", pdfRoute);
app.use("/api/mail", mailRoute);

app.listen(PORT, () => {
  console.log(`Port open on http://localhost:${PORT}`);
});
