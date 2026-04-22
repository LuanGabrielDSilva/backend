import { Request, Response } from "express";
import { CreateAnimalService } from "../../services/animal/CreateAnimalService";

class CreateAnimalController {
  async handle(req: Request, res: Response) {
    const { name, type, size, periodoId, image } = req.body; // 👈 ADICIONA AQUI

    const service = new CreateAnimalService();

    const animal = await service.execute({
      name,
      type,
      size,
      periodoId,
      image 
    });

    return res.json(animal);
  }
}

export { CreateAnimalController };