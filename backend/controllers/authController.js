import authService from "../services/authService.js";
console.log("controller called");

async function signup(req, res) {
  const newUser = req.body;
  console.log("hello signup");

  try {
    await authService.createUser(newUser);
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

async function login(req, res) {
  const returningUser = req.body;
  console.log("hello login");
  authService.loginUser(returningUser);
}

async function logout(req, res) {}

export default {
  signup,
  login,
  logout,
};
