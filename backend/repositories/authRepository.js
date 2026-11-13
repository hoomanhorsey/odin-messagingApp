import { prisma } from "../lib/prisma.js";

console.log(Object.keys(prisma).filter((k) => /user/i.test(k)));

async function addNewUser(newUser) {
  const { username, displayName, email, passwordHash } = newUser;
  console.log("add logic to put new user in database");
  console.log(username, displayName, email);
  try {
    return await prisma.user.create({
      data: {
        username: username,
        displayName: displayName,
        email: email,
        passwordHash: passwordHash,
      },
    });
  } catch (error) {
    console.error("Failed to insert new user");
    throw error;
  }
}
export default {
  addNewUser,
};
