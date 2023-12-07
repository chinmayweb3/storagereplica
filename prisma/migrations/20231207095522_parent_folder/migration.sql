-- AlterTable
ALTER TABLE "File" ADD COLUMN     "parentFolder" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "Folder" ADD COLUMN     "parentFolder" TEXT NOT NULL DEFAULT '';
