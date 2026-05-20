import { Request, Response } from "express";
import prismaClient from "../../prisma";

class CreateCommentController {

  async handle(req: Request, res: Response) {

    const { id } = req.params;

    const {
      text,
      rating
    } = req.body;

    const userId = req.userId;

    const comment = await prismaClient.comment.create({
      data: {
        text,
        rating,
        productId: id,
        userId
      }
    });

    return res.json(comment);

  }

}

export { CreateCommentController };