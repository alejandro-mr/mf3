import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { debounce } from "lodash";
import mf3Logo from "../../../assets/mf3-logo.svg";
import "./Navigation.css";

function Navigation() {
  useEffect(() => {
    if (typeof window !== undefined) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 125) {
          setScrolled(true);
        }
        if (window.scrollY <= 120) {
          setScrolled(false);
        }
      });
    }
  }, []);
  const [isVisible, setVisible] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const handleMouseLeave = debounce(() => setVisible(false), 100);
  const handleMouseEnter = () => {
    setVisible(true);
    handleMouseLeave.cancel();
  };
  return (
    <nav
      role="navigation"
      className={`navigation ${isScrolled ? "solid" : ""}`}
    >
      <NavLink to="/">Inicio</NavLink>
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
      <NavLink to="/galeria">Galería</NavLink>
      <a href="">Contacto</a>
    </nav>
  );
}

export default Navigation;
