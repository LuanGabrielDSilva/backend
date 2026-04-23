import { Request, Response } from "express";
import { CreateAnimalService } from "../../services/animal/CreateAnimalService";

class CreateAnimalController {
  async handle(req: Request, res: Response) {

    const { name, size, periodoId, image, dieta } = req.body;

    const service = new CreateAnimalService();

    const animal = await service.execute({
      name,
      size,
      periodoId,
      image,
      dieta
    });

    return res.json(animal);
  }
}

export { CreateAnimalController };