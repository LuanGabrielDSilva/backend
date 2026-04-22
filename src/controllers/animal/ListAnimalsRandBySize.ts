import { Request, Response } from "express";
import prismaClient from "../../prisma";

class ListAnimalsRandBySize {
  async handle(req: Request, res: Response) {
    try {
      const size = req.query.size as string | undefined;

      // 🧠 1. buscar animais (com filtro opcional)
      const animals = await prismaClient.animal.findMany({
        where: size ? { size } : undefined,
      });

      // 🎲 2. embaralhar lista
      const shuffled = animals.sort(() => Math.random() - 0.5);

      // 📦 3. retornar organizados
      return res.json(shuffled);

    } catch (error: any) {
      return res.status(500).json({
        error: error.message,
      });
    }
  }
}

export { ListAnimalsRandBySize };