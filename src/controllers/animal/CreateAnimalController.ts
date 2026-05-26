import { Request, Response } from "express";

// 🔥 Service responsável por criar animais
import { CreateAnimalService } 
from "../../services/animal/CreateAnimalService";

/* =========================================================
   CONTROLLER
========================================================= */

class CreateAnimalController {

  /* =========================================================
     🦖 HANDLE
     Cria um novo animal
  ========================================================= */

  async handle(req: Request, res: Response) {

    // 🔥 Dados enviados pelo frontend
    const {
      name,
      size,
      periodoId,
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
      description
    } = req.body;

    // 🔥 Instancia o service
    const service = new CreateAnimalService();

    // 🔥 Executa criação do animal
    const animal = await service.execute({

      // Nome do animal
      name,

      // Tamanho
      size,

      // ID do período geológico
      periodoId,

      // URL da imagem
      image,

      // Dieta
      dieta,

      // Habitat
      habitat,

      // Clima em que vivia
      clima,

      // Local encontrado
      local,

      // Descoberta do fóssil
      descoberta,

      // Nome científico
      scientificName,

      // Peso
      weight,

      // Locomoção
      locomotion,

      // Defesa
      defense,

      // Descrição geral
      description
    });

    // 🔥 Retorna animal criado
    return res.json(animal);
  }
}

/* =========================================================
   EXPORT
========================================================= */

export { CreateAnimalController };