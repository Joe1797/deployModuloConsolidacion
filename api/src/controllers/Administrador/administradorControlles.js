import { Administrador } from "../../models/administradorModel.js";

export const crearAdministrador = async (req, res) => {
  // logica
  console.log(req.body);
  const { usuario, contraseña, nombreCompleto, correo, telefono } = req.body;
  console.log(
    "Crear: " + usuario,
    contraseña,
    nombreCompleto,
    correo,
    telefono
  );

  try {
    let newAdministrador = await Administrador.create(req.body);
    if (newAdministrador)
      return res.status(200).json({
        message: "Administrador creado exitosamente",
        data: newAdministrador,
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const logearseAdministrador = async (req, res) => {
  const { usuario, contraseña } = req.body;
  console.log(req.body);

  const userFind = await Administrador.findOne({ where: { usuario: usuario } });
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
