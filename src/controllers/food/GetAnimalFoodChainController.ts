import { Request, Response } from "express";

import { GetAnimalFoodChainService }
from "../../services/food/GetAnimalFoodChainService";

class GetAnimalFoodChainController {

  async handle(req: Request, res: Response) {

    const { id } = req.params;

    const service =
      new GetAnimalFoodChainService();

    const result =
      await service.execute(id);

    return res.json(result);
  }
}

export { GetAnimalFoodChainController };