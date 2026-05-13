import { Request, Response } from "express";
import prismaClient from "../../prisma";

class ListCommentsController {
  async handle(req: Request, res: Response) {

    const productId = req.params.id;

    const comments = await prismaClient.comment.findMany({
      where: {
        productId
      },
      include: {
        user: {
          select: {
            id: true,
            name: true
          }
        }
      },
      orderBy: {
        created_at: "desc"
      }
    });

    return res.json(comments);
  }
}

export { ListCommentsController };