import { Request, Response } from "express";
import prisma from "../../prisma";

class GetWalletController {
  async handle(req: any, res: Response) {

   console.log(req.user_id);

    const userId = req.user_id;

    const user = await prisma.user.findUnique({
      where: {
        id: userId
      },
      select: {
        balance: true,
        coins: true
      }
    });

    return res.json(user);
  }
}

export default new GetWalletController();