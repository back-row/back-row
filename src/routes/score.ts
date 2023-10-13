import { Request, Response } from 'express';
import { authenticateToken } from '../endpoints/auth';
import { getUserScore, createScore, updateScore } from '../db/db';
import { userscore } from '@prisma/client';

const express = require('express');
const router = express.Router();

router.post('/', authenticateToken, async (req: Request, res: Response) => {
  const user = req.user.userid;
  const map = req.body.map;
  const score = req.body.score;

  try {
    const userScore: userscore | null = await getUserScore(user, map);
    if (!userScore) {
      await createScore(user, map, score);
      console.log('Score inserted');
      res.status(201).send('Score inserted').end();
    } else if (userScore.userscorescore! < score) {
      console.log('Score updated');
      await updateScore(userScore.userscoreid, score);
      res.status(200).send('Score updated').end();
    } else {
      console.log('Score not updated');
      res.status(200).send('Score not updated').end();
    }
  } catch (e) {
    console.log(e);
  }
});
export default router;
