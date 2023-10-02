import { Express, Request, Response } from 'express';
import { createUsers, getUserByID, getAllUsers,  updateUserByID } from '../db/db';
import { deletUsersById } from '../db/db';


export function endpoints(app: Express) {
  app.post('/users', async (req: Request, res: Response) => {
    try {
      const data = req.body;

      if (data.usersname !== null && data.usersname !== undefined && data.usersemail !== null && data.usersemail !== undefined && data.userspassword !== null && data.userspassword !== undefined) {
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


  app.get('/users', async (req: Request, res: Response) => {
    try {
      const users = await getAllUsers()
      res.json(users).end();
    } catch (error) {
      console.log('Error getting all users:', error);
      res.status(500).json({ error: 'An error occurred while getting all users' });
    }
  });

  app.get('/users/:id', async (req: Request, res: Response) => {
    try {
      const number = +req.params.id;
      const user = await getUserByID(number)

      res.send(user);
    } catch (error) {
      console.log('Error getting user by id:', error);
      res.status(500).json({ error: 'An error occurred while getting user by id' });
    }
  });

  app.delete('/users/:id', async (req: Request, res: Response) => {
    try {
      const number = +req.params.id;
      const user = await getUserByID(number);
      if (user === null) {
        res.status(400).json({"message":"invalid id"}).end();
      } else {
      deletUsersById(number);
      res.status(204).end();
      }
    } catch (error) {
      console.log('Error deleting user by id:', error);
      res.status(500).json({ error: 'An error occurred while deleting user by id' });
    }
  });

  app.put('/users/:id/', async (req: Request, res: Response) => {
    try {
      const number = +req.params.id;

      const data = req.body;
      const user = await getUserByID(number);
      if (user !== null && data.usersname !== null && data.usersname !== undefined) {
        await updateUserByID(number, data);
        res.status(200).end();
      } else {
        res.status(400).end();
      }
    } catch (error) {
      console.log('Error updating user by id:', error);
      res.status(500).json({ error: 'An error occurred while updating user by id' });
    }
  });
}
