import { Router } from "express";
import { getPDF } from "../controllers/pdf.controller.js";
import validatePDF from "../validators/pdf.validator.js";

const router = Router();

router.get("/download", validatePDF, getPDF);

export default router;
