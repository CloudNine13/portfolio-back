import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import pdfRoute from "./routes/pdf.route.js";
import mailRoute from "./routes/mail.route.js";

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.ENV === "prod" ? "0.0.0.0" : "localhost";

app.use(express.json());
app.use(cors());

app.use("/api/pdf", pdfRoute);
app.use("/api/mail", mailRoute);

app.listen(Number(PORT), String(HOST), () => {
  console.log(`The app has started on ${HOST}:${PORT}`);
});
