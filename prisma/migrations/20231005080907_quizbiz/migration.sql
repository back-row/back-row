/*
  Warnings:

  - You are about to drop the column `quizanswer1` on the `quiz` table. All the data in the column will be lost.
  - You are about to drop the column `quizanswer2` on the `quiz` table. All the data in the column will be lost.
  - You are about to drop the column `quizanswer3` on the `quiz` table. All the data in the column will be lost.
  - You are about to drop the column `quizcorrectanswer` on the `quiz` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "quiz" DROP COLUMN "quizanswer1",
DROP COLUMN "quizanswer2",
DROP COLUMN "quizanswer3",
DROP COLUMN "quizcorrectanswer";
