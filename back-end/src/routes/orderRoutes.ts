import { Router } from "express";
import { OrderController } from "../controllers/OrderController";

export const orderRoutes = Router();

orderRoutes.get("/", OrderController.index);
orderRoutes.get("/:id", OrderController.show);
orderRoutes.post("/", OrderController.store);
