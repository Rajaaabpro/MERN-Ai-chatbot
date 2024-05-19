import jwt from "jsonwebtoken";

export const createToken = (id: String, email: string, expiresIn: string) => {
  const payload = { id, email };
  const token = jwt.sign(payload, process.env.Jwt_SECRET, {
    expiresIn,
  });
  return token;
};
