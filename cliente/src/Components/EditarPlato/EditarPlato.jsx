import React, { useState } from "react";
import "./EditarPlato.css";
import axios from "axios";

export const Editar = ({ id, nombre, precio, stock, image }) => {
  const [info, setInfo] = useState({
    id,
    nombre,
    precio,
    stock,
    image,
  });

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const actualizarPlato = async () => {
    const req = await axios.patch(`/editarPlato/${id}`, info);
    // console.log(req);
  };
  console.log(info);
  return (
    <div className="editForm">
      <form className="edit_form" onSubmit={actualizarPlato}>
        <div className="containerEditarInputs">
          <label>Nombre:</label>
          <input
            type="text"
            className="titulo_editado"
            name="nombre"
            defaultValue={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="containerEditarInputs">
          <label>Image:</label>
          <input
            type="text"
            className="titulo_editado"
            name="image"
            defaultValue={image}
            onChange={handleChange}
          />
        </div>
        <div className="containerEditarInputs">
          <label>Precio:</label>
          <input
            type="number"
            className="titulo_editado"
            name="precio"
            defaultValue={precio}
            onChange={handleChange}
          />
        </div>
        <div className="containerEditarInputs">
          <label>Cantidad:</label>
          <input
            type="number"
            className="titulo_editado"
            name="stock"
            defaultValue={stock}
            onChange={handleChange}
          />
        </div>
        <hr />
        <input type="submit" className="editar" value="Actualizar" />
      </form>
    </div>
  );
};
