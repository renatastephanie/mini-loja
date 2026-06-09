import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

interface IOrderAttributes {
  id?: number;
  customerName: string;
  customerEmail: string;
  total: number;
  status: "peding" | "completed" | "cancelled";
}

export class Order extends Model<IOrderAttributes> implements IOrderAttributes {
  declare id: number;
  declare customerName: string;
  declare customerEmail: string;
  declare total: number;
  declare status: "pending" | "completed" | "cancelled";
}

Order.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    customerName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    customerEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM("pending", "completed", "cancelled"),
      defaultValue: "pending",
    },
  },

  {
    sequelize,
    tableName: "orders",
  },
);
