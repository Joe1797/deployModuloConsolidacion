import {
  crearCliente,
  logearseCliente,
} from "../../controllers/Cliente/clienteControlles.js";
import { Router } from "express";

const router = Router();

router.post("/crearCliente", crearCliente);
router.post("/logearseCliente", logearseCliente);

export default router;
