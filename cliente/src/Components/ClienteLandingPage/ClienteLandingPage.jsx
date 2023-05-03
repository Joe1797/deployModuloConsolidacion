import React, { useState } from "react";
import "./ClienteLandingPage.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ClienteLandingPage = () => {
  const [inputsLog, setInputsLog] = useState({
    usuario: "",
    contraseña: "",
  });

  const [inputsReg, setInputsReg] = useState({
    usuario: "",
    contraseña: "",
    nombres: "",
    apellidos: "",
    telefono: "",
    dni: "",
    contraseñaVer: "",
  });

  const [creado, setCreado] = useState("");
  const [logeado, setLogeado] = useState("");

  const navigate = useNavigate();

  const onChangeLogin = (e) => {
    setInputsLog({
      ...inputsLog,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(inputsLog);

  const onChangeRegister = (e) => {
    setInputsReg({
      ...inputsReg,
      [e.target.name]: e.target.value,
    });
  };

  // console.log(inputsReg);

  const logearseCliente = async (e) => {
    e.preventDefault();
    try {
      const req = await axios.post("/logearseCliente", inputsLog);

      console.log(req.data.data.id);
      console.log(req.status);
      if (req.status === 200) {
        localStorage.setItem(
          "dataCliente",
          JSON.stringify({
            id: req.data.data.id,
            nombreCompleto: req.data.data.nombreCompleto,
            rol: "cliente",
          })
        );
        navigate("/panel/cliente");
      }
    } catch (error) {
      console.log(error);
      setLogeado("Usuario o Contraseña Incorrecto");
      setTimeout(() => {
        setLogeado("");
      }, 4000);
    }
  };

  const crearCliente = async (e) => {
    e.preventDefault();
    try {
      const req = await axios.post("/crearCliente", {
        usuario: inputsReg.usuario,
        contraseña: inputsReg.contraseña,
        nombreCompleto: inputsReg.nombres + " " + inputsReg.apellidos,
        telefono: inputsReg.telefono,
        dni: inputsReg.dni,
      });
      console.log(req);
      setCreado("Cliente creado con éxito");
      setTimeout(() => {
        setCreado("");
      }, 4000);
      setInputsReg({
        usuario: "",
        contraseña: "",
        nombres: "",
        apellidos: "",
        telefono: "",
        dni: "",
        contraseñaVer: "",
      });
    } catch (error) {
      console.log(error);
      setCreado("No se pudo crear al cliente");
      setTimeout(() => {
        setCreado("");
      }, 4000);
    }
  };

  return (
    <div className="containerClienteLP">
      <h2>Bienvenidos Clientes de DVERO EIRL</h2>
      {logeado !== "" && (
        <div style={{ color: "red", fontWeight: "900" }}>{logeado}</div>
      )}
      <form className="formLoginLP" onSubmit={logearseCliente}>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            name="usuario"
            onChange={onChangeLogin}
            placeholder="Ingrese usuario"
          ></input>
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="contraseña"
            onChange={onChangeLogin}
            placeholder="Ingrese contraseña"
          ></input>
        </div>
        {/* <div > */}
        <input type="submit" value="Logearse"></input>
        {/* </div> */}
      </form>
      <h3>Si eres nuevo con el servicio, aqui puedes registrarte.</h3>
      <section>
        <div>
          <img
            src="https://s3.ppllstatics.com/elcorreo/www/multimedia/202201/20/media/cortadas/camareros1-kA6-U160604681971j3D-1248x770@El%20Correo.jpg"
            alt=""
          />
        </div>
        <div>
          <form onSubmit={crearCliente}>
            {creado !== "" && (
              <div style={{ color: "black", fontWeight: "900" }}>{creado}</div>
            )}
            <div>
              <label>Nombres:</label>
              <input
                type="text"
                name="nombres"
                onChange={onChangeRegister}
                value={inputsReg.nombres}
                placeholder="Ingrese nombres"
              ></input>
            </div>
            <div>
              <label>Apellidos:</label>
              <input
                type="text"
                name="apellidos"
                onChange={onChangeRegister}
                value={inputsReg.apellidos}
                placeholder="Ingrese apellidos"
              ></input>
            </div>
            <div>
              <label>Telefono:</label>
              <input
                type="text"
                name="telefono"
                onChange={onChangeRegister}
                value={inputsReg.telefono}
                placeholder="Ingrese telefono"
              ></input>
            </div>
            {/* <label>
          Correo: <input type="text"></input>
        </label> */}
            <div>
              <label>DNI: </label>
              <input
                type="text"
                name="dni"
                onChange={onChangeRegister}
                value={inputsReg.dni}
                placeholder="Ingrese DNI"
              ></input>
            </div>
            <div>
              <label>Usuario:</label>
              <input
                type="text"
                name="usuario"
                onChange={onChangeRegister}
                value={inputsReg.usuario}
                placeholder="Ingrese usuario"
              ></input>
            </div>
            <div>
              <label>Contraseña:</label>
              <input
                type="password"
                name="contraseña"
                onChange={onChangeRegister}
                value={inputsReg.contraseña}
                placeholder="Ingrese contraseña"
              ></input>
            </div>
            {inputsReg.contraseña !== inputsReg.contraseñaVer &&
              inputsReg.contraseñaVer.length !== 0 && (
                <div style={{ color: "red" }}>La contraseña no coincide</div>
              )}
            <div>
              <label>Repetir Contraseña:</label>
              <input
                type="password"
                name="contraseñaVer"
                value={inputsReg.contraseñaVer}
                onChange={onChangeRegister}
                placeholder="Repetir contraseña"
              ></input>
            </div>
            <div>
              <input type="submit" value="Registrarse" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};
