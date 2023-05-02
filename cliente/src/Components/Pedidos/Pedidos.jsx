import React from "react";
import "./Pedidos.css";
import axios from "axios";

export const Pedidos = ({
  consumo,
  fecha,
  id,
  importeTotal,
  medioPago,
  pedido,
  cliente,
  aux,
  setAux,
  activo,
  telefono,
  entregado,
}) => {
  const confirmarPedido = async () => {
    const req = await axios.patch(`http://localhost:3001/eliminarPedido/${id}`);
    console.log(req);
    setAux(aux + 1);
    let msgPlatos = "";
    let platos = pedido.map((e, i) => {
      let eJson3 = JSON.parse(e);
      return { nombre: eJson3.nombre, cantidad: eJson3.cantidad };
    });
    platos.forEach((e, i) => {
      if (i === platos.length - 1) {
        msgPlatos += e.cantidad + " plato(s) de " + e.nombre;
      } else {
        msgPlatos += e.cantidad + "plato(s) de " + e.nombre + " / ";
      }
    });
    // console.log(msgPlatos);
    let mensaje = `Hola somos DVERO EIRL, tu pedido de ${msgPlatos} esta listo!!. Te esperamos, buen provecho!`;
    const mensajeCode = encodeURI(mensaje);
    // console.log(mensajeCode);
    window.open(
      `https://api.whatsapp.com/send?phone=${telefono}&text=${mensajeCode}`,
      "_blank" // <- This is what makes it open in a new window.
    );
  };

  const entregarPedido = async () => {
    const req = await axios.patch(
      `http://localhost:3001/pedidoEntregado/${id}`
    );
    console.log(req);
    setAux(aux + 1);
  };

  return (
    <div className="containerPedido">
      <div className="containerDetail">
        <strong>Plato</strong>
        {pedido?.map((e, i) => {
          let eJson2 = JSON.parse(e);
          // console.log(e);
          return <p key={i}>{eJson2.nombre}</p>;
        })}
        {/* <p>Arroz Chaufa</p> */}
      </div>
      <div className="containerDetail">
        <strong>Cantidad</strong>
        {pedido?.map((e, i) => {
          let eJson2 = JSON.parse(e);
          // console.log(e);
          return <p key={i}>{eJson2.cantidad}</p>;
        })}
      </div>
      <div className="containerDetail">
        <strong>Cliente</strong>
        <p>{cliente.nombreCompleto}</p>
      </div>
      <div className="containerDetail">
        <strong>Consumo</strong>
        <p>{consumo}</p>
      </div>
      {activo === true && (
        <div>
          <button onClick={confirmarPedido}>Confirmar</button>
        </div>
      )}
      {entregado === false && activo === false && (
        <div>
          <button onClick={entregarPedido}>Entregar</button>
        </div>
      )}
      {entregado === true && activo === false && (
        <div className="containerEntregado">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Yes_Check_Circle.svg/768px-Yes_Check_Circle.svg.png"
            alt="Entregado"
          />
        </div>
      )}
    </div>
  );
};
