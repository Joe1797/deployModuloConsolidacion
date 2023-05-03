import app from "./src/app.js";
import sequelize from "./src/database/db.js";
// const port = 3001
import dotenv from "dotenv";
dotenv.config();
const { PORT } = process.env;

async function start() {
  try {
    await sequelize.sync({ alter: true });
    app.listen(PORT, () => {
      console.log("Servidor corriendo en puerto " + PORT);
    });
  } catch (error) {
    console.error(error);
  }
}

start();
