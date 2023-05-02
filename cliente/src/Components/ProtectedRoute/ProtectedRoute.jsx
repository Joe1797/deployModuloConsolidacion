import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ activo }) => {
  let ls = JSON.parse(localStorage.getItem("activo"));
  console.log(ls);
  console.log(activo);

  if (ls?.activo === false || ls === null) {
    if (!activo) {
      return <Navigate to="/" />;
    }
  }
  return <Outlet />;
};
