import { rejects } from "assert";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { resolve } from "path";

export const createToken = (id: String, email: string, expiresIn: string) => {
  const payload = { id, email };
  const token = jwt.sign(payload, process.env.Jwt_SECRET, {
    expiresIn,
  });
  return token;
};

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies["${COOKIE_NAME}"];
  if (!token || token.trim() === "") {
    return res.status(401).json({ message: "Token Not Received"});
  }
  return new Promise<void>((resolve, reject) => {
    return jwt.verify(token, process.env.Jwt_SECRET,(err, success) => {
      if (err) {
        reject( err.message);
        return res.status(401).json({Message:"Token Expired "});
      } else {
        resolve();
        res.locals.jwtData = success;
        return next ();
      }
    });
  });
};
