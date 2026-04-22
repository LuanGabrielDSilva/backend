import prisma from "../../prisma";

class ListAnimalService {
  async execute() {
    const animals = await prisma.animal.findMany({
      include: {
        periodo: {
          include: {
            era: true
          }
        }
      }
    });

    return animals;
  }
}

export { ListAnimalService };