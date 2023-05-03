import React, { useEffect, useState } from "react";
import "./AdministradorPanel.css";
import { CardMenu } from "../CardMenu/CardMenu";
import axios from "axios";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logoDvero from "../../images/logoDvero.png";
import Swal from "sweetalert2";

export const AdministradorPanel = () => {
  const [carta, setCarta] = useState([]);
  const [seleccionados, setSeleccionados] = useState([]);
  const [fecha, setFecha] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const data = await axios("/allPlatos");
      // console.log("AXIOS", data);
      setCarta(data.data.data);
    };
    getData();
    setFecha(new Date());
  }, []);

  const publicarEvent = async () => {
    try {
      const res = await axios.post("/crearCarta", {
        fecha: fecha,
        platos: seleccionados,
      });
      // console.log(res.data);
      Swal.fire("Carta Creada con Éxito").then(() => {
        window.location.reload();
      });
    } catch (error) {
      alert("No se publico la carta");
    }
  };

  // console.log("Fecha", fecha);
  // console.log("Carta", carta);
  // console.log("Seleccionados", seleccionados);
  return (
    <>
      <div className="ContainerLOGOTODO">
        <div className="logoEmpresaModulo">
          <img src={logoDvero} alt="Logo Empresa" />
        </div>
        <h2>DVERO PRODUCCIONES EIRL</h2>
      </div>
      <div className="containerPanelAdministrador">
        <section>
          <h3>Listado de platos</h3>
          {/* <Link to="/crearPlato"> */}
          <button
            className="btnAgregar"
            onClick={() => navigate("/crearPlato")}
          >
            Agregar Plato
          </button>
          {/* </Link> */}
          <div className="containerPlatosAdm">
            {carta?.map((e, i) => {
              if (e.activo === true) {
                return (
                  <CardMenu
                    key={e.id}
                    id={e.id}
                    nombre={e.nombre}
                    precio={e.precio}
                    stock={e.stock}
                    image={e.image}
                    setSeleccionados={setSeleccionados}
                    seleccionados={seleccionados}
                  />
                );
              }
              return null;
            })}
          </div>
        </section>
        <aside>
          <h3>Platos Seleccionados</h3>
          <ul>
            {seleccionados?.map((e, i) => {
              return (
                <li key={e.id}>
                  {e.nombre} - S/. {e.precio}
                </li>
              );
            })}
          </ul>
          <button className="btnPublicar" onClick={publicarEvent}>
            Publicar
          </button>
          <button
            className="btnReportes"
            onClick={() => {
              navigate("/panel/admin/reportes");
            }}
          >
            Reportes
          </button>
        </aside>
      </div>
    </>
  );
};
