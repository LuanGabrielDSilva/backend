import { Request, Response } from "express";
import { RemoveItemService } from "../../services/cart/RemoveItemService";

class RemoveItemController {
  async handle(req: Request, res: Response) {
    const { item_id } = req.body;

    const service = new RemoveItemService();
    const result = await service.execute(item_id);

    return res.json(result);
  }
}

export { RemoveItemController };