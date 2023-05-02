import {
  crearEmpresa,
  logearseEmpresa,
} from "../../controllers/Empresa/empresaControlles.js";
import { Router } from "express";

const router = Router();

router.post("/crearEmpresa", crearEmpresa);
router.post("/logearseEmpresa", logearseEmpresa);

export default router;
