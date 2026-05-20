import { Request, Response } from "express";
import { FinalizeCartService } from "../../services/cart/FinalizeCartService";

class FinalizeCartController {
  async handle(req: Request, res: Response) {

    const userId = req.userId;

    const service = new FinalizeCartService();

    const result = await service.execute(userId);

    return res.json(result);
  }
}

export { FinalizeCartController };