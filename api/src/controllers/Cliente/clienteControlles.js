import { Cliente } from "../../models/clienteModel.js";

export const crearCliente = async (req, res) => {
  // logica
  console.log(req.body);
  const { usuario, contraseña, nombreCompleto, correo, telefono, dni } =
    req.body;
  console.log(
    "Crear: " + usuario,
    contraseña,
    nombreCompleto,
    correo,
    telefono,
    dni
  );

  try {
    let newCliente = await Cliente.create(req.body);
    if (newCliente)
      return res
        .status(200)
        .json({ message: "Cliente creado exitosamente", data: newCliente });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const logearseCliente = async (req, res) => {
  const { usuario, contraseña } = req.body;
  console.log(req.body);

  const userFind = await Cliente.findOne({ where: { usuario: usuario } });
  console.log(userFind);

  if (!userFind) {
    return res.status(401).json({ message: "Usuario Invalido" });
  }

  if (userFind.contraseña === contraseña) {
    return res
      .status(200)
      .json({ message: "Usuario Validado", data: userFind });
  } else {
    return res.status(401).json({ message: "Contraseña Invalida" });
  }
};
