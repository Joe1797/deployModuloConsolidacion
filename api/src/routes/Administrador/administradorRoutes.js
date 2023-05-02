import {
  logearseAdministrador,
  crearAdministrador,
} from "../../controllers/Administrador/administradorControlles.js";
import { Router } from "express";

const router = Router();

router.post("/crearAdministrador", crearAdministrador);
router.post("/logearseAdministrador", logearseAdministrador);

export default router;
