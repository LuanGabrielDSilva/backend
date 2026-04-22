import prismaClient from "../../prisma";

class ListCartService {
  async execute(user_id: string) {

    const cart = await prismaClient.cart.findFirst({
      where: {
        user_id,
        status: "open"
      },
      include: {
        items: {
          include: {
            product: true
          }
        }
      }
    });

    return cart;
  }
}

export { ListCartService };