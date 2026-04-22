import { Router } from "express";
import { AddToCartController } from "../controllers/cart/AddToCartController";
import { ListCartController } from "../controllers/cart/ListCartController";
import { RemoveItemController } from "../controllers/cart/RemoveItemController";

import { isAuthenticated } from "../middlewares/isAuthenticated";

const router = Router();

router.post("/add", isAuthenticated, new AddToCartController().handle);
router.get("/", isAuthenticated, new ListCartController().handle);
router.delete("/remove", isAuthenticated, new RemoveItemController().handle);

export default router;