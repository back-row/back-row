/*
  Warnings:

  - You are about to drop the column `mapendlocationcolumn` on the `map` table. All the data in the column will be lost.
  - You are about to drop the column `mapendlocationrow` on the `map` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "map" DROP COLUMN "mapendlocationcolumn",
DROP COLUMN "mapendlocationrow",
ADD COLUMN     "mapendlocationx" INTEGER,
ADD COLUMN     "mapendlocationy" INTEGER;
