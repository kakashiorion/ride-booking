/*
  Warnings:

  - Added the required column `vehicleNumber` to the `Driver` table without a default value. This is not possible if the table is not empty.
  - Made the column `vehicleName` on table `Driver` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Customer" ALTER COLUMN "ratings" SET DEFAULT ARRAY[]::INTEGER[];

-- AlterTable
ALTER TABLE "Driver" ADD COLUMN     "vehicleNumber" TEXT NOT NULL,
ALTER COLUMN "vehicleName" SET NOT NULL,
ALTER COLUMN "ratings" SET DEFAULT ARRAY[]::INTEGER[];

-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "acceptedAt" TIMESTAMP(3);
