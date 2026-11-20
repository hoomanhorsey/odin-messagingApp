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
    {
      email: "yosh@sample.com",
      username: "yosh",
      displayName: "yoshy",
      avatar: null,
      passwordHash:
        "$2b$10$SjognjMZ2lAS9e0Xe.nFf.C9s2BHnmbeikY7xnNLlLhxdD25RXHWu",
    },
    {
      email: "natalia@sample.com",
      username: "nattalia",
      displayName: "nattypoo",
      avatar: null,
      passwordHash:
        "$2b$10$SjognjMZ2lAS9e0Xe.nFf.C9s2BHnmbeikY7xnNLlLhxdD25RXHWu",
    },
    {
      email: "cherish@sample.com",
      username: "cherish",
      displayName: "cherrypoo",
      avatar: null,
      passwordHash:
        "$2b$10$SjognjMZ2lAS9e0Xe.nFf.C9s2BHnmbeikY7xnNLlLhxdD25RXHWu",
    },
  ],
  conversations: [
    {
      createdById: 1,
      createdBy: 1,
    },
  ],
  memberships: [],
  messages: [],
};

async function main() {
  const client = await pool.connect();
  try {
    console.log("seeding...");

    // delete existing data and restart IDs
    await client.query(`
    TRUNCATE TABLE
      "Message",
      "Membership",
      "Conversation",
      "User"
    RESTART IDENTITY CASCADE
  `);

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
    const conversation = await prisma.conversation.create({
      data: {
        type: "DIRECT",
        createdBy: { connect: { id: 1 } },
        memberships: {
          create: [
            { user: { connect: { id: 1 } } },
            { user: { connect: { id: 2 } } },
          ],
        },
        messages: {
          create: [
            { messageText: "Hey!", author: { connect: { id: 1 } } },
            { messageText: "Hi there.", author: { connect: { id: 2 } } },
            { messageText: "How are you?", author: { connect: { id: 1 } } },
          ],
        },
      },
    });

    // for (const conversation of seedData.conversations) {
    //   console.log("conversations");
    // }
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
