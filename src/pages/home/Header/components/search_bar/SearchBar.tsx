import React from "react";
import { Search } from "react-feather";

import "./SearchBar.css";

export default function SearchBar() {
  return (
    <div className="flex-shrink-0 w-1/2 ml-10 border-2 border-black rounded flex">
      <input
        type="text"
        className="pl-3 text-xs uppercase w-full"
        placeholder="¿Qué estás buscando? Escríbelo aquí..."
      />
      <div id="searchbar-logo" className="bg-black px-2 rounded">
        <a href="#">
          <Search color="white" className="w-11/12" />
        </a>
      </div>
    </div>
  );
}
