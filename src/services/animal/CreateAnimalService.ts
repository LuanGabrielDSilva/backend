import prisma from "../../prisma";

interface AnimalRequest {
  name: string;
  type: string;
  size?: string;
  periodoId: string;
  image?: string;
}

class CreateAnimalService {
  async execute({ name, type, size, image, periodoId }: AnimalRequest) {

    // 🔐 1. VALIDAR PERÍODO
    const periodoExists = await prisma.periodo.findUnique({
      where: { id: periodoId }
    });

    if (!periodoExists) {
      throw new Error("Período inválido");
    }

    // 🦖 2. CRIAR ANIMAL
    const animal = await prisma.animal.create({
      data: {
        name,
        type,
        size,
        periodoId,
        image
      }
    });

    return animal;
  }
}

export { CreateAnimalService };