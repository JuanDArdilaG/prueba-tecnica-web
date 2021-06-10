import AuxiliarNavigationLinks from "./components/auxiliar_navigation_links/AuxiliarNavigationLinks";
import Logo from "./components/logo/Logo";
import NavigationLinks from "./components/navigation_links/NavigationLinks";
import SearchBar from "./components/search_bar/SearchBar";

import "./Header.css";

export default function Header() {
  return (
    <div className="flex flex-col bg-color">
      <div className="flex items-center w-full mx-auto px-16 pt-3">
        <Logo />
        <SearchBar />
        <NavigationLinks />
      </div>
      <div className="w-full">
        <AuxiliarNavigationLinks />
      </div>
    </div>
  );
}
