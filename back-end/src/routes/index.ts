import { Router } from "express";
import { productRoutes } from "./productRoutes";
import { orderRoutes } from "./orderRoutes";
import { authRoutes } from "./authRoutes";

export const routes = Router();

routes.use("/products", productRoutes);
routes.use("/orders", orderRoutes);
routes.use('/auth', authRoutes)
