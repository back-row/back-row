/*
  Warnings:

  - A unique constraint covering the columns `[usersname]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[usersemail]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "map" ADD COLUMN     "mapendlocationcolumn" INTEGER,
ADD COLUMN     "mapendlocationrow" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "users_usersname_key" ON "users"("usersname");

-- CreateIndex
CREATE UNIQUE INDEX "users_usersemail_key" ON "users"("usersemail");
