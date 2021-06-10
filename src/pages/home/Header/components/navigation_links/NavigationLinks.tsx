import React from "react";
import { ShoppingCart } from "react-feather";

import "./NavigationLinks.css";

export default function NavigationLinks() {
  return (
    <div className="flex justify-center items-center w-full text-xs">
      <div className="uppercase mr-8">
        <a href="#">Mis pedidos</a>
      </div>
      <div className="uppercase text-xs text-center flex flex-col mr-8">
        <span>Hola, Aliad@</span>
        <span className="text-sm text-blue underline">
          <a href="#">Ingresa</a>
        </span>
      </div>
      <div className="uppercase">
        <a href="#">
          <ShoppingCart className="inline mr-1" /> Carrito
        </a>
      </div>
    </div>
  );
}
