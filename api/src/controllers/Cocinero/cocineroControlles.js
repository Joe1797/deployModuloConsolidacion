import { Cocinero } from "../../models/cocineroModel.js";

export const crearCocinero = async (req, res) => {
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
    let newCocinero = await Cocinero.create(req.body);
    if (newCocinero)
      return res
        .status(200)
        .json({ message: "Empresa creada exitosamente", data: newCocinero });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const logearseCocinero = async (req, res) => {
  const { usuario, contraseña } = req.body;
  console.log(req.body);

  const userFind = await Cocinero.findOne({ where: { usuario: usuario } });
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
