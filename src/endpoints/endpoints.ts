import { Express } from 'express';
import users from '../routes/users';
import player from '../routes/player';

export function endpoints(app: Express) {
  app.use('/users', users);
  app.use('/player', player);
}
