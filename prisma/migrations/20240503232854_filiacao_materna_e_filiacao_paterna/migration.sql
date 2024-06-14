/*
  Warnings:

  - You are about to drop the column `filiacao` on the `agressores` table. All the data in the column will be lost.
  - You are about to drop the column `filiacao` on the `vitimas` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "agressores" DROP COLUMN "filiacao",
ADD COLUMN     "filiacao_materna" TEXT,
ADD COLUMN     "filiacao_paterna" TEXT;

-- AlterTable
ALTER TABLE "vitimas" DROP COLUMN "filiacao",
ADD COLUMN     "filiacao_materna" TEXT,
ADD COLUMN     "filiacao_paterna" TEXT;
