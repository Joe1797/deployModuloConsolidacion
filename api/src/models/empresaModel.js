import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

export const Empresa = sequelize.define("Empresas", {
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
  nombreEmpresa: {
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
});
