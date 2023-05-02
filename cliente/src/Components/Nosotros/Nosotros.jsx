import React from "react";
import "./Nosotros.css";
import separador from "../../images/separador.png";
import delfor from "../../images/Delfor.jpg";
import yan from "../../images/Yan.jpg";

export const Nosotros = () => {
  return (
    <div className="containerNosotros">
      <div>
        <img
          src="https://png.pngtree.com/png-vector/20220803/ourlarge/pngtree-office-situation-meeting-with-partners-cartoon-png-image_5720452.png"
          alt="Imagen Quienes Somos"
        />
        <div className="containerSomos">
          <div>
            <h2>¿Quienes Somos?</h2>
          </div>
          <h3>
            Somo empresarios peruanos dedicados en ayudar a las micro y pequeñas
            empresas a identificar las brechas dentro de sus áreas, con la
            finalidad de crear conexiones que optimicen sus procesos generando
            valor a la empresa, y logrando que estas se sostengan en el mercado
            a través de metodologías y herramientas únicas realizadas a medida,
            adaptables y escalables.
          </h3>
        </div>
        <div className="containerContacto">
          <div className="containerContactoContent">
            <div className="cardContacto">
              <div className="containerImgContacto">
                <img src={delfor} alt="foto" />
              </div>
              <div className="containerSeparador">
                <img src={separador} alt="separador" />
              </div>
              <div className="containerContentCard2">
                <h4>Delfor Pinto</h4>
                <h5>Ing. Industrial</h5>
                <p>
                  Me desempeño en una empresa transnacional y gestiono sus
                  operaciones, implementando novedosos sistemas de solución
                  integrales a nuestros clientes.
                </p>
              </div>
            </div>
            <div className="cardContacto">
              <div className="containerImgContacto">
                <img src={yan} alt="foto" />
              </div>
              <div className="containerSeparador">
                <img src={separador} alt="separador" />
              </div>
              <div className="containerContentCard2">
                <h4>Yan Rodriguez</h4>
                <h5>Ing. Electrónico</h5>
                <p>
                  10 años experiencia en la industria minera de petróleo y gas,
                  mantenimiento de plantas industriales en el ámbito de la
                  instrumentación y los sistemas de control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vistaCambiada">
        <div className="containerIMG">
          <img
            src="https://edea.juntadeandalucia.es/bancorecursos/file/6ad4ad0e-36f1-4599-9ee2-416d9a226360/1/guia_colaborativo_REA_Andalucia.zip/trabajo_en_grupo.png"
            alt="vision"
          />
        </div>
        <div className="containerMisVis">
          <div>
            <h3>Nuestra Misión</h3>
          </div>
          <p>
            Nuestra misión es crear un entorno de trabajo inclusivo para
            mujeres, ofreciendo soluciones a medida para satisfacer las
            necesidades de nuestros clientes. Nuestra innovadora solución medida
            contribuirá a mejorar la productividad de los negocios de nuestros
            clientes, ayudándolos a lograr sus objetivos y satisfacer sus
            necesidades. Además, ofreceremos a nuestras empleadas oportunidades
            de crecimiento y desarrollo, enriqueciendo su experiencia laboral al
            tiempo que les permitimos alcanzar su potencial.
          </p>
        </div>
      </div>
      <div>
        <div className="containerIMG">
          <img
            src="https://www.aerocivil.gov.co/atencion/participacion/PublishingImages/nuestro-equipo-de-trabajo/equipo-trabajo%20copia.png"
            alt="vision"
          />
        </div>
        <div className="containerMisVis">
          <div>
            <h3>Nuestra Visión</h3>
          </div>
          <p>
            Nuestra visión es crear una empresa muy competitiva en el mercado
            que desarrolle soluciones informáticas a medida de alta calidad y a
            la satisfacción de las necesidades de nuestros clientes,
            proporcionando una experiencia única y adaptada y ser un ejemplo de
            inclusión y equidad de género, reconociendo el valor de la
            diversidad de perspectivas y habilidades de mujeres en el ámbito de
            la tecnología.
          </p>
        </div>
      </div>
    </div>
  );
};
