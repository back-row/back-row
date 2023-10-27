import { Request, Response } from 'express';
import { getMap, getNumberOfMaps } from '../db/db';
import { authenticateToken } from '../endpoints/auth';

const express = require('express');
const router = express.Router();

router.get('/count', authenticateToken, async (req: Request, res: Response) => {
  try {
    const number = await getNumberOfMaps();
    res.json(number);
  } catch (error) {
    console.error('Error getting number of maps:', error);
    res.status(500).json({ error: 'An error occurred while getting number of maps' });
  }
});

router.get('/:id', authenticateToken, async (req: Request, res: Response) => {
  const id = +req.params.id;
  console.log('New request for map id: ' + id);

  try {
    const map = await getMap(id);

    if (!map) {
      throw new Error('Map not found');
    }
    res.json(map).end();
  } catch (e) {
    console.error(e);
    res.status(404).send('Map not found').end();
  }
});

export default router;
