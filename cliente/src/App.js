import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Nav } from "./Components/Nav/Nav.jsx";
import { LandingPage } from "./Components/LandingPage/LandingPage";
import { Footer } from "./Components/Footer/Footer";
import { Login } from "./Components/Login/Login";
import { Modulo } from "./Components/Modulos/Modulo";
import { Roles } from "./Components/Roles/Roles";
import { AdministradorPanel } from "./Components/AdministradorPanel/AdministradorPanel";
import { CocineroPanel } from "./Components/CocineroPanel/CocineroPanel";
import { Nosotros } from "./Components/Nosotros/Nosotros";
import { Contacto } from "./Components/Contacto/Contacto";
import { PanelCliente } from "./Components/PanelCliente/PanelCliente";
import { CrearPlato } from "./Components/CrearPlato/CrearPlato";
import { Comprobante } from "./Components/Comprobante/Comprobante";
import { ClienteLandingPage } from "./Components/ClienteLandingPage/ClienteLandingPage";
import { ProtectedRoute } from "./Components/ProtectedRoute/ProtectedRoute";
import { Reportes } from "./Components/Reportes/Reportes";
import axios from "axios";
// axios.defaults.baseUrl = "http://localhost:3001/";
axios.defaults.baseUrl =
  "https://deploymoduloconsolidacion-production.up.railway.app/";

import { useState, useEffect } from "react";

function App() {
  const [activo, setActivo] = useState();
  const [auxiliarAct, setAuxiliarAct] = useState(0);
  // const navigate = useNavigate();
  // console.log("appjs", auxiliarAct);

  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("activo"));
    if (login?.activo === true) {
      setActivo(true);
    } else {
      setActivo(false);
    }
  }, [activo]);

  return (
    <div className="App">
      <Nav activo={activo} setActivo={setActivo}></Nav>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Login setActivo={setActivo} />}></Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/contacto" element={<Contacto />}></Route>
        <Route
          path="/panel/cliente"
          element={
            <PanelCliente
              auxiliarAct={auxiliarAct}
              setAuxiliarAct={setAuxiliarAct}
            />
          }
        ></Route>
        <Route path="/comprobantePago" element={<Comprobante />}></Route>
        <Route path="/clientes" element={<ClienteLandingPage />}></Route>
        <Route element={<ProtectedRoute activo={activo}></ProtectedRoute>}>
          <Route path="/modulos" element={<Modulo />}></Route>
          <Route path="/modulos/rolesEmpresa" element={<Roles />}></Route>
          <Route path="/panel/admin" element={<AdministradorPanel />}></Route>
          <Route path="/crearPlato" element={<CrearPlato />}></Route>
          <Route
            path="/panel/chef"
            element={<CocineroPanel auxiliarAct={auxiliarAct} />}
          ></Route>
          <Route path="/panel/admin/reportes" element={<Reportes />}></Route>
        </Route>
        <Route path="*" element={<h1>404</h1>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
