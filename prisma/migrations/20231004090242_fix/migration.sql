/*
  Warnings:

  - You are about to drop the column `mapmap` on the `map` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "map" DROP COLUMN "mapmap";

-- AlterTable
ALTER TABLE "quiz" ALTER COLUMN "quizquestion" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "tutorial" ALTER COLUMN "tutorialdescription" SET DATA TYPE TEXT,
ALTER COLUMN "tutorialhint" SET DATA TYPE TEXT;
