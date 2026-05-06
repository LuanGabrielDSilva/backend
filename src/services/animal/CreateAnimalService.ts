import prisma from "../../prisma";

interface AnimalRequest {
  name: string;
  size?: string;
  periodoId: string;
  image?: string;
  dieta?: string;

  // NOVOS CAMPOS
  habitat?: string;
  clima?: string;
  local?: string;
  descoberta?: string;
}

class CreateAnimalService {
  async execute({
    name,
    size,
    image,
    periodoId,
    dieta,
    habitat,
    clima,
    local,
    descoberta
  }: AnimalRequest) {

    // 🔐 VALIDAR PERÍODO
    const periodoExists = await prisma.periodo.findUnique({
      where: { id: periodoId }
    });

    if (!periodoExists) {
      throw new Error("Período inválido");
    }

    // 🦖 CRIAR ANIMAL
    const animal = await prisma.animal.create({
      data: {
        name,
        type: "unknown",
        size,
        image,
        dieta,

        // NOVOS CAMPOS
        habitat,
        clima,
        local,
        descoberta,

        periodo: {
          connect: { id: periodoId }
        }
      }
    });

    return animal;
  }
}

export { CreateAnimalService };