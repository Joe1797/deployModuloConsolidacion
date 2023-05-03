import React, { useEffect, useState } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "cliente", headerName: "Cliente", width: 150 },
  { field: "dni", headerName: "DNI", width: 100 },
  { field: "telefono", headerName: "Telefono", width: 100 },
  {
    field: "pedido",
    headerName: "Pedido",
    width: 400,
    resizable: true,
  },
  {
    field: "importe",
    headerName: "Importe",
    type: "number",
    width: 100,
  },
  {
    field: "medioPago",
    headerName: "Medio de Pago",
    width: 120,
  },
  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //   },
];

// function getRowStyle(row, index) {
//   console.log(index, row);
//   return {
//     backgroundColor: index % 2 === 0 ? "red" : "red",
//   };
// }

function MyExportButton() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

export const Reportes = () => {
  const [datos, setDatos] = useState();

  useEffect(() => {
    const getData = async () => {
      let req = await axios("/allPedidos");
      //   console.log(req.data.data);
      setDatos(req.data.data);
    };
    getData();
  }, []);

  const rows = [];

  datos?.forEach((e) => {
    let pedidos = e.pedido.map((p) => {
      let pJ = JSON.parse(p);
      return {
        nombre: pJ.nombre,
        cantidad: pJ.cantidad,
      };
    });

    let stringPedido = "";

    pedidos.forEach((e) => {
      stringPedido += " " + e.cantidad + " " + e.nombre + " /";
    });

    rows.push({
      id: e.id,
      cliente: e.Cliente.nombreCompleto,
      dni: e.Cliente.dni,
      telefono: e.Cliente.telefono,
      pedido: stringPedido,
      importe: e.importeTotal,
      medioPago: e.medioPago,
    });
  });
  //   console.log("COLUM", colum);

  //   console.log(datos);

  return (
    <div style={{ height: "500px", width: "90%", margin: "auto" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        // getRowStyle={getRowStyle}
        // paginationModel={{ page: 0, pageSize: 10 }}
        // pageSizeOptions={[5]}
        // pageSizeOptions={[5]}
        // autoHeight
        // getRowStyle={(params) => {
        //   console.log(params);
        //   return {
        //     backgroundColor: params.row.id % 2 === 0 ? "#f5f5f5" : "red",
        //   };
        // }}
        autoPageSize
        checkboxSelection
        components={{
          Toolbar: MyExportButton,
        }}
      />
    </div>
  );
};
