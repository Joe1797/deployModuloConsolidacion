import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://ezqtlpug:L_bNaTsOWLaWFGPT3BaShfLoGzy3HT90@lallah.db.elephantsql.com/ezqtlpug",
  {
    logging: false,
  }
);

export default sequelize;
