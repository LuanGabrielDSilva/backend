import prisma from "../../prisma";

interface AnimalRequest {
  name: string;
  size?: string;
  periodoId: string;
  image?: string;
  dieta?: string;
}

class CreateAnimalService {
  async execute({ name, size, image, periodoId, dieta }: AnimalRequest) {

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
    type: "unknown", // ou vem do frontend
    size,
    image,
    dieta,
    periodo: {
      connect: { id: periodoId }
    }
  }
});

    return animal;
  }
}

export { CreateAnimalService };