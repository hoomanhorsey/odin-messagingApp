console.log("Passport config loaded");

import passport from "passport";

import { Strategy as LocalStrategy } from "passport-local";

import authRepository from "../repositories/authRepository.js";

// const bcrypt = require("bcryptjs");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      console.log(username, password);

      const user = await authRepository.findUser(username);

      console.log("user from database, ", user);

      if (!user) {
        console.log("DELETE THIS LATER, NO USER");
        return done(null, false, { message: "Incorrect username" });
      }
      // TODO INSERT BCRYPT STUFF LATER

      //   const match = await bcrypt.compare(password, user.password);
      //   if (!match) {
      //     // passwords do not match!
      //     return done(null, false, { message: "Incorrect password" });

      //     // if (user.password !== password) {
      //     //   console.log(
      //     //     "incorrect, password but it isnt showing up in the website, just console",
      //     //   );
      //     return done(null, false, { message: "Incorrect password" });
      //   }
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
