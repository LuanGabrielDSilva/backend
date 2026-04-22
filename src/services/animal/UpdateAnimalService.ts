import prismaClient from "../../prisma";

interface AnimalRequest {
  id: string;
  name?: string;
  type?: string;
  size?: string;
  eraId?: string;
  image?: string;
}

class UpdateAnimalService {
  async execute({ id, name, type, size, eraId, image }: AnimalRequest) {

    if (!id) {
      throw new Error("ID inválido");
    }

    const animal = await prismaClient.animal.update({
      where: { id },
      data: {
        ...(name !== undefined && { name }),
        ...(type !== undefined && { type }),
        ...(size !== undefined && { size }),
        ...(eraId !== undefined && { eraId }),
        ...(image !== undefined && { image }) // 🔥 não apaga sem querer
      }
    });

    return animal;
  }
}

export { UpdateAnimalService };