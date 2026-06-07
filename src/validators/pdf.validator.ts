import type { Request, Response, NextFunction } from "express";
import Joi from "joi";

const pdfSchema = Joi.object({
  language: Joi.string().trim().lowercase().valid("en", "es", "ru").required(),
});

const validatePDF = (req: Request, res: Response, next: NextFunction): void => {
  const { error } = pdfSchema.validate(req.query, {
    convert: true,
  });

  if (error) {
    res.status(400).json({
      status: "fail",
      message: "PDF validation failed",
      details: error.details.map((err) => err.message),
    });
    return;
  }

  next();
};

export default validatePDF;
