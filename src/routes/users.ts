import {
  createUsers,
  getUserByID,
  getAllUsers,
  updateUserByID,
  getUserByIDNoPassword
} from '../db/db';
import { Request, Response } from 'express';
import { deleteUsersById } from '../db/db';

const express = require('express');
const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const data = req.body;

    if (
      data.usersname !== null &&
      data.usersname !== undefined &&
      data.usersemail !== null &&
      data.usersemail !== undefined &&
      data.userspassword !== null &&
      data.userspassword !== undefined &&
      data.usersname.length > 0 &&
      data.usersemail.length > 0 &&
      data.userspassword.length > 0
    ) {
      await createUsers(data);

      res.status(201).end();
    } else {
      res.status(400).end();
    }
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'An error occurred while creating user' });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const user = await getUserByIDNoPassword(req.user.userid);
    res.json(user).end();
  } catch (error) {
    console.error('Error getting user:', error);
    res.status(500).json({ error: 'An error occurred while getting user' });
  }
});

router.get('/all', async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.json(users).end();
  } catch (error) {
    console.error('Error getting all users:', error);
    res.status(500).json({ error: 'An error occurred while getting all users' });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const number = +req.params.id;
    const user = await getUserByID(number);

    res.send(user);
  } catch (error) {
    console.error('Error getting user by id:', error);
    res.status(500).json({ error: 'An error occurred while getting user by id' });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const number = +req.params.id;
    const user = await getUserByID(number);
    if (user === null) {
      res.status(400).json({ message: 'invalid id' }).end();
    } else {
      deleteUsersById(number);
      res.status(204).end();
    }
  } catch (error) {
    console.error('Error deleting user by id:', error);
    res.status(500).json({ error: 'An error occurred while deleting user by id' });
  }
});

router.put('/', async (req: Request, res: Response) => {
  try {
    const number = req.user.userid;

    const data = req.body;
    const user = await getUserByID(number);
    if (user !== null && data.name !== null && data.name !== undefined && data.name.length > 0) {
      await updateUserByID(number, data);
      res.status(200).end();
    } else {
      res.status(400).end();
    }
  } catch (error) {
    console.error('Error updating user by id:', error);
    res.status(500).json({ error: 'An error occurred while updating user by id' });
  }
});

export default router;
