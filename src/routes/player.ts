import { Request, Response } from 'express';
import { getPlayerPosition } from '../game/player';
import type { PlayerPosition } from '../game/player';

const express = require('express');
const router = express.Router();

router.post('/player', async (req: Request, res: Response) => {
  const playerPosition: PlayerPosition = req.body;
  let isMapComplete = await getPlayerPosition(playerPosition);
  console.log('Map complete: ' + isMapComplete);
  res.json(isMapComplete).end();
});

export default router;
