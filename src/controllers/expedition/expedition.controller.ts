import { Request, Response } from "express";
import prismaClient from "../../prisma";

export async function listExpeditions(req: Request, res: Response) {
  try {
    const userId = (req as any).userId;

    const expeditions = await prismaClient.expedition.findMany({
      where: {
        userId
      },

      include: {
        products: true
      },

      orderBy: {
        createdAt: "desc"
      }
    });

    console.log(JSON.stringify(expeditions, null, 2))
    return res.json(expeditions);

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Erro ao buscar expedições"
    });
  }
}