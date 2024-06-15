/*
  Warnings:

  - You are about to drop the column `policial_idmp_id` on the `visitas` table. All the data in the column will be lost.
  - Added the required column `policial_id` to the `visitas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "visitas" DROP CONSTRAINT "visitas_policial_idmp_id_fkey";

-- AlterTable
ALTER TABLE "visitas" DROP COLUMN "policial_idmp_id",
ADD COLUMN     "policial_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "visitas" ADD CONSTRAINT "visitas_policial_id_fkey" FOREIGN KEY ("policial_id") REFERENCES "policiais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
