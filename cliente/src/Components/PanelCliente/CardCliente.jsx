import React, { useEffect, useState } from "react";
// import axios from "axios";

export const CardCliente = ({
  id,
  nombre,
  precio,
  stock,
  image,
  setPedidos,
  pedidos,
}) => {
  const [check, setCheck] = useState(false);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    // console.log(cantidad);
    if (check) {
      let act2 = pedidos.filter((e) => e.id !== id);
      let inputs = {
        id,
        nombre,
        precio,
        stock,
        image,
        cantidad: cantidad,
      };
      setPedidos([...act2, inputs]);
    }
  }, [cantidad]);

  const onChange = (e) => {
    if (e.target.checked === true) {
      let inputs = {
        id,
        nombre,
        precio,
        stock,
        image,
        cantidad: cantidad,
      };
      setPedidos([...pedidos, inputs]);
      setCheck(true);
    } else {
      let act2 = pedidos.filter((e) => e.id !== id);
      // console.log("ACT", act2);
      setPedidos(act2);
      setCheck(false);
    }
  };

  const onChangeCantidad = (e) => {
    if (check) {
      setCantidad(e.target.value);
      // let act2 = pedidos.filter((e) => e.id !== id);
      // // setPedidos(act2);
      // // let index = pedidos.findIndex((e) => e.id === id);
      // // console.log(index);
      // let inputs = {
      //   id,
      //   nombre,
      //   precio,
      //   stock,
      //   image,
      //   cantidad: cantidad,
      // };
      // setPedidos([...act2, inputs]);
    }
    // setPedidos(...pedidos);
  };

  // console.log(pedidos);

  return (
    <div className="cardsContainerMenu">
      <div className="containerCard">
        <div>
          <input
            type="checkbox"
            name="check"
            value={id}
            // onChange={(e) => console.log(e.target.checked, e.target.value)}
            onChange={onChange}
          ></input>
          <span>{nombre}</span>
        </div>
        {check && (
          <div>
            <label>
              <strong>Cantidad a Pedir:</strong>
            </label>
            <br></br>
            <input
              className="inputCantidad"
              type="number"
              min={"1"}
              value={cantidad}
              onChange={onChangeCantidad}
            ></input>
          </div>
        )}
        <img src={image} alt={nombre}></img>
        <span>Precio : S/.{precio}</span>
        <span>Stock : {stock}</span>
      </div>
    </div>
  );
};
