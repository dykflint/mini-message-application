// middleware/validation.js
import { body, validationResult } from 'express-validator';

export const validateMessage = [
  body('text')
    .trim()
    .notEmpty()
    .withMessage('Message text is required')
    .isLength({ min: 1, max: 500 })
    .withMessage('Message must be between 1 and 500 characters')
    .escape(), // Sanitizes HTML

  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required')
    .isLength({ min: 2, max: 50 })
    .withMessage('Username must be between 2 and 50 characters')
    .isAlphanumeric()
    .withMessage('Username must contain only letters and numbers')
    .escape(),
];

export const checkValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render('form', {
      errors: errors.array(),
      formData: req.body,
    });
  }
  next();
};
