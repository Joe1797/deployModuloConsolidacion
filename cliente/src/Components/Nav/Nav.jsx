import React, { useEffect, useState } from "react";
// import logo from "../../images/logoDY(1).png";
import logo from "../../images/logoPasado.jpg";
import "./Nav.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Nav = ({ setActivo, activo }) => {
  const [ruta, setRuta] = useState(false);
  let { pathname } = useLocation();
  // console.log(pathname);
  // useEffect(() => {
  //   // let dataEmpresa = JSON.parse(localStorage.getItem("dataEmpresa"));
  //   // setActivo(dataEmpresa.activo);
  // }, [activo]);

  useEffect(() => {
    if (
      pathname === "/clientes" ||
      pathname === "/panel/cliente" ||
      pathname === "/comprobantePago"
    ) {
      setRuta(true);
    } else {
      setRuta(false);
    }
  }, [pathname]);

  // console.log(activo);

  return (
    <nav className="navLanding">
      <Link to="/" style={{ textDecoration: "none", color: "#133956" }}>
        <div className="navLogo">
          <div className="navImgContainer">
            <img src={logo} alt="Logo de la empresa" />
          </div>
          {/* <span>Service</span> */}
        </div>
      </Link>
      <div className="navLinksContainer">
        <ul>
          <Link to="/nosotros" style={{ textDecoration: "none" }}>
            <li>Nosotros</li>
          </Link>
          <Link to="/contacto" style={{ textDecoration: "none" }}>
            <li>Contacto</li>
          </Link>
        </ul>
        {ruta === false ? (
          activo === true ? (
            <Link
              to="/login?rol=empresa"
              onClick={() => {
                setActivo(false);
                localStorage.setItem(
                  "activo",
                  JSON.stringify({ activo: false })
                );
              }}
            >
              <button>Cerrar Sesión</button>
            </Link>
          ) : (
            <Link to="/login?rol=empresa">
              <button>Login Empresas</button>
            </Link>
          )
        ) : null}
      </div>
    </nav>
  );
};
