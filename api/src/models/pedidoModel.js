import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

export const Pedido = sequelize.define("Pedidos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pedido: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  medioPago: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  consumo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  importeTotal: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  entregado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
