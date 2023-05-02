import React from "react";
import "./Contacto.css";
import Phone from "./phone";
import Chat from "./chat";
import Calendar from "./calendar";

export const Contacto = () => {
  return (
    <div className="imgContainerContacto">
      <div className="contactoTexInicial">
        <h2>Te contamos lo que quieras saber sobre nuestra plataforma</h2>
        <p>
          Queremos ayudarte a incrementar la productividad en tus ventas y
          reducir el estrés de tus empleados. Aquí tienes algunas formas de
          ponerte en contacto con nuestro equipo de ventas.
        </p>
      </div>
      <div className="containerCardContactoN">
        <div className="cardContactoN">
          <Phone width="40px"></Phone>
          <span>Llámanos directamente</span>
          <span>+51 997 900 132</span>
        </div>
        <div className="cardContactoN">
          <Chat width="40px"></Chat>
          <span>Habla con nuestro equipo de ventas</span>
          <button>Chatea con nosotros</button>
        </div>
        <div className="cardContactoN">
          <Calendar width="40px" height="40px"></Calendar>
          <span>Recibe una demostración de producto</span>
          <button>Recibir una demostración</button>
        </div>
      </div>
    </div>
  );
};
