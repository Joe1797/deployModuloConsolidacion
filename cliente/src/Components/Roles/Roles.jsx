import React from "react";
import "./Roles.css";
import perfilCocinero from "../../images/perfilCocinero.png";
import perfilAdministrador from "../../images/perfilAdministrador.png";
import { useNavigate } from "react-router-dom";
import logoDvero from "../../images/logoDvero.png";

export const Roles = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="ContainerLOGOTODO">
        <div className="logoEmpresaModulo">
          <img src={logoDvero} alt="Logo Empresa" />
        </div>
        <h2>DVERO PRODUCCIONES EIRL</h2>
      </div>

      <section className="rolesContainer">
        <h3>Selecciona el rol para ingresar</h3>
        <div className="rolesAdminCocinero">
          <div
            className="rolesContent"
            onClick={() => navigate("/login?rol=administrador")}
          >
            <div className="rolesContainerImg">
              <img src={perfilAdministrador} alt=""></img>
            </div>
            <p>Administrador</p>
          </div>
          <div
            className="rolesContent"
            onClick={() => navigate("/login?rol=chef")}
          >
            <div className="rolesContainerImg">
              <img src={perfilCocinero} alt=""></img>
            </div>
            <p>Chef</p>
          </div>
        </div>
      </section>
    </>
  );
};
