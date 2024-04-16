import express, { Express, Request, Response } from "express";
import bodyParser from 'body-parser';
import { ContactsController } from "./resources/contacts/contacts.controller";
import dotenv from "dotenv";
import cors from 'cors';
import { UsersController } from "./resources/users/users.controller";
import { initPassport } from "./resources/authentification/authentification.mw";
import session from "express-session";


dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(session({
  secret: "This is a secret",
  resave: false,
  saveUninitialized: false
}));
initPassport(app);


app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.use('/api/contacts', ContactsController);
app.use('/api/users', UsersController);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});