/*
  Warnings:

  - Made the column `usersimage` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "usersimage" SET NOT NULL;
