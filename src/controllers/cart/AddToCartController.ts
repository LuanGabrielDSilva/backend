import { Request, Response } from "express";
import { AddToCartService } from "../../services/cart/AddToCartService";

class AddToCartController {

  async handle(req: Request, res: Response) {

    const userId = req.userId;

    const { product_id, quantity } = req.body;

    const service = new AddToCartService();

    const result = await service.execute(
      userId,
      product_id,
      quantity
    );

    return res.json(result);
  }
}

export { AddToCartController };