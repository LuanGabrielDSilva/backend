import { Request, Response } from "express";
import { CreateFoodChainService } from "../../services/food/CreateFoodChainService";

class CreateFoodChainController {
  async handle(req: Request, res: Response) {

    const { predatorId, preyId } = req.body;

    const service = new CreateFoodChainService();

    const result = await service.execute({
      predatorId,
      preyId
    });

    return res.json(result);
  }
}

export { CreateFoodChainController };