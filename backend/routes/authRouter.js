import { Router } from "express";
const authRouter = Router();

import authController from "../controllers/authController.js";

console.log("authrouter called");
// test console log
authRouter.get("/", (req, res) => {
  res.send("Auth router is working!");
});

// A new user sends their username, displayname, email and password. authController.signup creates the account.
authRouter.post("/signup", authController.signup);

// User sends their username and password. authController.login checks them and starts a session.
authRouter.post("/login", authController.login);

// A user's session cookie is sent. authController.logout ends the session.
authRouter.post("/logout", authController.logout);

export default authRouter;
