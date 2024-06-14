/*
  Warnings:

  - Added the required column `rg` to the `agressores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rg` to the `policiais` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rg` to the `vitimas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "agressores" DROP COLUMN "rg",
ADD COLUMN     "rg" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "policiais" DROP COLUMN "rg",
ADD COLUMN     "rg" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "vitimas" DROP COLUMN "rg",
ADD COLUMN     "rg" INTEGER NOT NULL;
