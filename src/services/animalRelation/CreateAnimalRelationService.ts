import prismaClient from "../../prisma";

interface Request {
  predatorId: string;
  preyId: string;
}

class CreateAnimalRelationService {
  async execute({
    predatorId,
    preyId,
  }: Request) {

    if (predatorId === preyId) {
      throw new Error("Um animal não pode caçar ele mesmo");
    }

    const relation =
      await prismaClient.animalRelation.create({
        data: {
          predatorId,
          preyId,
        },
      });

    return relation;
  }
}

export { CreateAnimalRelationService };