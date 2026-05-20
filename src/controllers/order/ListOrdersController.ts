import { Request, Response } from "express";
import prismaClient from "../../prisma";

export class ListOrdersController {
  
  async handle(req: Request, res: Response) {
    
    
    try {
      
      const orders = await prismaClient.order.findMany({
        
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true
            }
          },
          items: {
            include: {
              product: {
                select: {
                  id: true,
                  name: true,
                  image: true,
                  price: true
                }
              }
            }
          }
        },
        orderBy: {
          created_at: "desc"
        }
      });

      return res.json(orders);
    } catch (error) {
      console.error("Erro ao listar pedidos:", error);
      
      return res.status(500).json({ error: "Erro ao buscar pedidos" });
      
    }
  }
}