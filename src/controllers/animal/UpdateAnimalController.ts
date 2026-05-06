import { Request, Response } from "express";
import { UpdateAnimalService } from "../../services/animal/UpdateAnimalService";

class UpdateAnimalController {
  async handle(req: Request, res: Response) {

    const { id } = req.params;

    const {
      name,
      type,
      size,
      eraId,
      image,
      dieta,
      habitat,
      clima,
      descoberta,
      local,
      periodoId
    } = req.body;

    const service = new UpdateAnimalService();

    const animal = await service.execute({
      id,
      name,
      type,
      size,
      eraId,
      image,
      dieta,
      habitat,
      clima,
      descoberta,
      local,
      periodoId
    });

    return res.json(animal);
  }
}

export { UpdateAnimalController };