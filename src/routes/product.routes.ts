import { Router } from "express";

import { ListProductsController } from "../controllers/product/ListProductsController";
import { CreateProductController } from "../controllers/product/CreateProductController";
import { DetailProductController } from "../controllers/product/DetailProductController";

const router = Router();

router.get(
  "/",
  new ListProductsController().handle
);

router.get(
  "/:id",
  new DetailProductController().handle
);

router.post(
  "/",
  new CreateProductController().handle
);

export default router;