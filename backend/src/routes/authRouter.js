import { Router } from "express";
const authRouter = Router();

import authController from "../controllers/authController.js";
import "../config/passport.js"; // runs passport.use(...) during startup

import passport from "passport";

console.log("authrouter called");
// test console log

// authRouter.get("/", (req, res) => {
//   res.send("Auth router is working!");
// });

// A new user sends their username, displayname, email and password. authController.signup creates the account.
authRouter.post("/signup", authController.signup);

// User sends their username and password. authController.login checks them and starts a session.
// authRouter.post("/login", authController.login);

authRouter.post(
  "/login",
  (req, res, next) => {
    console.log("POST /login reached");
    next();
  },
  passport.authenticate("local", {
    successRedirect: "/", // do these need to be api/auth/login or something
    failureRedirect: "/", // do these need to be api/auth/login or something
    failureMessage: true,
  }),
);

// A user's session cookie is sent. authController.logout ends the session.
// authRouter.post("/logout", authController.logout);

authRouter.post("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

export default authRouter;
