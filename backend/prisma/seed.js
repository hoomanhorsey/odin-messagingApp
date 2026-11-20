import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/index.js";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding...");

  // Destructive: clears these tables before adding seed data.
  await prisma.$executeRawUnsafe(`
    TRUNCATE TABLE
      "Message",
      "Membership",
      "Conversation",
      "User"
    RESTART IDENTITY CASCADE
  `);

  await prisma.user.createMany({
    data: [
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
        username: "natalia",
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
  });

  await prisma.conversation.create({
    data: {
      type: "DIRECT",
      createdBy: { connect: { username: "andypandy" } },
      memberships: {
        create: [
          { user: { connect: { username: "andypandy" } } },
          { user: { connect: { username: "yosh" } } },
        ],
      },
      messages: {
        create: [
          {
            messageText: "Hey!",
            createdAt: new Date("2025-01-01T12:00:00Z"),
            author: { connect: { username: "andypandy" } },
          },
          {
            messageText: "Hi there.",
            createdAt: new Date("2025-01-01T12:04:00Z"),
            author: { connect: { username: "yosh" } },
          },
          {
            messageText: "How are you?",
            createdAt: new Date("2025-01-01T12:09:00Z"),
            author: { connect: { username: "andypandy" } },
          },
        ],
      },
    },
  });

  await prisma.conversation.create({
    data: {
      type: "GROUP",
      createdBy: { connect: { username: "natalia" } },
      memberships: {
        create: [
          { user: { connect: { username: "andypandy" } } },
          { user: { connect: { username: "yosh" } } },
          { user: { connect: { username: "natalia" } } },
          { user: { connect: { username: "cherish" } } },
        ],
      },
      messages: {
        create: [
          {
            messageText: "Does anyboyd have a sandwich!",
            createdAt: new Date("2025-01-01T12:01:00Z"),

            author: { connect: { username: "andypandy" } },
          },
          {
            messageText: "I don't",
            createdAt: new Date("2025-01-01T12:03:00Z"),

            author: { connect: { username: "yosh" } },
          },
          {
            messageText: "Not me?",
            createdAt: new Date("2025-01-01T12:04:00Z"),

            author: { connect: { username: "cherish" } },
          },
          {
            messageText: "Me neither!",
            createdAt: new Date("2025-01-01T12:05:00Z"),
            author: { connect: { username: "natalia" } },
          },
          {
            messageText:
              "I have a friend who had a sandwich once Do you want me to contact them?",
            createdAt: new Date("2025-01-01T12:06:00Z"),
            author: { connect: { username: "yosh" } },
          },
          {
            messageText: "This sandwich talk is making me hungry?",
            createdAt: new Date("2025-01-01T12:08:00Z"),
            author: { connect: { username: "natalia" } },
          },
          {
            messageText: "It's making me hangry!",
            createdAt: new Date("2025-01-01T12:10:00Z"),
            author: { connect: { username: "cherish" } },
          },
          {
            messageText: "Sorry I didn't realise it would upset people.",
            createdAt: new Date("2025-01-01T12:12:00Z"),
            author: { connect: { username: "andypandy" } },
          },
          {
            messageText: "I'm not upset!",
            createdAt: new Date("2025-01-01T12:16:00Z"),
            author: { connect: { username: "yosh" } },
          },
        ],
      },
    },
  });

  await prisma.conversation.create({
    data: {
      type: "GROUP",
      createdBy: { connect: { username: "natalia" } },
      memberships: {
        create: [
          { user: { connect: { username: "andypandy" } } },
          { user: { connect: { username: "yosh" } } },
          { user: { connect: { username: "natalia" } } },
          { user: { connect: { username: "cherish" } } },
        ],
      },
      messages: {
        create: [
          {
            messageText:
              "I’ve been reading about the Crimean War. It seems like the dispute over Christian holy sites was the spark, but not the whole explanation.",
            createdAt: new Date("2025-01-01T12:30:00Z"),
            author: { connect: { username: "natalia" } },
          },
          {
            messageText:
              "Right. France and Russia were competing over influence regarding Catholic and Orthodox access to holy places in Ottoman-controlled Palestine. But that religious dispute became much more dangerous because the great powers were already competing for influence.",
            createdAt: new Date("2025-01-01T12:31:00Z"),
            author: { connect: { username: "andypandy" } },
          },
          {
            messageText:
              "And Russia wanted the Ottoman sultan to recognize the tsar’s role as protector of Orthodox Christians across the empire. That wasn’t just a religious request—it could also give Russia a reason to intervene in Ottoman affairs.",
            createdAt: new Date("2025-01-01T12:35:00Z"),
            author: { connect: { username: "yosh" } },
          },
          {
            messageText:
              "The Ottoman Empire was weakening, so other powers were anxious about what might happen if it lost more territory or influence. That wider diplomatic problem is often called the Eastern Question.",
            createdAt: new Date("2025-01-01T12:36:00Z"),
            author: { connect: { username: "cherish" } },
          },
          {
            messageText:
              "Nicholas I seems to have expected the Ottomans to give way under pressure. When they didn’t accept his demands, Russia occupied the Danubian principalities of Moldavia and Wallachia in 1853.",
            createdAt: new Date("2025-01-01T12:40:00Z"),
            author: { connect: { username: "natalia" } },
          },
          {
            messageText:
              "That move made the dispute look like a direct threat to Ottoman territory. The Ottomans declared war on Russia in October 1853, and the conflict escalated after the Russian fleet destroyed an Ottoman squadron at Sinop.",
            createdAt: new Date("2025-01-01T12:41:00Z"),
            author: { connect: { username: "andypandy" } },
          },
          {
            messageText:
              "Britain and France were worried that Russian expansion could upset the balance of power and threaten their interests around the eastern Mediterranean. So they backed the Ottomans and eventually joined the war against Russia.",
            createdAt: new Date("2025-01-01T12:43:00Z"),
            author: { connect: { username: "yosh" } },
          },
          {
            messageText:
              "So it wasn’t simply ‘religion caused the war.’ The holy-sites dispute helped trigger the crisis, while arguments about Russian influence, Ottoman territory, and European power politics made it much harder to contain.",
            createdAt: new Date("2025-01-01T12:45:00Z"),
            author: { connect: { username: "cherish" } },
          },
          {
            messageText:
              "Exactly. It also sounds like miscalculation mattered: Russia used military pressure expecting concessions, but that encouraged resistance and drew Britain and France into the crisis.",
            createdAt: new Date("2025-01-01T12:47:00Z"),
            author: { connect: { username: "natalia" } },
          },
          {
            messageText:
              "That makes the causes feel layered: a specific dispute, competing claims to protect religious communities, the weakening Ottoman Empire, and the other powers’ fear that Russia would gain too much influence.",
            createdAt: new Date("2025-01-01T12:49:00Z"),
            author: { connect: { username: "andypandy" } },
          },
          {
            messageText:
              "And the name is a little misleading, since the conflict was about much more than Crimea. Crimea became the main theater for the fighting between Russia and the British, French, and Ottoman forces.",
            createdAt: new Date("2025-01-01T12:50:00Z"),
            author: { connect: { username: "yosh" } },
          },
          {
            messageText:
              "So a good summary might be: the holy-sites dispute was the immediate trigger, but the war grew out of a broader struggle over the future of the Ottoman Empire and the balance of power in Europe.",
            createdAt: new Date("2025-01-01T12:52:00Z"),
            author: { connect: { username: "cherish" } },
          },
        ],
      },
    },
  });

  console.log("seeding done!");
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
