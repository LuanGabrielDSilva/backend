import { Request, Response } from "express";
import { DeleteEraService } from "../../services/era/DeleteEraService";

class DeleteEraController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const service = new DeleteEraService();

    const result = await service.execute(id);

    return res.json(result);
  }
}

export { DeleteEraController };