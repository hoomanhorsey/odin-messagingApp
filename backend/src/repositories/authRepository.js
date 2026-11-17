import { prisma } from "../../lib/prisma.js";

console.log("router called");

async function createUser(newUser) {
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
    if (error.code === "P2002") {
      console.log("duplicate error", error.code, error.message);
      const fields = error.meta?.target ?? [];
      const message = fields.includes("email")
        ? "Email already registered"
        : "Username already taken";
      const err = new Error(message, { cause: error });
      err.statusCode = 409;
      throw err;
    }
    throw error;
  }
}

async function findUser(username) {
  return await prisma.user.findUnique({
    where: { username },
    select: { id: true, username: true },
  });
}

async function findUserById(id) {
  return await prisma.user.findUnique({
    where: { id },
    select: { id: true, username: true },
  });
}

export default {
  createUser,
  findUser,
  findUserById,
};
