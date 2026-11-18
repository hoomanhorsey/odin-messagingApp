import "dotenv/config";
import { Pool } from "pg";

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });

const seedData = {
  users: [
    {
      email: "andrew@sample.com",
      username: "andypandy",
      displayName: "andypandalicious",
      avatar: null,
      passwordHash:
        "$2b$10$SjognjMZ2lAS9e0Xe.nFf.C9s2BHnmbeikY7xnNLlLhxdD25RXHWu",
    },
  ],
  conversations: [],
  memberships: [],
  messages: [],
};

async function main() {
  const client = await pool.connect();
  try {
    console.log("seeding...");

    // delete existing data
    await client.query('DELETE FROM "Message"');
    await client.query('DELETE FROM "Membership"');
    await client.query('DELETE FROM "Conversation"');
    await client.query('DELETE FROM "User"');

    // Insert users

    for (const user of seedData.users) {
      await client.query(
        'INSERT INTO "User" (email, username, "displayName", "passwordHash", avatar) VALUES ($1, $2, $3, $4, $5) RETURNING id',
        [
          user.email,
          user.username,
          user.displayName,
          user.passwordHash,
          user.avatar,
        ],
      );
    }

    console.log("seeding done!");
  } finally {
    client.release();
    await pool.end();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
