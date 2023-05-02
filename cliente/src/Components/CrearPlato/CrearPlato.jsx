import React, { useState } from "react";
import "./CrearPlato.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CrearPlato = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    nombre: "",
    precio: 0,
    stock: 0,
    image: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(inputs);

  const crearPlato = async (e) => {
    e.preventDefault();
    try {
      const req = await axios.post("http://localhost:3001/crearPlato", inputs);
      // console.log(req);
      setMensaje(req.data.message);

      setTimeout(() => {
        navigate("/panel/admin");
      }, 1500);
    } catch (error) {
      setMensaje("Campos Invalidos");
      // console.log(error);
    }
  };

  return (
    <div className="containerCrear">
      <form className="formContainerCrear" onSubmit={crearPlato}>
        {mensaje === "Campos Invalidos" ? (
          <p style={{ color: "red", fontSize: "18px" }}>
            {mensaje !== "" ? mensaje : null}
          </p>
        ) : (
          <p style={{ color: "green", fontSize: "18px" }}>
            {mensaje !== "" ? mensaje : null}
          </p>
        )}
        <div className="containerInputsCrear">
          <label htmlFor="">Nombre del Plato</label>
          <input
            type="text"
            placeholder="Ingrese plato"
            name="nombre"
            onChange={handleChange}
          ></input>
        </div>
        <div className="containerInputsCrear">
          <label htmlFor="">Precio</label>
          <input
            type="number"
            placeholder="Ingrese Precio"
            name="precio"
            onChange={handleChange}
          ></input>
        </div>
        <div className="containerInputsCrear">
          <label htmlFor="">Stock</label>
          <input
            type="number"
            placeholder="Ingrese Stock"
            name="stock"
            onChange={handleChange}
          ></input>
        </div>
        <div className="containerInputsCrear">
          <label htmlFor="">Image URL</label>
          <input
            type="text"
            placeholder="Ingrese URL de imagen"
            name="image"
            onChange={handleChange}
          ></input>
        </div>
        <input type="submit" value="Crear Plato"></input>
        <button onClick={() => navigate("/panel/admin")}>Panel</button>
      </form>
    </div>
  );
};
