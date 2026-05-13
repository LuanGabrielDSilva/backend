import { Request, Response } from "express";
import { FinalizeCartService } from "../../services/cart/FinalizeCartService";

class FinalizeCartController {
  async handle(req: Request, res: Response) {

    const user_id = req.user_id;

    const service = new FinalizeCartService();

    const result = await service.execute(user_id);

    return res.json(result);
  }
}

export { FinalizeCartController };