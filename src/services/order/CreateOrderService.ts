import prismaClient from "../../prisma";

interface Request {
  userId: string;
}

export class CreateOrderService {
  async execute({ userId }: Request) {
console.log("🔥 CREATE ORDER FOI CHAMADO", userId);

    const cart = await prismaClient.cart.findFirst({
  where: {
    userId
  },
  include: {
    items: {
      include: {
        product: true
      }
    }
  }
});

console.log("🛒 CART ENCONTRADO:");
console.log(JSON.stringify(cart, null, 2));
    
    console.log("🛒 CART:", cart);

    if (!cart || cart.items.length === 0) {
      throw new Error("Carrinho vazio");
    }

    const total = cart.items.reduce((acc, item) => {
      return acc + item.quantity * item.product.price;
    }, 0);

    const order = await prismaClient.order.create({
      data: {
        userId,
        total,
        status: "pending",
        items: {
          create: cart.items.map(item => ({
            productId: item.product.id, // ✅ AQUI É A CORREÇÃO
            quantity: item.quantity,
            price: item.product.price
          }))
        }
      },
      include: {
        user: true,     // 👈 importante pro admin
        items: {
          include: {
            product: true
          }
        }
      }
    });

    await prismaClient.cartItem.deleteMany({
      where: { cart_id: cart.id }
    });

    return order;
  }
}