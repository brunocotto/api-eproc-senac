/*
  Warnings:

  - Added the required column `senha` to the `policiais` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `policiais` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "policiais" ADD COLUMN     "senha" TEXT NOT NULL,
ALTER COLUMN "email" SET NOT NULL;
