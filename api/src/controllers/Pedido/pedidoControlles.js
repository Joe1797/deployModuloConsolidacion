import { Pedido } from "../../models/pedidoModel.js";
import { Cliente } from "../../models/clienteModel.js";

export const crearPedido = async (req, res) => {
  // logica
  console.log(req.body);
  const { fecha, pedido, cliente_pedido, medioPago, consumo, importeTotal } =
    req.body;
  console.log(
    "Crear: " + fecha,
    pedido,
    cliente_pedido,
    medioPago,
    consumo,
    importeTotal
  );

  try {
    let newPedido = await Pedido.create(req.body);
    if (newPedido)
      return res
        .status(200)
        .json({ message: "Pedido creado exitosamente", data: newPedido });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

export const eliminarPedido = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    let pedidoliminar = await Pedido.findOne({
      where: { id },
    });
    if (!pedidoliminar)
      return res.status(400).json({ mensaje: "Pedido no encontrado" });
    if (pedidoliminar) {
      await Pedido.update(
        {
          activo: false,
        },
        {
          where: { id: id },
        }
      );

      res.json({
        message: "Pedido eliminado exitosamente",
        data: pedidoliminar,
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

export const allPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll({
      attributes: [
        "id",
        "fecha",
        "pedido",
        "activo",
        "medioPago",
        "consumo",
        "importeTotal",
        "entregado",
      ],
      order: [["id", "ASC"]],
      include: [
        {
          model: Cliente,
          attributes: ["id", "nombreCompleto", "telefono", "dni"],
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
      data: pedidos,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

export const pedidoEntregado = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    let pedidoentregado = await Pedido.findOne({
      where: { id },
    });
    if (!pedidoentregado)
      return res.status(400).json({ mensaje: "Pedido no encontrado" });
    if (pedidoentregado) {
      await Pedido.update(
        {
          entregado: true,
        },
        {
          where: { id: id },
        }
      );

      res.json({
        message: "Pedido entregado exitosamente",
        data: pedidoentregado,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
