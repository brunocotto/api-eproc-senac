/*
  Warnings:

  - Added the required column `sexo` to the `agressores` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sexo` to the `vitimas` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Sexo" AS ENUM ('Feminino', 'Masculino');

-- AlterTable
ALTER TABLE "agressores" DROP COLUMN "sexo",
ADD COLUMN     "sexo" "Sexo" NOT NULL;

-- AlterTable
ALTER TABLE "vitimas" DROP COLUMN "sexo",
ADD COLUMN     "sexo" "Sexo" NOT NULL;
