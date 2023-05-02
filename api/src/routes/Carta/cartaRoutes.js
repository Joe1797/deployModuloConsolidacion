import {
  allCartas,
  crearCarta,
} from "../../controllers/Carta/cartaControlles.js";
import { Router } from "express";

const router = Router();

router.post("/crearCarta", crearCarta);
router.get("/allCartas", allCartas);

export default router;
