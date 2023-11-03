/*
  Warnings:

  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Company2` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Company3` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employee2` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employee3` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Playlist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Company" DROP CONSTRAINT "Company_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "Company2" DROP CONSTRAINT "Company2_employee2Id_fkey";

-- DropForeignKey
ALTER TABLE "Company3" DROP CONSTRAINT "Company3_employee2Id_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "Company";

-- DropTable
DROP TABLE "Company2";

-- DropTable
DROP TABLE "Company3";

-- DropTable
DROP TABLE "Employee";

-- DropTable
DROP TABLE "Employee2";

-- DropTable
DROP TABLE "Employee3";

-- DropTable
DROP TABLE "Playlist";

-- CreateTable
CREATE TABLE "MasterDrive" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MasterDrive_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "masterDriveId" TEXT NOT NULL,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Folder" (
    "id" TEXT NOT NULL,
    "masterDriveId" TEXT NOT NULL,

    CONSTRAINT "Folder_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "MasterDrive_userId_key" ON "MasterDrive"("userId");

-- AddForeignKey
ALTER TABLE "MasterDrive" ADD CONSTRAINT "MasterDrive_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_masterDriveId_fkey" FOREIGN KEY ("masterDriveId") REFERENCES "MasterDrive"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Folder" ADD CONSTRAINT "Folder_masterDriveId_fkey" FOREIGN KEY ("masterDriveId") REFERENCES "MasterDrive"("id") ON DELETE CASCADE ON UPDATE CASCADE;
