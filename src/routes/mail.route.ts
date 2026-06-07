import { Router } from "express";
import validateMailSend from "../validators/mail.validator.js";
import { sendMail } from "../controllers/mail.controller.js";

const router = Router();

router.post("/send", validateMailSend, sendMail);

export default router;
