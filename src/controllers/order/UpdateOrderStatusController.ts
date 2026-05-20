import { Request, Response } from "express";
import prismaClient from "../../prisma";

export class UpdateOrderStatusController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { status } = req.body;

    const order = await prismaClient.order.update({
      where: { id },
      data: { status }
    });

    return res.json(order);
  }
}