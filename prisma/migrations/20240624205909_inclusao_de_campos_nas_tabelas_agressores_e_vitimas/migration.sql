-- AlterTable
ALTER TABLE "agressores" ADD COLUMN     "instrucao" TEXT,
ADD COLUMN     "local_trabalho" TEXT,
ADD COLUMN     "naturalidade" TEXT;

-- AlterTable
ALTER TABLE "vitimas" ADD COLUMN     "instrucao" TEXT,
ADD COLUMN     "local_trabalho" TEXT,
ADD COLUMN     "naturalidade" TEXT;
