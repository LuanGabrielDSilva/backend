import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";

export class CreateOrderController {
  async handle(req: Request, res: Response) {

    console.log("🔥 CREATE ORDER CHAMADO");

    const userId = req.userId;

    console.log("USER ID:", userId);

    const service = new CreateOrderService();

    const order = await service.execute({ userId });

    return res.json(order);
  }
}