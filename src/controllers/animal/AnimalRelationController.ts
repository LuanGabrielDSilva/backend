import { Request, Response } from "express";

import { CreateAnimalRelationService }
from "../../services/animalRelation/CreateAnimalRelationService";

import { GetAnimalFoodChainService }
from "../../services/animalRelation/GetAnimalFoodChainService";

import { DeleteAnimalRelationService }
from "../../services/animalRelation/DeleteAnimalRelationService";

class AnimalRelationController {

  async create(req: Request, res: Response) {

    const {
      predatorId,
      preyId,
    } = req.body;

    const service =
      new CreateAnimalRelationService();

    const relation =
      await service.execute({
        predatorId,
        preyId,
      });

    return res.json(relation);
  }

  async show(req: Request, res: Response) {

    const { animalId } = req.params;

    const service =
      new GetAnimalFoodChainService();

    const result =
      await service.execute(animalId);

    return res.json(result);
  }

  async delete(req: Request, res: Response) {

    const { id } = req.params;

    const service =
      new DeleteAnimalRelationService();

    const result =
      await service.execute(id);

    return res.json(result);
  }
}

export { AnimalRelationController };