import prisma from "../../prisma";

interface AnimalRequest {
  name: string;
  size?: string;
  periodoId: string;
  image?: string;
  dieta?: string;
  habitat?: string;
  clima?: string;
  local?: string;
  descoberta?: string;
  scientificName?: string;
  weight?: string;
  locomotion?: string;
  defense?: string;
  description?: string;
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
    descoberta,
    scientificName,
    weight,
    locomotion,
    defense,
    description,
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
        habitat,
        clima,
        local,
        descoberta,
        scientificName,
        weight,
        locomotion,
        defense,
        description,
        

        periodo: {
          connect: { id: periodoId }
        }
      }
    });

    return animal;
  }
}

export { CreateAnimalService };