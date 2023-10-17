/*
  Warnings:

  - You are about to drop the column `mapJSON` on the `map` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "map" DROP COLUMN "mapJSON",
ADD COLUMN     "mapjson" TEXT;
