import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import morgan from "morgan";
// Importando Rutas
import empresaRoutes from "./routes/Empresa/empresaRoutes.js";
import administradorRoutes from "./routes/Administrador/administradorRoutes.js";
import cocineroRoutes from "./routes/Cocinero/cocineroRoutes.js";
import platosRoutes from "./routes/Plato/platoRoutes.js";
import cartaRoutes from "./routes/Carta/cartaRoutes.js";
import pedidoRoutes from "./routes/Pedido/pedidoRoutes.js";
import clienteRoutes from "./routes/Cliente/clienteRoutes.js";
// importando Modelos
import { Pedido } from "./models/pedidoModel.js";
import { Cliente } from "./models/clienteModel.js";
import { Carta } from "./models/cartaModel.js";
import { Plato } from "./models/platoModel.js";

const app = express();
app.use(express.urlencoded({ extended: false }));

// MIDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://deploy-modulo-consolidacion.vercel.app"
  ); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, DELETE, PATCH"
  );
  next();
});

// RELACIONES DE TABLAS
Cliente.hasMany(Pedido, { foreignKey: "cliente_pedido" });
Pedido.belongsTo(Cliente, { foreignKey: "cliente_pedido" });

Carta.belongsToMany(Plato, { through: "CartaPlatos" });
Plato.belongsToMany(Carta, { through: "CartaPlatos" });

//ROUTES
app.use(empresaRoutes);
app.use(administradorRoutes);
app.use(cocineroRoutes);
app.use(platosRoutes);
app.use(cartaRoutes);
app.use(pedidoRoutes);
app.use(clienteRoutes);

export default app;
