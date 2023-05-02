import React from "react";
import "./LandingPage.css";
import imgLP from "../../images/ImagenLandingPage.webp";

export const LandingPage = () => {
  return (
    <main className="containerMain">
      <div className="imgMainContainer">
        <img src={imgLP} alt="Imagen de soluciones tecnologicas" />
      </div>
      <div className="containerContentMain">
        <h1>D&Y</h1>
        <span>
          El software a tu medida para gestionar el éxito en tu empresa
        </span>
      </div>
    </main>
  );
};
