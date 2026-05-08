import { Request, Response } from "express";
import { CreateFavoriteService } from "../../services/favorite/CreateFavoriteService";

class CreateFavoriteController {
  async handle(req: Request, res: Response) {

    const { animalId } = req.body;
    const userId = req.user_id;

    const service = new CreateFavoriteService();

    const favorite = await service.execute({
      userId,
      animalId
    });

    return res.json(favorite);
  }
}

export { CreateFavoriteController };