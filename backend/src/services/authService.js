import authRepository from "../repositories/authRepository.js";

async function createUser(newUser) {
  console.log("add some logic to this");
  return await authRepository.createUser(newUser);
}

export default {
  createUser,
};
