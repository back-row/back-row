import { Request, Response } from 'express';
import { getMap } from '../db/db';

const express = require('express');
const router = express.Router();

router.get('/:id', async (req: Request, res: Response) => {
  const id = +req.params.id;
  console.log('new request for map id: ' + id);

  try {
    const map = await getMap(id);
    res.json(map);
  } catch (e) {
    console.log(e);
    res.status(404).send('Map not found');
  }
});

export default router;
