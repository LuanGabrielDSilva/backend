import { Request, Response } from "express";
import { AddToCartService } from "../../services/cart/AddToCartService";

class AddToCartController {
  async handle(req: Request, res: Response) {
    const user_id = "58d9cf88-ce00-4715-b03c-105c36424dcd";
    const { product_id, quantity } = req.body;

    const service = new AddToCartService();
    const result = await service.execute(user_id, product_id, quantity);

    return res.json(result);
  }
}

export { AddToCartController };