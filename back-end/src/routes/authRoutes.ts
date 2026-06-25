import { Router } from "express";
import { register, login } from "../controllers/AuthController";
import { routes } from ".";

export const authRoutes = Router()

authRoutes.post('/register', register)
authRoutes.post('/login', login)