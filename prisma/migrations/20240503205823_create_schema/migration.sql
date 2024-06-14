-- CreateTable
CREATE TABLE "vitimas" (
    "id" SERIAL NOT NULL,
    "endereco_id" INTEGER NOT NULL,
    "nome" TEXT,
    "nacionalidade" TEXT,
    "estado_civil" TEXT,
    "sexo" TEXT,
    "cpf" TEXT,
    "rg" TEXT,
    "telefone" TEXT,
    "email" TEXT,
    "profissao" TEXT,
    "filiacao" TEXT,
    "data_nascimento" TIMESTAMP(3),

    CONSTRAINT "vitimas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agressores" (
    "id" SERIAL NOT NULL,
    "endereco_id" INTEGER NOT NULL,
    "nome" TEXT,
    "nacionalidade" TEXT,
    "estado_civil" TEXT,
    "sexo" TEXT,
    "cpf" TEXT,
    "rg" TEXT,
    "telefone" TEXT,
    "email" TEXT,
    "profissao" TEXT,
    "filiacao" TEXT,
    "data_nascimento" TIMESTAMP(3),

    CONSTRAINT "agressores_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enderecos" (
    "id" SERIAL NOT NULL,
    "estado" TEXT,
    "cidade" TEXT,
    "cep" TEXT,
    "rua" TEXT,
    "numero" INTEGER,
    "complemento" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,

    CONSTRAINT "enderecos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "policiais" (
    "id" SERIAL NOT NULL,
    "endereco_id" INTEGER NOT NULL,
    "nome" TEXT,
    "cpf" TEXT,
    "rg" TEXT,
    "telefone" TEXT,
    "email" TEXT,
    "data_nascimento" TIMESTAMP(3),
    "matricula" INTEGER,
    "data_admissao" TIMESTAMP(3) NOT NULL,
    "turno" TEXT,
    "batalhao" TEXT,

    CONSTRAINT "policiais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medidas_protetivas" (
    "id" SERIAL NOT NULL,
    "vitima_id" INTEGER NOT NULL,
    "agressor_id" INTEGER NOT NULL,
    "tipo_acao" TEXT NOT NULL,
    "num_processo" INTEGER NOT NULL,
    "num_ocorrencia" INTEGER NOT NULL,
    "orgao_expedidor" TEXT NOT NULL,
    "primeira_visita" BOOLEAN NOT NULL,
    "nivel_frida" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL,
    "expira_em" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "medidas_protetivas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visitas" (
    "id" SERIAL NOT NULL,
    "mp_id" INTEGER NOT NULL,
    "policial_idmp_id" INTEGER NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "hora_inicio" TIMESTAMP(3) NOT NULL,
    "hora_fim" TIMESTAMP(3) NOT NULL,
    "presente" BOOLEAN NOT NULL,

    CONSTRAINT "visitas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "vitimas" ADD CONSTRAINT "vitimas_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "enderecos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "agressores" ADD CONSTRAINT "agressores_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "enderecos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "policiais" ADD CONSTRAINT "policiais_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "enderecos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medidas_protetivas" ADD CONSTRAINT "medidas_protetivas_vitima_id_fkey" FOREIGN KEY ("vitima_id") REFERENCES "vitimas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medidas_protetivas" ADD CONSTRAINT "medidas_protetivas_agressor_id_fkey" FOREIGN KEY ("agressor_id") REFERENCES "agressores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "visitas" ADD CONSTRAINT "visitas_mp_id_fkey" FOREIGN KEY ("mp_id") REFERENCES "medidas_protetivas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "visitas" ADD CONSTRAINT "visitas_policial_idmp_id_fkey" FOREIGN KEY ("policial_idmp_id") REFERENCES "policiais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
