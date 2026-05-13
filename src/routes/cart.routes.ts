import { Router } from "express";
import { AddToCartController } from "../controllers/cart/AddToCartController";
import { ListCartController } from "../controllers/cart/ListCartController";
import { RemoveItemController } from "../controllers/cart/RemoveItemController";
import { isAuthenticated } from "../middlewares/isAuthenticated";
import { FinalizeCartController } from "../controllers/cart/FinalizeCartController";

const router = Router();

router.post("/add", isAuthenticated, new AddToCartController().handle);
router.get("/", isAuthenticated, new ListCartController().handle);
router.delete("/remove", isAuthenticated, new RemoveItemController().handle);
router.post(
  "/finalize",
  isAuthenticated,
  new FinalizeCartController().handle
);

export default router;