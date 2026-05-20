import { Request, Response } from "express";
import { UpdateAnimalService } from "../../services/animal/UpdateAnimalService";

class UpdateAnimalController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const {
      name,
      scientificName,
      size,
      weight,
      eraId,
      image,

      dieta,
      habitat,
      clima,
      locomotion,
      defense,
      descoberta,
      local,
      description,

      periodoId,

      // 🦖 NOVO
      preyIds
    } = req.body;

    const service = new UpdateAnimalService();

    const animal = await service.execute({
      id,

      name,
      scientificName,
      size,
      weight,
      eraId,
      image,

      dieta,
      habitat,
      clima,
      locomotion,
      defense,
      descoberta,
      local,
      description,
      periodoId,
      preyIds
    });

    return res.json(animal);
  }
}

export { UpdateAnimalController };