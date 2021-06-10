import React, { PropsWithoutRef } from "react";

export default function AddToCartButton(
  props: PropsWithoutRef<{ className?: string }>
) {
  const label = "Añadir al carrito";
  return (
    <button
      className={`uppercase bg-blue-500 text-white p-3 text-sm rounded mt-2 transition transition-300 ${
        props.className || ""
      }`}
    >
      {label}
    </button>
  );
}
