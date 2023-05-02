import React from "react";
import "./Modulo.css";
import { useNavigate } from "react-router-dom";
import logoDvero from "../../images/logoDvero.png";

export const Modulo = () => {
  const navigate = useNavigate();
  return (
    <section className="containerSectionModulo">
      <div className="ContainerLOGOTODO">
        <div className="logoEmpresaModulo">
          <img src={logoDvero} alt="Logo Empresa" />
        </div>
        <h2>DVERO PRODUCCIONES EIRL</h2>
      </div>
      <div className="containerModulos">
        <div
          className="containerModulo"
          onClick={() => navigate("/modulos/rolesEmpresa")}
        >
          <div className="moduloImgContainer">
            <img
              src="https://www.eleconomista.com.mx/__export/1661193607243/sites/eleconomista/img/2022/08/22/pedidos_restaurante_digital_cajera.png_1758632412.png"
              alt="Imagen de Modulo 1"
            />
          </div>
          <h3>Modulo de Pedidos</h3>
        </div>
        <div className="containerModulo">
          <div className="moduloImgContainer">
            <img
              src="https://media.admagazine.com/photos/618a5d11532cae908aaf27ab/master/w_1600%2Cc_limit/96644.jpg"
              alt="Imagen de Modulo 2"
            />
          </div>
          <h3>Modulo 2</h3>
        </div>
        <div className="containerModulo">
          <div className="moduloImgContainer">
            <img
              src="https://enlacocina.b-cdn.net/wp-content/uploads/2020/11/5-herramientas-para-el-futuro-de-la-gesti%C3%B3n-hostelera-2-1000x640.jpg"
              alt="Imagen de Modulo 3"
            />
          </div>
          <h3>Modulo 3</h3>
        </div>
        <div className="containerModulo">
          <div className="moduloImgContainer">
            <img
              src="https://enlacocina.b-cdn.net/wp-content/uploads/2020/05/Servicio-Take-away.jpg"
              alt="Imagen de Modulo 4"
            />
          </div>
          <h3>Modulo 4</h3>
        </div>
      </div>
    </section>
  );
};
