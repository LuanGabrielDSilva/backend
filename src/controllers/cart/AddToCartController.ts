import { Request, Response } from "express";
import { AddToCartService } from "../../services/cart/AddToCartService";

class AddToCartController {

  async handle(req: Request, res: Response) {

    console.log(req.body);
    console.log(req.user_id);

    const user_id = req.user_id;

    const { product_id, quantity } = req.body;

    const service = new AddToCartService();

    const result = await service.execute(
      user_id,
      product_id,
      quantity
    );

    return res.json(result);
  }
}

export { AddToCartController };