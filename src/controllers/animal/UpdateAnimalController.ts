import { Request, Response } from "express";
import { UpdateAnimalService } from "../../services/animal/UpdateAnimalService";

class UpdateAnimalController {

  async handle(req: Request, res: Response) {

    // 🆔 pega o ID do animal pela URL
    // Ex: /animals/123
    const { id } = req.params;

    // 📦 pega os dados enviados no body
    const {
      name,
      scientificName,
      size,
      weight,
      eraId,
      image,

      dieta,
      habitat,
      clima,
      locomotion,
      defense,
      descoberta,
      local,
      description,

      periodoId,

      // 🦖 lista de presas do animal
      // usada para criar relações predador/presa
      preyIds

    } = req.body;

    // ⚙️ instancia o service responsável
    // pela lógica de atualização
    const service = new UpdateAnimalService();

    // 🚀 executa atualização do animal
    const animal = await service.execute({

      id,

      name,
      scientificName,
      size,
      weight,
      eraId,
      image,

      dieta,
      habitat,
      clima,
      locomotion,
      defense,
      descoberta,
      local,
      description,

      periodoId,

      // 🦴 envia as presas para atualizar
      // cadeia alimentar
      preyIds

    });

    // 📤 retorna animal atualizado
    return res.json(animal);

  }

}

export { UpdateAnimalController };