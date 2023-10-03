import { Request, Response } from 'express';
import { getPlayerPosition } from '../game/player';
import type { PlayerPosition } from '../game/player';




const express = require('express');
const router = express.Router();

router.post('/', (req: Request, res: Response) => {
  const playerPosition: PlayerPosition = req.body;
  getPlayerPosition(playerPosition);
  res.status(200).end();
});
  

export default router;