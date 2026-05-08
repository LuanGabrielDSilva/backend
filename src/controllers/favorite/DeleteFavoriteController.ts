import { Request, Response } from "express";
import { DeleteFavoriteService } from "../../services/favorite/DeleteFavoriteService";

class DeleteFavoriteController {
  async handle(req: Request, res: Response) {

    const { animalId } = req.body;
    const userId = req.user_id;

    const service = new DeleteFavoriteService();

    const result = await service.execute({
      userId,
      animalId
    });

    return res.json(result);
  }
}

export { DeleteFavoriteController };