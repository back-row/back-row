/*
  Warnings:

  - Made the column `usersname` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `usersemail` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userspassword` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "usersname" SET NOT NULL,
ALTER COLUMN "usersemail" SET NOT NULL,
ALTER COLUMN "userspassword" SET NOT NULL;
