import React from "react";
import { useLocation } from "react-router-dom";
import logoVero from "../../images/logoDvero.png";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";

import { useNavigate } from "react-router-dom";

const styles = StyleSheet.create({
  viewer: {
    minWidth: "90%",
    minHeight: "75vh",
  },
  image: {
    display: "flex",
    width: "20%",
    margin: "0 auto",
  },
  page: { display: "flex", justifyContent: "start", padding: "30px" },
  section: { margin: "18px auto", fontWeight: "900", color: "rgb(210,177,76)" },
  container: {
    display: "flex",
    flexDirection: "row",
    marginBottom: "10px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  containerText: {
    width: "180px",
    color: "black",
    fontWeight: "extrabold",
  },
  containerText2: {
    width: "220px",
    fontWeight: "light",
    color: "rgb(82,86,100)",
  },
});

export const Comprobante = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  // console.log(state);

  const irPanel = () => {
    navigate("/panel/cliente");
  };

  return (
    <>
      <PDFViewer style={styles.viewer}>
        <Document title="Comprobante de Pago DVERO">
          <Page size="A4" style={styles.page}>
            <Image style={styles.image} src={logoVero} />
            <View style={styles.section}>
              <Text>DVERO PRODUCCIONES EIRL</Text>
            </View>
            <View style={styles.section}>
              <Text>Comprobante de Pago</Text>
            </View>
            <View>
              <View style={styles.container}>
                <Text style={styles.containerText}>Codigo de Cliente: </Text>
                <Text style={styles.containerText2}>
                  {state.cliente_pedido}
                </Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.containerText}>Pedido :</Text>
                <Text style={styles.containerText2}>
                  {state.pedido?.map((e, i) => {
                    if (i === state.pedido?.length - 1)
                      return ` ${e.cantidad} Plato(s) de: ${e.nombre}  `;
                    return ` ${e.cantidad} Plato(s) de: ${e.nombre} / `;
                  })}
                </Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.containerText}>Consumo: </Text>
                <Text style={styles.containerText2}>{state.consumo}</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.containerText}>Medio de Pago : </Text>
                <Text style={styles.containerText2}>{state.medioPago}</Text>
              </View>
              <View style={styles.container}>
                <Text style={styles.containerText}>Importe Total : </Text>
                <Text style={styles.containerText2}>
                  S/.{state.importeTotal}
                </Text>
              </View>
              <Text style={{ textAlign: "center", marginTop: "25px" }}>
                Gracias por su Preferencia!
              </Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
      <div>
        <button
          onClick={irPanel}
          style={{
            color: "white",
            background: "black",
            padding: "10px",
            cursor: "pointer",
            borderRadius: "8px",
            fontWeight: "16px",
          }}
        >
          Ir a ver Menu
        </button>
      </div>
    </>
  );
};
