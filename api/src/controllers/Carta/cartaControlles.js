import { Carta } from "../../models/cartaModel.js";
import { Plato } from "../../models/platoModel.js";

export const crearCarta = async (req, res) => {
  // logica
  console.log(req.body);
  const { fecha, platos } = req.body;
  console.log("Crear: " + fecha, platos);

  let idPlatos = platos.map((p) => p.id);
  console.log(idPlatos);

  try {
    let newCarta = await Carta.create(req.body);
    if (newCarta) await newCarta.addPlato(idPlatos);
    return res
      .status(200)
      .json({ message: "Carta creada exitosamente", data: newCarta });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

export const allCartas = async (req, res) => {
  try {
    const cartas = await Carta.findAll({
      attributes: ["id", "fecha", "platos"],
      order: [["id", "DESC"]],
      include: [
        {
          model: Plato,
        },
      ],
      //   include: [
      //     {
      //       model: Client,
      //       as: "Client",
      //       attributes: ["id", "fullName", "avatar", "email"],
      //     },
      //     {
      //       model: Tenant,
      //       as: "Tenant",
      //       attributes: ["id", "fullName", "avatar", "email"],
      //     },
      //     {
      //       model: Property,
      //       as: "Property",
      //       attributes: ["id"],
      //     },
      //   ],
    });
    res.status(200).json({
      data: cartas,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
