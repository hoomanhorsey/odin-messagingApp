import authService from "../services/authService.js";
console.log("controller called");

async function signup(req, res) {
  const newUser = req.body;
  console.log("hello signup");

  authService.addNewUser(newUser);
  res
    .status(201)
    .json({ message: "Signup received", username: req.body.username });
}

async function login(req, res) {}
async function logout(req, res) {}

export default {
  signup,
  login,
  logout,
};
