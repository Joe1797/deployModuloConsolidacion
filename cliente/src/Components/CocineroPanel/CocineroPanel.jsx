import React, { useEffect, useState } from "react";
import "./CocineroPanel.css";
import { Pedidos } from "../Pedidos/Pedidos";
import axios from "axios";

export const CocineroPanel = ({ auxiliarAct }) => {
  const [pedidos, setPedidos] = useState([]);
  const [aux, setAux] = useState(0);
  const [estado, setEstado] = useState("porAtender");

  // useEffect(() => {}, [auxiliarAct]);

  useEffect(() => {
    const getPedidos = async () => {
      let req = await axios("/allPedidos");
      // console.log(req.data.data);
      setPedidos(req.data.data);
    };
    getPedidos();
  }, [aux, auxiliarAct]);
  console.log(pedidos);
  // console.log(estado);
  console.log("PCoci", auxiliarAct);
  return (
    <div className="containerPanelCocinero">
      <h3>Pedidos</h3>
      {/* <div className="switch-button">
        <input
          type="checkbox"
          name="switch-button"
          id="switch-label"
          className="switch-button__checkbox"
        />
        <label for="switch-label" className="switch-button__label"></label>
      </div> */}
      <div className="estadoPedidos">
        <div className={estado === "atendidos" ? "off" : "on"}>
          <label htmlFor="1">Por Atender</label>
          <input
            id="1"
            type="radio"
            name="estado"
            value="atendidos"
            defaultChecked
            onChange={(e) => {
              if (e.target.checked) {
                setEstado("porAtender");
              }
            }}
          />
        </div>
        <div className={estado === "atendidos" ? "on" : "off"}>
          <label htmlFor="2">Atendidos</label>
          <input
            id="2"
            type="radio"
            name="estado"
            onChange={(e) => {
              if (e.target.checked) {
                setEstado("atendidos");
              }
            }}
          />
        </div>
      </div>
      <div className="containerPedidosPanel">
        {pedidos
          ?.sort((a, b) => {
            return a.entregado === b.entregado ? 0 : a.entregado ? 1 : -1;
          })
          .map((e) => {
            if (estado === "porAtender") {
              if (e.activo) {
                return (
                  <Pedidos
                    key={e.id}
                    consumo={e.consumo}
                    fecha={e.fecha}
                    id={e.id}
                    importeTotal={e.importeTotal}
                    medioPago={e.medioPago}
                    pedido={e.pedido}
                    cliente={e.Cliente}
                    setAux={setAux}
                    aux={aux}
                    activo={e.activo}
                    entregado={e.entregado}
                    telefono={e.Cliente.telefono}
                  ></Pedidos>
                );
              }
              return null;
            } else {
              if (!e.activo) {
                return (
                  <Pedidos
                    key={e.id}
                    consumo={e.consumo}
                    fecha={e.fecha}
                    id={e.id}
                    importeTotal={e.importeTotal}
                    medioPago={e.medioPago}
                    pedido={e.pedido}
                    cliente={e.Cliente}
                    setAux={setAux}
                    aux={aux}
                    activo={e.activo}
                    entregado={e.entregado}
                    telefono={e.Cliente.telefono}
                  ></Pedidos>
                );
              }
              return null;
            }
          })}
      </div>
    </div>
  );
};
