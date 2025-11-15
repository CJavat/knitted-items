/*
  Warnings:

  - You are about to drop the column `inStok` on the `Item` table. All the data in the column will be lost.
  - Added the required column `inStock` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "inStok",
ADD COLUMN     "inStock" INTEGER NOT NULL;
