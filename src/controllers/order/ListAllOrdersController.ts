import { Request, Response } from "express";
import prismaClient from "../../prisma";

export class ListOrdersController {
  async handle(req: Request, res: Response) {
    const orders = await prismaClient.order.findMany({
      include: {
        user: true,
        items: {
          include: {
            product: true
          }
        }
      },
      orderBy: {
        created_at: "desc"
      }
    });

    return res.json(orders);
  }
}