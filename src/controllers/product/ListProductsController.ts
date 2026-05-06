import { Request, Response } from "express";
import prismaClient from "../../prisma";

export class ListProductsController {
  async handle(req: Request, res: Response) {
    const products = await prismaClient.product.findMany();

    return res.json(products);
  }
}