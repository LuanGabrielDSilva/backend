import { Request, Response } from "express";
import { UpdateCartItemService } from "../../services/cart/UpdateCartItemService";

class UpdateCartItemController {
  async handle(req: Request, res: Response) {

    const { item_id, quantity } = req.body;

    const service = new UpdateCartItemService();

    const result = await service.execute(item_id, quantity);

    return res.json(result);
  }
}

export { UpdateCartItemController };