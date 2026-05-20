import { Request, Response } from "express";
import { ListCartService } from "../../services/cart/ListCartService";

class ListCartController {
  async handle(req: Request, res: Response) {
    const userId = req.userId;

    const service = new ListCartService();
    const cart = await service.execute(userId);

    return res.json(cart);
  }
}

export { ListCartController };