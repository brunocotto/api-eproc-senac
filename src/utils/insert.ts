import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const result = await prisma.$executeRaw`
    INSERT INTO visitas (mp_id, policial_id, data, hora_inicio, hora_fim, presente) VALUES
    (31, 10, '2024-01-15', '2024-01-15 10:00:00', '2024-01-15 11:00:00', true),
    (32, 12, '2024-02-15', '2024-02-15 11:00:00', '2024-02-15 12:00:00', true),
    (33, 13, '2024-03-15', '2024-03-15 12:00:00', '2024-03-15 13:00:00', true),
    (34, 14, '2024-04-15', '2024-04-15 13:00:00', '2024-04-15 14:00:00', true),
    (35, 15, '2024-05-15', '2024-05-15 14:00:00', '2024-05-15 15:00:00', true),
    (35, 16, '2024-06-15', '2024-06-15 15:00:00', '2024-06-15 16:00:00', true),
    (34, 17, '2024-07-15', '2024-07-15 16:00:00', '2024-07-15 17:00:00', true),
    (33, 18, '2024-08-15', '2024-08-15 17:00:00', '2024-08-15 18:00:00', true),
    (32, 19, '2024-09-15', '2024-09-15 18:00:00', '2024-09-15 19:00:00', true),
    (31, 11, '2024-10-15', '2024-10-15 19:00:00', '2024-10-15 20:00:00', true);







  `;
  console.log('Usuários inseridos com SQL bruto:', result);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
