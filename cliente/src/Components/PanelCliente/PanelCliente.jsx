import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logoDvero from "../../images/logoDvero.png";
import Swal from "sweetalert2";
import "./PanelCliente.css";
import { CardCliente } from "./CardCliente";
import qrPlin from "../../images/qrplin.jpg";
import qrYape from "../../images/yapeQR2.jpg";

export const PanelCliente = ({ auxiliarAct, setAuxiliarAct }) => {
  const [carta, setCarta] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [fecha, setFecha] = useState();
  const [fechaData, setFechaData] = useState();
  const [cartaExiste, setCartaExiste] = useState(false);
  const [consumo, setConsumo] = useState();
  const [pago, setPago] = useState("");
  const navigate = useNavigate();
  const [clienteData, setClienteData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios("http://localhost:3001/allCartas");
        // console.log("AXIOS", data.data.data);
        setCarta(data.data.data[0]);
        if (data.data.data.length > 0) {
          setFecha(new Date());
          setFechaData(new Date(carta.fecha));
          if (fecha?.toLocaleDateString() === fechaData?.toLocaleDateString()) {
            setCartaExiste(true);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();

    setClienteData(JSON.parse(localStorage.getItem("dataCliente")));
    // setFecha(new Date());
    // setFechaData(new Date(carta.fecha));
    // if (fecha?.toLocaleDateString() === fechaData?.toLocaleDateString()) {
    //   setCartaExiste(true);
    // }
  }, []);

  console.log("ESTADO CLIENTE", clienteData);

  const enviarPedido = async () => {
    try {
      let idPedidos = pedidos.map((e) => {
        return { id: e.id, cantidad: e.cantidad };
      });
      console.log("ids", idPedidos);
      let importeTotal = pedidos.reduce(
        (ac, e) => ac + e.precio * e.cantidad,
        0
      );
      const res = await axios.post("http://localhost:3001/crearPedido", {
        fecha: fecha,
        pedido: pedidos,
        cliente_pedido: clienteData.id,
        medioPago: pago,
        consumo: consumo,
        importeTotal: importeTotal,
      });
      console.log(res.data);

      idPedidos.forEach((e) => {
        const actualiar = async () => {
          await axios.patch(
            `http://localhost:3001/actualizarStockPlato/${e.id}`,
            { cantidad: e.cantidad },
            {}
          );
        };
        actualiar();
      });

      setAuxiliarAct(auxiliarAct + 1);

      Swal.fire("Pedido Enviado con Éxito").then(async () => {
        navigate("/comprobantePago", {
          state: {
            fecha: fecha,
            pedido: pedidos,
            cliente_pedido: clienteData.id,
            medioPago: pago,
            consumo: consumo,
            importeTotal: importeTotal,
          },
        });
      });
    } catch (error) {
      alert("No se publico la carta");
    }
  };

  // console.log("Fecha", fecha.toLocaleDateString());
  // console.log("FechaDATA", fechaData.toLocaleDateString());
  // console.log(fecha.toLocaleDateString() == fechaData.toLocaleDateString());
  // console.log("Carta", carta);
  // console.log("Pedidos", pedidos);

  const handleConsumo = (e) => {
    console.log(e.target.value);
    if (e.target.name === "consumo") setConsumo(e.target.value);
    if (e.target.name === "pago") setPago(e.target.value);
  };

  console.log(consumo, pago);

  if (!cartaExiste) {
    return <div>No hay carta para esta fecha</div>;
  }

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
          <h3>Carta del Dia {carta?.fecha?.substring(0, 10)}</h3>
          <div className="containerPlatosAdm">
            {carta?.Platos?.map((e) => {
              return (
                <CardCliente
                  key={e.id}
                  id={e.id}
                  nombre={e.nombre}
                  precio={e.precio}
                  stock={e.stock}
                  image={e.image}
                  setPedidos={setPedidos}
                  pedidos={pedidos}
                ></CardCliente>
              );
            })}
            {/* {carta?.platos?.map((e) => {
              let eJson = JSON.parse(e);
              return (
                <CardCliente
                  key={eJson.id}
                  id={eJson.id}
                  nombre={eJson.nombre}
                  precio={eJson.precio}
                  stock={eJson.stock}
                  image={eJson.image}
                  setPedidos={setPedidos}
                  pedidos={pedidos}
                ></CardCliente>
              );
            })} */}
          </div>
        </section>
        <aside>
          <h3>Platos Seleccionados</h3>
          <hr />
          <p>
            {pedidos?.length === 0 && "Seleccione los platos que va a consumir"}
          </p>
          <ul>
            {pedidos?.map((e, i) => {
              return (
                <li
                  key={e.id}
                  style={{ listStyle: "outside", textAlign: "start" }}
                >
                  {e.nombre} --- S/. {e.precio} ---
                  <strong style={{ fontSize: "17px" }}>
                    {" "}
                    {e.cantidad} Und
                  </strong>
                </li>
              );
            })}
          </ul>
          <hr />
          <strong>Seleccione el tipo de consumo:</strong>
          <hr />
          <div>
            <label>
              <input
                type="radio"
                name="consumo"
                value="Recojo en local"
                onChange={handleConsumo}
                // checked
              ></input>
              Recojo en local
            </label>
            <br></br>
            <label>
              <input
                type="radio"
                name="consumo"
                value="Consumo en local"
                onChange={handleConsumo}
              ></input>
              Consumo en local
            </label>
          </div>
          <hr />
          <div>
            <strong>Seleccione el medio de Pago:</strong>
            <br />
            Total a pagar : S/.
            <strong>
              {pedidos.reduce((ac, e) => ac + e.precio * e.cantidad, 0)}
            </strong>
            <hr />
            <div>
              <label>
                <input
                  type="radio"
                  name="pago"
                  value="Yape"
                  onChange={handleConsumo}
                  // checked
                ></input>
                Yape
              </label>
              <label>
                <input
                  type="radio"
                  name="pago"
                  value="Plin"
                  onChange={handleConsumo}
                ></input>
                Plin
              </label>
              <label>
                <input
                  type="radio"
                  name="pago"
                  value="Efectivo"
                  onChange={handleConsumo}
                ></input>
                Efectivo
              </label>
            </div>
            {pago === "Yape" ? (
              <img src={qrYape} alt="" width={"180px"} />
            ) : pago === "Plin" ? (
              <img src={qrPlin} alt="" width={"180px"} />
            ) : null}
          </div>
          <hr />
          <button className="btnPublicar" onClick={enviarPedido}>
            Realizar Pedido
          </button>
        </aside>
      </div>
    </>
  );
};
