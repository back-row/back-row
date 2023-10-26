import { Request, Response } from 'express';
import { getTutorialByMapId } from '../db/db';

import express from 'express';
const router = express.Router();

router.get('/:id', async (req: Request, res: Response) => {
  const id = +req.params.id;

  console.log('New request for tutorial by mapid: ' + id + ' received.');
  try {
    const tutorial = await getTutorialByMapId(id);
    if (!tutorial) {
      res.status(404).send('Tutorial not found').end();
      return;
    }
    res.json(tutorial).end();
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal Server Error').end();
  }
});

export default router;
