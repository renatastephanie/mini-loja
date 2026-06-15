import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User";

const JWT_SECRET = process.env.JWT_SECRET || "segredo_temporario";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return res.status(400).json({ message: "Email já cadastrado!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPassword });

    return res
      .status(201)
      .json({ message: "Usuário criado com sucesso!", user });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao criar usuário", error });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "Email ou senha inválidos!" });
    }

    const passwordMath = await bcrypt.compare(password, user.password);
    if (!passwordMath) {
      return res.status(401).json({ message: "Email ou senha inválidos!" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    return res
      .status(200)
      .json({
        token,
        user: { id: user.id, name: user.name, email: user.email },
      });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao fazer login", error });
  }
};
