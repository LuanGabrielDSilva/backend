import { Request, Response } from "express";
import prismaClient from "../prisma";

export async function listExpeditions(req: Request, res: Response) {
  try {
    const userId = (req as any).userId; // se tiver auth middleware

    const expeditions = await prismaClient.expedition.findMany({
      where: {
        userId
      },
      orderBy: {
        createdAt: "desc"
      }
    });

    return res.json(expeditions);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao buscar expedições" });
  }
}