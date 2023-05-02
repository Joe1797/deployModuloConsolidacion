import app from "./src/app.js";
import sequelize from "./src/database/db.js";
const port = 3001;

async function start() {
  try {
    await sequelize.sync({ alter: true });
    app.listen(port, () => {
      console.log("Servidor corriendo en puerto " + port);
    });
  } catch (error) {
    console.error(error);
  }
}

start();
