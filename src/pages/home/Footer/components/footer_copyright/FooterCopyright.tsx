import React from "react";
import logos from "../../../../../assets/imgs/desarrolladopor-logos.png";

export default function FooterCopyright() {
  return (
    <div className="py-8 flex justify-center items-center border-t border-gray-700 mx-32">
      <div className="text-white text-xs font-extraligth mr-3">
        Desarrollado por
      </div>
      <img src={logos} alt="" />
    </div>
  );
}
