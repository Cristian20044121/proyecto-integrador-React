import React, { useState } from "react";

export const CarritoDeCompras = ({nombre, marca, foto, precio, cantidad}) => {

  return (
    <div>
      <tbody>
      <table>
        <tr>
          <th>Nombre</th>
          <th>Marca</th>
          <th>Foto del producto</th>
          <th>Precio unitario</th>
          <th>Cantidad</th>
        </tr>
        <tr>
            <td></td>
            <td>Locion</td>
            <td>image dle producto</td>
            <td>$123.455</td>
            <td>1</td>
        </tr>
      </table>
      </tbody>
      <div>
        <p>No hay productos, carrito vacio</p>
      </div>
    </div>
  );
};
