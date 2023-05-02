import {
  crearCocinero,
  logearseCocinero,
} from "../../controllers/Cocinero/cocineroControlles.js";
import { Router } from "express";

const router = Router();

router.post("/crearCocinero", crearCocinero);
router.post("/logearseCocinero", logearseCocinero);

export default router;
