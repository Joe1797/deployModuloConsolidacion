import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

export const Carta = sequelize.define("Cartas", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  platos: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
  },
});
