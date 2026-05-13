import { Request, Response } from "express";
import prismaClient from "../../prisma";

class UpdateProductController {

  async handle(req: Request, res: Response) {

    const { id } = req.params;

    const {
      name,
      price,
      description,
      image
    } = req.body;

    const product =
      await prismaClient.product.update({

        where: { id },

        data: {
          name,
          price,
          description,
          image
        }

      });

    return res.json(product);

  }

}

export { UpdateProductController };