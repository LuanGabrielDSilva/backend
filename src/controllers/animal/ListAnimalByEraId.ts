import { Request, Response } from "express";
import { ListAnimalByEraService } from "../../services/animal/ListAnimalByEraService";

class ListAnimalByEraIdController {
  async handle(req: Request, res: Response) {
    const eraId = req.params.eraId;

    const service = new ListAnimalByEraService();

    const animals = await service.execute(eraId);

    return res.json(animals);
  }
}

export { ListAnimalByEraIdController };