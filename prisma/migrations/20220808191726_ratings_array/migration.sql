/*
  Warnings:

  - You are about to drop the column `rating` on the `Customer` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Driver` table. All the data in the column will be lost.
  - You are about to alter the column `customerRating` on the `Trip` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `driverRating` on the `Trip` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Made the column `name` on table `Customer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `Driver` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Customer" DROP COLUMN "rating",
ADD COLUMN     "ratings" INTEGER[],
ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "Driver" DROP COLUMN "rating",
ADD COLUMN     "ratings" INTEGER[],
ALTER COLUMN "name" SET NOT NULL;

-- AlterTable
ALTER TABLE "Trip" ALTER COLUMN "customerRating" SET DATA TYPE INTEGER,
ALTER COLUMN "driverRating" SET DATA TYPE INTEGER;
