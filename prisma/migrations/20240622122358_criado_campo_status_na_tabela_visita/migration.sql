-- CreateEnum
CREATE TYPE "VisitaStatus" AS ENUM ('AGENDADA', 'CONCLUIDA', 'CANCELADA', 'REAGENDADA');

-- AlterTable
ALTER TABLE "visitas" ADD COLUMN     "status" "VisitaStatus" NOT NULL DEFAULT 'AGENDADA';
