import { Router } from "express";
import { CreateAnimalController } from "../controllers/animal/CreateAnimalController";
import { ListAnimalController } from "../controllers/animal/ListAnimalController";
import { DeleteAnimalController } from "../controllers/animal/DeleteAnimalController";
import { UpdateAnimalController } from "../controllers/animal/UpdateAnimalController";
import { ListAnimalsRandBySize } from "../controllers/animal/ListAnimalsRandBySize";
import { ListAnimalByEraIdController } from "../controllers/animal/ListAnimalByEraId";

const router = Router();

/* ======================
   CREATE
====================== */
router.post("/", new CreateAnimalController().handle);

/* ======================
   SPECIAL ROUTES 
====================== */
router.get("/era/:eraId", new ListAnimalByEraIdController().handle);
router.get("/random/:size", new ListAnimalsRandBySize().handle);

/* ======================
   LISTAR TODOS
====================== */
router.get("/", new ListAnimalController().handle);

/* ======================
   UPDATE / DELETE
====================== */
router.delete("/:id", new DeleteAnimalController().handle);
router.put("/:id", new UpdateAnimalController().handle);

export default router;