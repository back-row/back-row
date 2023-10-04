import { Express } from 'express';
import users from "../routes/users";
import player from "../routes/player";
import quiz from "../routes/quiz";
import tutorial from "../routes/tutorial";
import map from "../routes/map";

export function endpoints(app: Express) {

app.use("/users", users);
app.use("/player", player);
app.use("/quiz", quiz);
app.use("/tutorial", tutorial);
app.use("/map", map);
}
