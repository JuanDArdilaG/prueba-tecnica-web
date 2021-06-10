import React from "react";
import { Menu } from "react-feather";

export default function AuxiliarNavigationLinks() {
  return (
    <div className="flex items-center py-3 px-10 uppercase text-xs">
      <Menu style={{ flexBasis: "50px" }} />
      <div className="w-5/6 mx-auto flex justify-center">
        <div className="px-8">Movilidad</div>
        <div className="px-8">Cuidado en el hogar</div>
        <div className="px-8">Profesionales de la salud</div>
        <div className="px-8">Tapabocas y desinfección</div>
      </div>
    </div>
  );
}
