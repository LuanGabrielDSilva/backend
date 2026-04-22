import { Request, Response, NextFunction } from "express";
import prismaClient from "../prisma";

export async function isAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user_id = req.user_id;

    // 🔒 verifica se veio user_id
    if (!user_id) {
      return res.status(401).json({ error: "Usuário não autenticado" });
    }

    // 🔎 busca usuário no banco
    const user = await prismaClient.user.findUnique({
      where: { id: user_id }
    });

    // 🚫 se não existir
    if (!user) {
      return res.status(403).json({ error: "Usuário não encontrado" });
    }

    // 🚫 se não for admin
    if (user.role !== "admin") {
      return res.status(403).json({ error: "Acesso negado" });
    }

    // ✅ liberado
    return next();

  } catch (error) {
    return res.status(500).json({ error: "Erro interno no servidor" });
  }
}