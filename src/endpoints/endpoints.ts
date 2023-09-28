import express, { Express, Request, Response } from 'express';
import { createUsers, getAllUsers, getUserByID, updateUserByID } from '../db/db';
import { deletUsersById } from '../db/db';
import { userInfo } from 'os';

export function endpoints(app: Express) {

  app.post('/', async (req: Request, res: Response) => {
    try {
      const data = req.body;
      await createUsers(data);
      res.status(200).json({ message: 'User created' });
    } catch (error) {
      console.log('Error creating user:', error);
      res.status(500).json({ error: 'An error occurred while creating user' });
    }
  });

  app.get('/users', async (req: Request, res: Response) => {
    try {
      const users = await getAllUsers();

      res.json(users).status(200);

    } catch (error) {
      console.log('Error getting all users:', error);
      res.status(500).json({ error: 'An error occurred while getting all users' });
    }
  });

  app.get('/users/:id', async (req: Request, res: Response) => {
    try {
      const number = +req.params.id;

      const user = await getUserByID(number);

      res.json(user).status(200);

      
    } catch (error) {
      console.log('Error getting user by id:', error);
      res.status(500).json({ error: 'An error occurred while getting user by id' });
    }
  });

  app.post('/users/delete/:id',async(req: Request, res: Response) => {
    try {
      const number = +req.params.id;

       await deletUsersById(number);

       res.status(200).json({ message: 'User deleted' });
       
    } catch (error) {
      console.log('Error deleting user by id:', error);
      res.status(500).json({ error: 'An error occurred while deleting user by id' });
    }
  });

  app.post('/users/update/:id/', async (req: Request, res: Response) => {
    try {
      const number = +req.params.id;
      const data = req.body;

      await updateUserByID(number, data);
    } catch (error) {
      console.log('Error updating user by id:', error);
      res.status(500).json({ error: 'An error occurred while updating user by id' });
    }
  });
}
