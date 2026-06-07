import type { Request, Response, NextFunction } from "express";
import Joi from "joi";

const mailSchema = Joi.object({
  name: Joi.string().trim().max(100).optional().allow(""),
  email: Joi.string().email().required(),
  subject: Joi.string().trim().max(100).optional().allow(""),
  message: Joi.string().trim().min(1).max(5000).required(),
});

const validateMailSend = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const { error } = mailSchema.validate(req.body, {
    abortEarly: false,
    convert: true,
  });

  if (error) {
    res.status(400).json({
      status: "fail",
      message: "Mail validation failed",
      details: error.details.map((err) => err.message),
    });
    return;
  }

  next();
};

export default validateMailSend;
