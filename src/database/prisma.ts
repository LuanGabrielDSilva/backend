import { PrismaClient } from "@prisma/client";

// 🧠 instância única do Prisma (evita múltiplas conexões)
export const prisma = new PrismaClient();