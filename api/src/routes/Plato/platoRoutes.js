import {
  crearPlato,
  editarPlato,
  eliminarPlato,
  allPlatos,
  actualizarStockPlato,
} from "../../controllers/Plato/platoControlles.js";
import { Router } from "express";

const router = Router();

router.post("/crearPlato", crearPlato);
router.patch("/editarPlato/:id", editarPlato);
router.patch("/actualizarStockPlato/:id", actualizarStockPlato);
router.patch("/eliminarPlato/:id", eliminarPlato);
router.get("/allPlatos", allPlatos);

export default router;
