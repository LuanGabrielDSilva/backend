import { Request, Response } from "express";
import prismaClient from "../../prisma";

class DeleteProductController {

  async handle(req: Request, res: Response) {

    const { id } = req.params;

    // remove variantes
    await prismaClient.productVariant.deleteMany({
      where: {
        productId: id
      }
    });

    // remove produto
    await prismaClient.product.delete({
      where: {
        id
      }
    });

    return res.json({
      message: "Produto deletado"
    });

  }

}

export { DeleteProductController };