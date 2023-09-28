import express, { Express, Request, Response } from 'express';
import { addAlice,createUsers,getAllUsers, getUserByID,updateUserByID} from '../db/db';
// import { deletUsers} from '../db/db';
import { deletUsersById } from '../db/db';


export function endpoints(app: Express) {

  app.get('/', (req: Request, res: Response) => {
    res.send('BACKROW');
    // addAlice(); 
    // createUsers();
    // getAllUsers();
    // deletUsersById();
    updateUserByID();
      getUserByID();
    // deletUsers();
 
  });

  // add more endpoints here
}
