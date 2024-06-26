// import { Request, Response, NextFunction } from "express";
// import { body, ValidationChain, validationResult } from "express-validator";

// export const validate = (validations: ValidationChain[]) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     // Iterate through each validation in the array
//     for (let validation of validations) {
//       const result = await validation.run(req); // Run the validation
//       if (!result.isEmpty()) {
//         // If there are validation errors
//         const errors = validationResult(req); // Get the validation errors
//         return res.status(422).json({ errors: errors.array() }); // Send response with validation errors
//       }
//     }
//     // If no validation errors were found, proceed to the next middleware
//     next();
//   };
// };

// export const loginValidator: ValidationChain[] = [
//   body("email").trim().isEmail().withMessage("Email is required"),
//   body("password")
//     .trim()
//     .isLength({ min: 6 })
//     .withMessage("Password should contain at least 6 characters"),
// ];

// export const signupValidator: ValidationChain[] = [
//   body("name").notEmpty().withMessage("Name is required"),
//   ...loginValidator,
// ];


import { NextFunction, Request, Response } from "express";
import { body, ValidationChain, validationResult } from "express-validator";

export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        break;
      }
    }
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }
    return res.status(422).json({ errors: errors.array() });
  };
};

export const loginValidator = [
  body("email").trim().isEmail().withMessage("Email is required"),
  body("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("Password should contain atleast 6 characters"),
];

export const signupValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  ...loginValidator,
];

export const chatCompletionValidator = [
  body("message").notEmpty().withMessage("Message  is required"),
];