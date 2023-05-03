import Sequelize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST, DB_PORT } = process.env;

const sequelize = new Sequelize(
  // `postgres://ezqtlpug:L_bNaTsOWLaWFGPT3BaShfLoGzy3HT90@lallah.db.elephantsql.com/ezqtlpug`,
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
  }
);

export default sequelize;
