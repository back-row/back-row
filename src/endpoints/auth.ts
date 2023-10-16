const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
import { Request, Response, NextFunction } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export function generateAccessToken(userId: any) {
  return jwt.sign(userId, process.env.TOKEN_SECRET, { expiresIn: '2h' });
}

export function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];

  const token = authHeader;

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET as string, (err: any, user: any) => {
    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
}

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

export async function comparePassword(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword);
}
