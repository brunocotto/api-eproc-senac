/*
  Warnings:

  - A unique constraint covering the columns `[cpf]` on the table `agressores` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rg]` on the table `agressores` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `agressores` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `policiais` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rg]` on the table `policiais` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `policiais` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[matricula]` on the table `policiais` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpf]` on the table `vitimas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[rg]` on the table `vitimas` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `vitimas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "agressores_cpf_key" ON "agressores"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "agressores_rg_key" ON "agressores"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "agressores_email_key" ON "agressores"("email");

-- CreateIndex
CREATE UNIQUE INDEX "policiais_cpf_key" ON "policiais"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "policiais_rg_key" ON "policiais"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "policiais_email_key" ON "policiais"("email");

-- CreateIndex
CREATE UNIQUE INDEX "policiais_matricula_key" ON "policiais"("matricula");

-- CreateIndex
CREATE UNIQUE INDEX "vitimas_cpf_key" ON "vitimas"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "vitimas_rg_key" ON "vitimas"("rg");

-- CreateIndex
CREATE UNIQUE INDEX "vitimas_email_key" ON "vitimas"("email");
