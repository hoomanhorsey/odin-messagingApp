import authRepository from "../repositories/authRepository.js";

async function addNewUser(newUser) {
  console.log("add some logic to this");
  authRepository.addNewUser(newUser);
}

export default {
  addNewUser,
};
