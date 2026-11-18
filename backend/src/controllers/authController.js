import bcrypt from "bcryptjs";

import authService from "../services/authService.js";
console.log("controller called");

async function signup(req, res) {
  const { username, displayName, email, password } = req.body;
  console.log("hello signup");

  try {
    const passwordHash = await bcrypt.hash(password, 10);
    await authService.createUser({
      username,
      displayName,
      email,
      passwordHash,
    });

    res
      .status(201)
      .json({ message: "Signup received", username: newUser.username });
  } catch (error) {
    if (error.statusCode) {
      console.log(error.statusCode);
      return res.status(error.statusCode).json({ message: error.message });
    }

    console.error("Sign up failed:", error);
    res.status(500).json({ message: "Signup failed" });
  }
}

async function logout(req, res) {}

export default {
  signup,
  logout,
};
