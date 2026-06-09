import { Request, Response } from "express";
import { Order } from "../models/Order";
import { OrderItem } from "../models/OrderItem";
import { Product } from "../models/Product";
import { sequelize } from "../config/database";

export const OrderController = {
  async index(req: Request, res: Response): Promise<void> {
    try {
      const orders = await Order.findAll({
        include: [{ model: OrderItem, include: [Product] }],
        order: [["createdAt", "DESC"]],
      });

      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: "Erro ao buscar pedidos" });
    }
  },

  async store(req: Request, res: Response): Promise<void> {
    const transaction = await sequelize.transaction();
    try {
      const { customerName, customerEmail, items } = req.body;

      const total = items.reduce(
        (sum: number, item: { price: number; quantity: number }) =>
          sum + item.price * item.quantity,
        0,
      );

      const order = await Order.create(
        { customerName, customerEmail, total, status: "pending" },
        { transaction },
      );

      await Promise.all(
        items.map(
          (item: { productId: number; quantity: number; price: number }) =>
            OrderItem.create(
              {
                orderId: order.id,
                productId: item.productId,
                quantity: item.quantity,
                price: item.price,
              },
              { transaction },
            ),
        ),
      );

      await transaction.commit();
      res.status(201).json(order);
    } catch (error) {
      await transaction.rollback();
      res.status(500).json({ error: "Erro ao criar pedido" });
    }
  },

  async show(req: Request, res: Response): Promise<void>{
    try {
      const order = await Order.findByPk(req.params['id'], {
        include: [{model: OrderItem, include: [Product]}],
      })

      if (!order) {
        res.status(404).json({ error: 'Pedido não encontrado' })
        return
      }

      res.json(order)
    } catch(error) {
      res.status(500).json({ error: 'Erro ao buscar pedido' })
    }
  }
};
