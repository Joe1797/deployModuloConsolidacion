import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
// import logoDvero from "../../images/logoDvero.png";

export const Login = ({ setActivo }) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [inputs, setInputs] = useState({ usuario: "", contraseña: "" });
  const [error, setError] = useState("");

  const rol = params.get("rol");
  // console.log(rol);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(inputs);

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    let status = 0;
    if (rol === "empresa") {
      try {
        const res = await axios.post(
          "http://localhost:3001/logearseEmpresa",
          inputs
        );
        // console.log("Consoles", res.status);
        status = res.status;
      } catch (error) {
        // console.log(error.response.status);
        status = error.response.status;
      }
      if (status === 200) {
        navigate("/modulos");
        localStorage.setItem("activo", JSON.stringify({ activo: true }));
        setActivo(true);
      }
    }
    if (rol === "administrador") {
      try {
        const res = await axios.post(
          "http://localhost:3001/logearseAdministrador",
          inputs
        );
        // console.log("Consoles", res.status);
        status = res.status;
      } catch (error) {
        // console.log(error.response.status);
        status = error.response.status;
      }
      if (status === 200) navigate("/panel/admin");
    }
    if (rol === "chef") {
      try {
        const res = await axios.post(
          "http://localhost:3001/logearseCocinero",
          inputs
        );
        // console.log("Consoles", res.status);
        status = res.status;
      } catch (error) {
        // console.log(error.response.status);
        status = error.response.status;
      }
      if (status === 200) navigate("/panel/chef");
    }
    setError("Usuario o Contraseña Invalida");
    setTimeout(() => {
      setError("");
    }, 2500);
  };
  return (
    <>
      {/* <div>
        <div className="logoEmpresaModulo">
          <img src={logoDvero} alt="Logo Empresa" />
        </div>
        <h2>DVERO PRODUCCIONES EIRL</h2>
      </div> */}
      <div className="containerLogin">
        <form className="formContainerLogin" onSubmit={handleSubmitLogin}>
          <p style={{ color: "red", fontWeight: "800" }}>
            {error !== "" ? error : null}
          </p>
          <div className="containerInputs">
            <label htmlFor="">Usuario</label>
            <div className="input-iconoUser">
              <input
                type="text"
                placeholder="Ingrese Usuario"
                name="usuario"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="containerInputs">
            <label htmlFor="">Contraseña</label>
            <div className="input-iconoContraseña">
              <input
                type="password"
                placeholder="Ingrese Contraseña"
                name="contraseña"
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <input type="submit"></input>
        </form>
      </div>
    </>
  );
};
