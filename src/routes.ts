import { Router } from "express";
import multer from "multer";

import prismaClient from "./prisma";

import uploadConfig from "./config/multer";

import { isAuthenticated } from "./middlewares/isAuthenticated";

/* ======================
   👤 USER CONTROLLERS
====================== */
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailuserController } from "./controllers/user/DetailUserController";
import { ListUserController } from "./controllers/user/ListUserController";
import { DeleteUserController } from "./controllers/user/DeleteUserController";
import { UpdateUserController } from "./controllers/user/UpdateUserController";

import { CreateFavoriteController } from "./controllers/favorite/CreateFavoriteController";
import { ListFavoritesController } from "./controllers/favorite/ListFavoritesController";
import { DeleteFavoriteController } from "./controllers/favorite/DeleteFavoriteController";
import { UploadController } from "./controllers/upload/UploadController";

/* ======================
   📦 PRODUCT CONTROLLERS
====================== */
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListCommentsController } from "./controllers/comment/ListCommentsController";

/* ======================
   🛣️ ROUTES
====================== */
import animalRoutes from "./routes/animal.routes";
import cartRoutes from "./routes/cart.routes";
import eraRoutes from "./routes/era.routes";
import periodoRoutes from "./routes/periodo.routes";
import walletRoutes from "./routes/wallet.routes";
import rewardRoutes from "./routes/reward.routes";
import quizRoutes from "./routes/quiz.routes";
import productRoutes from "./routes/product.routes";
import expeditionRoutes from "./routes/expedition.routes";

const router = Router();

const upload = multer(
  uploadConfig.upload("./tmp")
);

/* =========================================================
   👤 USERS
========================================================= */

router.post(
  "/users",
  new CreateUserController().handle
);

router.post(
  "/session",
  new AuthUserController().handle
);

router.get(
  "/me",
  isAuthenticated,
  new DetailuserController().handle
);

router.get(
  "/users",
  new ListUserController().handle
);

router.put(
  "/users/:id",
  isAuthenticated,
  new UpdateUserController().handle
);

router.delete(
  "/users/:id",
  isAuthenticated,
  new DeleteUserController().handle
);

/* =========================================================
   🌍 ERAS
========================================================= */

router.use(
  "/eras",
  eraRoutes
);

/* =========================================================
   🦖 ANIMALS
========================================================= */

router.use(
  "/animals",
  animalRoutes
);

/* =========================================================
   📚 PERIODOS
========================================================= */

router.use(
  "/periodos",
  periodoRoutes
);

/* =========================================================
   💰 WALLET
========================================================= */

router.use(
  "/wallet",
  walletRoutes
);

/* =========================================================
   🪙 REWARDS
========================================================= */

router.use(
  "/reward",
  rewardRoutes
);

/* =========================================================
   🧠 QUIZ
========================================================= */

router.use(
  "/quiz",
  quizRoutes
);

/* =========================================================
   🛒 CART
========================================================= */

router.use(
  "/cart",
  cartRoutes
);

router.get(
  "/products/:id/comments",
  new ListCommentsController().handle
);


/* =========================================================
   📊 ADMIN STATS
========================================================= */

router.get(
  "/admin/stats",
  async (req, res) => {

    const users =
      await prismaClient.user.count();

    const eras =
      await prismaClient.era.count();

    const animals =
      await prismaClient.animal.count();

    return res.json({
      users,
      eras,
      animals
    });

  }
);

/* =========================================================
   ❤️ FAVORITES
========================================================= */

router.post(
  "/favorites",
  isAuthenticated,
  new CreateFavoriteController().handle
);

router.get(
  "/favorites",
  isAuthenticated,
  new ListFavoritesController().handle
);

router.delete(
  "/favorites",
  isAuthenticated,
  new DeleteFavoriteController().handle
);

router.post(
  "/upload",
  upload.single("file"),
  new UploadController().handle
);

router.use(
  "/products",
  productRoutes
);

router.use("/expeditions", expeditionRoutes);

export { router };