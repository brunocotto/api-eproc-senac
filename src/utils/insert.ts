import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const result = await prisma.$executeRaw`
    INSERT INTO visitas (mp_id, policial_idmp_id, data, hora_inicio, hora_fim, presente) VALUES
    (1, 1, '2024-01-15', '2024-01-15 10:00:00', '2024-01-15 11:00:00', true),
    (2, 2, '2024-02-15', '2024-02-15 11:00:00', '2024-02-15 12:00:00', true),
    (3, 3, '2024-03-15', '2024-03-15 12:00:00', '2024-03-15 13:00:00', true),
    (4, 4, '2024-04-15', '2024-04-15 13:00:00', '2024-04-15 14:00:00', true),
    (5, 5, '2024-05-15', '2024-05-15 14:00:00', '2024-05-15 15:00:00', true),
    (6, 6, '2024-06-15', '2024-06-15 15:00:00', '2024-06-15 16:00:00', true),
    (7, 7, '2024-07-15', '2024-07-15 16:00:00', '2024-07-15 17:00:00', true),
    (8, 8, '2024-08-15', '2024-08-15 17:00:00', '2024-08-15 18:00:00', true),
    (9, 9, '2024-09-15', '2024-09-15 18:00:00', '2024-09-15 19:00:00', true),
    (10, 10, '2024-10-15', '2024-10-15 19:00:00', '2024-10-15 20:00:00', true);
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
