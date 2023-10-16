import { Request, Response } from 'express';
import { comparePassword, generateAccessToken } from '../endpoints/auth';
import { getUserByName } from '../db/db';
import { users } from '@prisma/client';

const express = require('express');
const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const username = req.body.username;
  const password = req.body.password;

  const user: users | null = await getUserByName(username);

  if (user == null || !comparePassword(password, user.userspassword)) {
    return res.status(401).end();
  }

  const token = generateAccessToken({ userid: user.usersid });
  res.header('Authorization', token).status(200).send('Logged in successfully');
});

export default router;
