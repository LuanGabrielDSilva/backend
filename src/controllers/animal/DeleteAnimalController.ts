import { Request, Response } from "express";
import { DeleteAnimalService } from "../../services/animal/DeleteAnimalService";

class DeleteAnimalController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = new DeleteAnimalService();
    const result = await service.execute(id);

    return res.json(result);
  }
}

export { DeleteAnimalController };