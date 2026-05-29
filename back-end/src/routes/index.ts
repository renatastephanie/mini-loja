import { Router } from "express";
import { productRoutes } from "./productRoutes";
import { orderRoutes } from "./orderRoutes";

export const routes = Router();

routes.use("/products", productRoutes);
routes.use("/orders", orderRoutes);
