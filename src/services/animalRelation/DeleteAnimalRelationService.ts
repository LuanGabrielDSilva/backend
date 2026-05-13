import prismaClient from "../../prisma";

class DeleteAnimalRelationService {
  async execute(id: string) {

    await prismaClient.animalRelation.delete({
      where: {
        id,
      },
    });

    return {
      message: "Relação removida",
    };
  }
}

export { DeleteAnimalRelationService };