import express, { Express, Request, Response } from 'express';
import { createUsers, getAllUsers, getUserByID, updateUserByID } from '../db/db';
import { deletUsersById } from '../db/db';
import { userInfo } from 'os';

export function endpoints(app: Express) {
  app.post('/', (req: Request, res: Response) => {
    try {
      res.send('BACKROW');

      const data = req.body;
      createUsers(data);
    } catch (error) {
      console.log('Error creating user:', error);
      res.status(500).json({ error: 'An error occurred while creating user' });
    }
  });

  app.get('/users', (req: Request, res: Response) => {
    try {
      res.send('BACKROW');
      getAllUsers();
    } catch (error) {
      console.log('Error getting all users:', error);
      res.status(500).json({ error: 'An error occurred while getting all users' });
    }
  });

  app.get('/users/:id', (req: Request, res: Response) => {
    try {
      const number = +req.params.id;

      res.send('BACKROW');
      getUserByID(number);
    } catch (error) {
      console.log('Error getting user by id:', error);
      res.status(500).json({ error: 'An error occurred while getting user by id' });
    }
  });

  app.get('/users/delete/:id', (req: Request, res: Response) => {
    try {
      const number = +req.params.id;

      res.send('BACKROW');
      deletUsersById(number);
    } catch (error) {
      console.log('Error deleting user by id:', error);
      res.status(500).json({ error: 'An error occurred while deleting user by id' });
    }
  });

  app.post('/users/update/:id/', (req: Request, res: Response) => {
    try {
      const number = +req.params.id;

      const data = req.body;

      res.send('BACKROW');
      updateUserByID(number, data);
    } catch (error) {
      console.log('Error updating user by id:', error);
      res.status(500).json({ error: 'An error occurred while updating user by id' });
    }
  });
}
