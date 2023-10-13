import { Express } from 'express';
import users from '../routes/users';
import quiz from '../routes/quiz';
import tutorial from '../routes/tutorial';
import map from '../routes/map';
import login from '../routes/login';
import score from '../routes/score';

export function endpoints(app: Express) {
  app.use('/users', users);
  app.use('/quiz', quiz);
  app.use('/tutorial', tutorial);
  app.use('/map', map);
  app.use('/login', login);
  app.use('/score', score);
}
