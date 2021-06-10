import { products } from "../../data/products";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import NuevaColeccionSection from "./NuevaColeccionSection/NuevaColeccionSection";

import "./Home.css";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <NuevaColeccionSection products={products} />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
