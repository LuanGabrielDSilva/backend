import { Request, Response } from "express";
import { UpdateEraService } from "../../services/era/UpdateEraService";

class UpdateEraController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { name, description, image } = req.body;

    const service = new UpdateEraService();

    const era = await service.execute({
      id,
      name,
      description,
      image
    });

    return res.json(era);
  }
}

export { UpdateEraController };