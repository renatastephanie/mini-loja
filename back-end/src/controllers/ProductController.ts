import { Request, Response } from "express";
import { Op } from "sequelize";
import { Product } from "../models/Product";

export const ProductController = {
  async index(req: Request, res: Response): Promise<void> {
    try {
      const { search, category } = req.query;

      const where: Record<string, unknown> = {};

      if (search) {
        where["name"] = { [Op.iLike]: `%${search}%` };
      }

      if (category) {
        where["category"] = category;
      }

      const products = await Product.findAll({ where });
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar produtos" });
    }
  },

  async show(req: Request, res: Response): Promise<void> {
    try {
      const product = await Product.findByPk(req.params["id"]);
      if (!product) {
        res.status(404).json({ error: "Produto não encontrado" });
        return;
      }
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar produto" });
    }
  },

  async store(req: Request, res: Response): Promise<void> {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: "Erro ao criar produto" });
    }
  },

  async update(req: Request, res: Response): Promise<void> {
    try {
      const product = await Product.findByPk(req.params["id"]);
      if (!product) {
        res.status(404).json({ error: "Produto não encontrado" });
        return;
      }
      await product.update(req.body);
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: "Erro ao atualizar produto" });
    }
  },

  async destroy(req: Request, res: Response): Promise<void> {
    try {
      const product = await Product.findByPk(req.params["id"]);
      if (!product) {
        res.status(404).json({ error: "Produto não encontrado" });
        return;
      }
      await product.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Erro ao deletar produto" });
    }
  },
};
