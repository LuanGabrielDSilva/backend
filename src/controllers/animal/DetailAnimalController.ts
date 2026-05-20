import { Request, Response } from "express";
import { DetailAnimalService } from "../../services/animal/DetailAnimalService";

class DetailAnimalController {
  async handle(req: Request, res: Response) {

    const id = req.params.id;

    const service = new DetailAnimalService();

    const animal = await service.execute(id);

    return res.json(animal);
  }
}

export { DetailAnimalController };