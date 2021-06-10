import React from "react";
import FooterCopyright from "./components/footer_copyright/FooterCopyright";
import FooterSection from "./components/footer_section/FooterSection";

import "./Footer.css";

export default function Footer() {
  return (
    <div id="footer-container">
      <div id="footer-sections" className="flex justify-around py-8 px-10">
        <FooterSection>
          <h1>Sobre nosotros</h1>
          <ul>
            <li>¿Quienes somos?</li>
            <li>Nuestra historia</li>
            <li>Nuestra información</li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h1>Categorías Destacadas</h1>
          <ul>
            <li>Profesionales de la salud</li>
            <li>Protección e higiene</li>
            <li>Control y prevención</li>
            <li>Movilidad</li>
            <li>Independencia y cuidado en el hogar</li>
            <li>Terapia respiratoria</li>
            <li>Confort</li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h1>Servicio al cliente</h1>
          <ul>
            <li>Política de entregas</li>
            <li>Política de devoluciones</li>
            <li>Política de garantías</li>
            <li>Política de cancelación</li>
            <li>Whatsapp 123 123 3434</li>
            <li>PBX 01 8000 123 345</li>
            <li>e-Mail: info@impormedical.com</li>
          </ul>
        </FooterSection>
        <FooterSection className="flex-grow">
          <h1>Suscríbase a nuestro newsletter</h1>
          <ul>
            <li></li>
          </ul>
        </FooterSection>
      </div>
      <div id="footer-copyright">
        <FooterCopyright />
      </div>
    </div>
  );
}
