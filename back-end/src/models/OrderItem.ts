import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

interface IOrderItemAttributes {
  id?: number;
  orderId: number;
  productId: number;
  quantity: number;
  price: number;
}

export class OrderItem
  extends Model<IOrderItemAttributes>
  implements IOrderItemAttributes
{
  declare id: number;
  declare orderId: number;
  declare productId: number;
  declare quantity: number;
  declare price: number;
}

OrderItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "order_items",
  },
);
