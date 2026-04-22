import { Request, Response } from "express";
import { ListAnimalService } from "../../services/animal/ListAnimalService";

class ListAnimalController {
  async handle(req: Request, res: Response) {
    const service = new ListAnimalService();
    const animals = await service.execute();

    return res.json(animals);
  }
}

export { ListAnimalController };