import {
  allPedidos,
  crearPedido,
  eliminarPedido,
  pedidoEntregado,
} from "../../controllers/Pedido/pedidoControlles.js";
import { Router } from "express";

const router = Router();

router.post("/crearPedido", crearPedido);
router.patch("/eliminarPedido/:id", eliminarPedido);
router.patch("/pedidoEntregado/:id", pedidoEntregado);
router.get("/allPedidos", allPedidos);

export default router;
