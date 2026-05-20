import { Request, Response } from "express";
import { UpdateFoodChainService } from "../../services/food/UpdateFoodChainService";

class UpdateFoodChainController {
  async handle(req: Request, res: Response) {
    const { predatorId, preyIds } = req.body;

    const service = new UpdateFoodChainService();

    const result = await service.execute(predatorId, preyIds);

    return res.json(result);
  }
}

export { UpdateFoodChainController };