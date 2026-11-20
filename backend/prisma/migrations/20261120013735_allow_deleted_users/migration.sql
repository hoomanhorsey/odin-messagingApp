-- AlterTable
ALTER TABLE "Conversation" ALTER COLUMN "createdById" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Message" ALTER COLUMN "authorId" DROP NOT NULL;
