import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

export const Plato = sequelize.define("Platos", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue:
      "https://img.freepik.com/vector-premium/plato-desayuno-saludable-aislado_1639-24458.jpg?w=2000",
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});
