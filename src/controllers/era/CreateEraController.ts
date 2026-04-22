import { Request, Response } from "express";
import { CreateEraService } from "../../services/era/CreateEraService";

class CreateEraController {
  async handle(req: Request, res: Response) {
    const { name, description, image } = req.body;

    const service = new CreateEraService();

    const era = await service.execute({
      name,
      description,
      image
    });

    return res.json(era);
  }
}

export { CreateEraController };