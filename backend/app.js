// Dependencies & core modules
import express from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";

// Route imports
import authRouter from "./src/routes/authRouter.js";
import usersRouter from "./src/routes/usersRouter.js";
import conversationsRouter from "./src/routes/conversationsRouter.js";
import messagesRouter from "./src/routes/messagesRouter.js";

// App setup
const app = express();

// Middleware
app.use(cors()); // enables CORS for ALL routes
app.use(express.json());

// Session startup
app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));

// Passport initialisation
app.use(passport.initialize());
app.use(passport.session());

// Route mounting
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/conversations", conversationsRouter);
app.use("/api/messages", messagesRouter);

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Messaging app backend in express - listening on port ${PORT}!`);
});
