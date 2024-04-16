import { Express, NextFunction, Request, Response } from "express";
import passport from "passport";
import * as passportStrategy from "passport-local";
import { UsersService } from "../users/users.services";

export function initPassport(app: Express) {

  // Initialize passport
  app.use(passport.initialize());  
  app.use(passport.session());
  
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((id, done) => {
    done(null, { id });
  });

  const usersService = new UsersService();

  passport.use(new passportStrategy.Strategy(
    async (username, password, done) => {
      try {
        console.log('get user from passport');
        const user = await usersService.login(username, password);
        return done(null, user);
      } catch(err) {
        return done(err);
      }
    }
  ));
  

  return passport;

}

export function isAuthenticated(req: Request ,res: Response, next: NextFunction): Response | void {
  if(req.user)
     return next();
  else
      res.redirect("/"); 
}