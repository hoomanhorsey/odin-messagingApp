console.log("Passport config loaded");

import passport from "passport";

import { Strategy as LocalStrategy } from "passport-local";

import authRepository from "../repositories/authRepository.js";

import bcrypt from "bcryptjs";

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      console.log(username, password);

      const user = await authRepository.findUser(username);
      console.log(user.passwordHash, password);

      console.log("user from database, ", user);

      if (!user) {
        console.log("DELETE THIS LATER, NO USER");
        return done(null, false, { message: "Incorrect username" });
      }

      const match = await bcrypt.compare(password, user.passwordHash);
      if (!match) {
        // passwords do not match!
        return done(null, false, { message: "Incorrect password" });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }),
);

passport.serializeUser((user, done) => {
  console.log("serizalize", user);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await authRepository.findUserById(id);
    console.log("deserizale", user);
    done(null, user);
  } catch (err) {
    done(err);
  }
});
