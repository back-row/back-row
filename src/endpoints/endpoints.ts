import express, { Express, Request, Response } from 'express';
import { addAlice,createUsers,getAllUsers, getUserByID,updateUserByID} from '../db/db';
// import { deletUsers} from '../db/db';
import { deletUsersById } from '../db/db';
import { userInfo } from 'os';


export function endpoints(app: Express) {
  


  app.get('/', (req: Request, res: Response) => {
    res.send('BACKROW');

    const data = req.body;


    createUsers(data);
   
  });

  app.get('/users', (req: Request, res: Response) => {
    res.send('BACKROW');
    getAllUsers();
 
  });

  
  app.get('/users/:id', (req: Request, res: Response) => {
    const number =  +req.params.id

    res.send('BACKROW');
    getUserByID(number);
   
  // add more endpoints here
});

app.get('/users/delete/:id', (req: Request, res: Response) => {
  const number =  +req.params.id

  res.send('BACKROW');
  deletUsersById(number);
 
// add more endpoints here
});

app.post('/users/update/:id/', (req: Request, res: Response) => {
  const number = +req.params.id
  
  const data = req.body;

  
  res.send('BACKROW');
  updateUserByID(number, data);

});


}