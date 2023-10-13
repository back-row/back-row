import { Request, Response } from 'express';
import { authenticateToken } from '../endpoints/auth';

const express = require('express');
const router = express.Router();

router.post('/', authenticateToken, async (req: Request, res: Response) => {});

export default router;
