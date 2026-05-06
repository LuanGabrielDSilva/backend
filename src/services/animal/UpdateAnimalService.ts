import prismaClient from "../../prisma";

interface AnimalRequest {
  id: string;

  name?: string;
  type?: string;
  size?: string;
  eraId?: string;
  image?: string;

  // NOVOS CAMPOS
  dieta?: string;
  habitat?: string;
  clima?: string;
  local?: string;
  descoberta?: string;

  periodoId?: string;
}

class UpdateAnimalService {
  async execute({
    id,
    name,
    type,
    size,
    eraId,
    image,
    dieta,
    habitat,
    clima,
    local,
    descoberta,
    periodoId
  }: AnimalRequest) {

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
        ...(image !== undefined && { image }),

        // NOVOS CAMPOS
        ...(dieta !== undefined && { dieta }),
        ...(habitat !== undefined && { habitat }),
        ...(clima !== undefined && { clima }),
        ...(local !== undefined && { local }),
        ...(descoberta !== undefined && { descoberta }),

        ...(periodoId !== undefined && {
          periodo: {
            connect: { id: periodoId }
          }
        })
      }
    });

    return animal;
  }
}

export { UpdateAnimalService };