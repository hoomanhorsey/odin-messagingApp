// Dependencies & core modules
import express from "express";
import cors from "cors";
const app = express();

// Route imports

import authRouter from "./routes/authRouter.js";
import usersRouter from "./routes/usersRouter.js";
import conversationsRouter from "./routes/conversationsRouter.js";
import messagesRouter from "./routes/messagesRouter.js";

app.use(cors()); // enables CORS for ALL routes

app.use(express.json());

// Route mounting
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);
app.use("/api/conversations", conversationsRouter);
app.use("/api/messages", messagesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(
    `Messaging app backend app in express - listening on port ${PORT}!`,
  );
});
