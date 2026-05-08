import { Request, Response } from "express";
import { ListFavoritesService } from "../../services/favorite/ListFavoritesService";

class ListFavoritesController {
  async handle(req: Request, res: Response) {

    const userId = req.user_id;

    const service = new ListFavoritesService();

    const favorites = await service.execute(userId);

    return res.json(favorites);
  }
}

export { ListFavoritesController };