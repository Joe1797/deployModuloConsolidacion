import { Plato } from "../../models/platoModel.js";

export const crearPlato = async (req, res) => {
  // logica
  console.log(req.body);
  const { nombre, precio, stock, image } = req.body;
  console.log("Crear: " + nombre, precio, stock, image);
  let inputs = {};
  if (image === "") {
    inputs = {
      nombre,
      precio,
      stock,
    };
  } else {
    inputs = {
      nombre,
      precio,
      stock,
      image,
    };
  }

  try {
    let newPlato = await Plato.create(inputs);
    if (newPlato)
      return res
        .status(200)
        .json({ message: "Plato creado exitosamente", data: newPlato });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

export const editarPlato = async (req, res) => {
  // logica
  const { id } = req.params;
  const { nombre, precio, stock, image } = req.body;
  console.log("Editar: " + nombre, precio, stock, image);

  try {
    let platoUpdate = await Plato.findOne({ where: { id: id } });
    if (!platoUpdate)
      return res.status(400).json({ mensaje: "Plato no encontrado" });
    if (platoUpdate) {
      await Plato.update(
        {
          nombre,
          precio,
          stock,
          image,
        },
        {
          where: { id: id },
        }
      );
    }
    let platoUpdate2 = await Plato.findOne({ where: { id: id } });
    return res
      .status(200)
      .json({ message: "Plato actualizado exitosamente", data: platoUpdate2 });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

export const actualizarStockPlato = async (req, res) => {
  // logica
  const { id } = req.params;
  const { cantidad } = req.body;
  console.log("Editar: " + cantidad);

  try {
    let platoUpdate = await Plato.findOne({ where: { id: id } });
    if (!platoUpdate)
      return res.status(400).json({ mensaje: "Plato no encontrado" });
    if (platoUpdate) {
      let newStock = platoUpdate.stock - cantidad;
      await Plato.update(
        {
          stock: newStock,
        },
        {
          where: { id: id },
        }
      );
    }
    let platoUpdate2 = await Plato.findOne({ where: { id: id } });
    return res
      .status(200)
      .json({ message: "Plato actualizado exitosamente", data: platoUpdate2 });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

export const eliminarPlato = async (req, res) => {
  const { id } = req.params;
  try {
    let platoEliminar = await Plato.findOne({
      where: { id },
    });
    if (!platoEliminar)
      return res.status(400).json({ mensaje: "Plato no encontrado" });
    if (platoEliminar) {
      await Plato.update(
        {
          activo: false,
        },
        {
          where: { id: id },
        }
      );

      res.json({
        message: "Plato eliminado exitosamente",
        data: platoEliminar,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

// export const eliminarPlato = async (req, res) => {
//   const { id } = req.params;
//   try {
//     let platoEliminar = await Plato.findOne({
//       where: { id },
//     });
//     if (!platoEliminar)
//       return res.status(400).json({ mensaje: "Plato no encontrado" });
//     if (platoEliminar) {
//       await Plato.destroy({
//         where: { id },
//       });
//       res.json({
//         message: "Plato eliminado exitosamente",
//         data: platoEliminar,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ message: error.message });
//   }
// };

export const allPlatos = async (req, res) => {
  try {
    const platos = await Plato.findAll({
      attributes: ["id", "nombre", "precio", "stock", "image", "activo"],
      order: [["id", "ASC"]],
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
      data: platos,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
