import prismaClient from "../../prisma";

class CreateProductService {
  async execute(name: string, price: number, description?: string) {

    const product = await prismaClient.product.create({
      data: {
        name,
        price,
        description
      }
    });

    return product;
  }
}

export { CreateProductService };