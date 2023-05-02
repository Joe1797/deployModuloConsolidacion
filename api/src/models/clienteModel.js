import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

export const Cliente = sequelize.define("Clientes", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contraseña: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nombreCompleto: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  telefono: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  dni: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  verificado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
