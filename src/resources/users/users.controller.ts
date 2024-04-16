import express from 'express';
import { HttpError } from '../../types/httpError';
import { UsersService } from './users.services';
import passport from 'passport';

const UsersController = express.Router();
const usersService = new UsersService();

UsersController.post('/login', /*passport.authenticate('local', { failureRedirect: '/login', failureMessage: true })*/ async (req, res, next) => {
  const { username, password } = req.body.loginForm;
  try {
    const user = await usersService.login(username, password);
    if (!user) {
      throw new HttpError('User doesnt exist.', 404);
    }
    res.status(200).send(user);
  } catch (error) {
    console.error(`Error while getting user`, error);
    next(error);
  }
});

export { UsersController };