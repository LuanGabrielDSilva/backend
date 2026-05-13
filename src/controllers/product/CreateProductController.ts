import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
  async handle(req: Request, res: Response) {

    const { name, price, description, image } = req.body;

    const service = new CreateProductService();

    const result = await service.execute(
      name,
      price,
      description,
      image
    );

    return res.json(result);
  }
}

export { CreateProductController };