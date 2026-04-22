import { Request, Response } from "express";
import { ListEraService } from "../../services/era/ListEraService";

class ListEraController {
  async handle(req: Request, res: Response) {
    const service = new ListEraService();
    const eras = await service.execute();

    return res.json(eras);
  }
}

export { ListEraController };