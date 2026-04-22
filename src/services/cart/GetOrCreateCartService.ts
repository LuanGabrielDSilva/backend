import prismaClient from "../../prisma";

class GetOrCreateCartService {
  async execute(user_id: string) {

    let cart = await prismaClient.cart.findFirst({
      where: {
        user_id,
        status: "open"
      }
    });

    if (!cart) {
      cart = await prismaClient.cart.create({
        data: {
          user_id
        }
      });
    }

    return cart;
  }
}

export { GetOrCreateCartService };