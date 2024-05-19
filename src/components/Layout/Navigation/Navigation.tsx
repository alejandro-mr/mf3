import { useState } from "react";
import { debounce } from "lodash";
import mf3Logo from "../../../assets/mf3-logo.svg";
import "./Navigation.css";

function Navigation() {
  const [isVisible, setVisible] = useState(false);
  const handleMouseLeave = debounce(() => setVisible(false), 100);
  const handleMouseEnter = () => {
    setVisible(true);
    handleMouseLeave.cancel();
  };
  return (
    <nav role="navigation" className="navigation">
      <a href="">Inicio</a>
      <a href="">Worlds 2024</a>
      <a href="">Afíliate</a>
      <img src={mf3Logo} className="h-20 px-8" />
      <div
        className="relative"
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        Eventos
        <div className={`dropdown ${isVisible ? "visible" : ""}`}>
          <ul>
            <li>
              <a>Qualifiers MF3</a>
            </li>
            <li>
              <a>Regionales MF3</a>
            </li>
            <li>
              <a>Nacional MF3</a>
            </li>
            <li>
              <a>Worlds 2024</a>
            </li>
            <div className="action">
              <span className="flex border border-gray-5" />
              <a>Crea tu Evento</a>
            </div>
          </ul>
        </div>
      </div>
      <a href="">Galería</a>
      <a href="">Contacto</a>
    </nav>
  );
}

export default Navigation;
