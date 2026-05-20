import { Request, Response } from "express";
import prismaClient from "../../prisma";

export class DeleteOrderController {
  async handle(req: Request, res: Response) {

    const { id } = req.params;

    // primeiro remove os itens do pedido
    await prismaClient.orderItem.deleteMany({
      where: {
        orderId: id
      }
    });

    // depois remove o pedido
    await prismaClient.order.delete({
      where: {
        id
      }
    });

    return res.json({
      message: "Pedido deletado"
    });
  }
}