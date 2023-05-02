import React, { useState } from "react";
import "./CardMenu.css";
import { Editar } from "../EditarPlato/EditarPlato";
import axios from "axios";

export const CardMenu = ({
  id,
  nombre,
  precio,
  stock,
  image,
  setSeleccionados,
  seleccionados,
}) => {
  const [editar, setEditar] = useState(0);

  const eliminarPlato = async () => {
    await axios.patch(`http://localhost:3001/eliminarPlato/${id}`);
    window.location.reload();
  };

  const onChange = (e) => {
    if (e.target.checked === true) {
      let inputs = {
        id,
        nombre,
        precio,
        stock,
        image,
      };
      setSeleccionados([...seleccionados, inputs]);
    } else {
      let act = seleccionados.filter((e) => e.id !== id);
      // console.log("ACT", act);
      setSeleccionados(act);
    }
  };

  return (
    <div className="cardsContainerMenu">
      <div className="containerCard">
        <div>
          <input
            type="checkbox"
            name="check"
            value={id}
            // onChange={(e) => console.log(e.target.checked, e.target.value)}
            onChange={onChange}
          ></input>
          <span>{nombre}</span>
        </div>
        <img src={image} alt={nombre}></img>
        <span>Precio : S/.{precio}</span>
        <span>Cantidad : {stock}</span>
        <div>
          <button
            className="btnCard Editar"
            onClick={() => {
              setEditar(id);
            }}
          >
            Editar
          </button>
          <button className="btnCard Eliminar" onClick={eliminarPlato}>
            Eliminar
          </button>
        </div>
        {editar === id && (
          <div>
            <div
              style={{
                height: "15px",
                paddingBottom: "5px",
                backgroundColor: "rgb(254, 232, 185)",
              }}
            >
              <img
                style={{ height: "100%", width: "20%", cursor: "pointer" }}
                src="https://cdn-icons-png.flaticon.com/512/1014/1014675.png?w=360"
                onClick={() => {
                  setEditar(0);
                }}
                alt={nombre}
              ></img>
            </div>
            <Editar
              id={id}
              nombre={nombre}
              precio={precio}
              stock={stock}
              image={image}
            />
          </div>
        )}
      </div>
    </div>
  );
};
