import express, { Express, Request, Response } from "express";
import bodyParser from 'body-parser';
import { ContactsController } from "./resources/contacts/contacts.controller";
import dotenv from "dotenv";
import cors from 'cors';
import { UsersController } from "./resources/users/users.controller";
import path from "path";


dotenv.config();
const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "..", "dist")));
app.use(express.static("client/dist"));


app.use('/api/contacts', ContactsController);
app.use('/api/users', UsersController);

app.listen(port, () => {
  console.log(`[server]: Server is running on port ${port}`);
});
