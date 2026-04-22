import { Router } from 'express';
import multer from 'multer';
import prismaClient from './prisma';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailuserController } from './controllers/user/DetailUserController';
import { ListUserController } from './controllers/user/ListUserController';
import { DeleteUserController } from './controllers/user/DeleteUserController';
import { UpdateUserController } from './controllers/user/UpdateUserController';
import { CreateProductController } from "./controllers/product/CreateProductController";

import { isAuthenticated } from './middlewares/isAuthenticated';

import animalRoutes from './routes/animal.routes';
import cartRoutes from './routes/cart.routes';
import eraRoutes from './routes/era.routes';
import periodoRoutes from "./routes/periodo.routes";


import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

/* ======================
   👤 USERS
====================== */
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);
router.get('/me', isAuthenticated, new DetailuserController().handle);
router.get('/users', new ListUserController().handle);
router.put('/users/:id', isAuthenticated, new UpdateUserController().handle);
router.delete('/users/:id', isAuthenticated, new DeleteUserController().handle);

/* ======================
   🌍 ERAS
====================== */
router.use('/eras', eraRoutes);

/* ======================
   🦖 ANIMALS
====================== */
router.use('/animals', animalRoutes);

//Periodo

router.use("/periodos", periodoRoutes);

/* ======================
   🛒 CART
====================== */
router.use('/cart', cartRoutes);

/* ======================
   📦 PRODUCTS
====================== */
router.post("/products", new CreateProductController().handle);

/* ======================
   📊 ADMIN STATS (NOVO)
====================== */
router.get("/admin/stats", async (req, res) => {
  const users = await prismaClient.user.count();
  const eras = await prismaClient.era.count();
  const animals = await prismaClient.animal.count();

  return res.json({
    users,
    eras,
    animals
  });
});

export { router };