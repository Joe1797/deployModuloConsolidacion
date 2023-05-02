import { Empresa } from "../../models/empresaModel.js";

export const crearEmpresa = async (req, res) => {
  // logica
  console.log(req.body);
  const { usuario, contraseña, nombreEmpresa, correo, telefono } = req.body;
  console.log("Crear: " + usuario, contraseña, nombreEmpresa, correo, telefono);

  try {
    let newEmpresa = await Empresa.create(req.body);
    if (newEmpresa)
      return res
        .status(200)
        .json({ message: "Empresa creada exitosamente", data: newEmpresa });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const logearseEmpresa = async (req, res) => {
  const { usuario, contraseña } = req.body;
  console.log(req.body);

  const userFind = await Empresa.findOne({ where: { usuario: usuario } });
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
