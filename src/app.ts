import express from "express";
import type { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`Port open on http://localhost:${PORT}`);
});
