import { Request, Response } from 'express';
import { getQuestion } from '../db/db';

const express = require('express');
const router = express.Router();

router.get('/:id', async (req: Request, res: Response) => {
  const id = +req.params.id;
  console.log('New request for quiz id: ' + id);

  try {
    const question = await getQuestion(id);

    if (!question) {
      throw new Error('Question not found');
    }
    res.json(question).end();
  } catch (e) {
    console.log(e);
    res.status(404).send('Question not found').end();
  }
});

export default router;