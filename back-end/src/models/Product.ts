import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

interface IProductAttributes {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

export class Product
  extends Model<IProductAttributes>
  implements IProductAttributes
{
  declare id: number;
  declare name: string;
  declare description: string;
  declare price: number;
  declare image: string;
  declare category: string;
  declare stock: number;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    stock: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },

  {
    sequelize,
    tableName: "products",
  }
);
