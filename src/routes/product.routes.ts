import { Router } from "express";
import { ListProductsController } from "../controllers/product/ListProductsController";

const router = Router();

const listProductsController = new ListProductsController();

router.get("/", (req, res) => {
  listProductsController.handle(req, res);
});

export default router;