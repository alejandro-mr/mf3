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
  const [collapsed, setCollapsed] = useState(true);

  const handleMouseLeave = debounce((e) => {
    setVisible(false);
    //e.stopPropagation();
  }, 100);
  const handleMouseEnter = (e) => {
    setVisible(true);
    handleMouseLeave.cancel();
    //e.stopPropagation();
  };
  const handleMenuCollapse = (e) => {
    setCollapsed(!collapsed);
    e.stopPropagation();
  };

  return (
    <>
      <nav
        role="navigation"
        className={`navigation ${isScrolled ? "solid" : ""} ${collapsed ? "max-lg:-translate-y-full" : "max-lg:translate-y-0 max-lg:overflow-hidden"}`}
      >
        <a
          className={`lg:hidden rounded-full bg-green-neutral/20 border text-green-neutral hover:text-green-dark border-green-neutral hover:border-green-dark p-4 ${!collapsed ? "inline-flex" : "hidden"}`}
          onClick={handleMenuCollapse}
        >
          Close X
        </a>
        <NavLink to="/" onClick={handleMenuCollapse}>
          Inicio
        </NavLink>
        <NavLink to="/worlds-2024" onClick={handleMenuCollapse}>
          Worlds 2024
        </NavLink>
        <NavLink to="/afiliate" onClick={handleMenuCollapse}>
          Afíliate
        </NavLink>
        <img src={mf3Logo} className="h-20 px-8" />
        <NavLink
          to="/eventos"
          className="relative"
          onMouseLeave={handleMouseLeave}
          onMouseEnter={handleMouseEnter}
          onClick={handleMenuCollapse}
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
        </NavLink>
        <NavLink to="/galeria" onClick={handleMenuCollapse}>
          Galería
        </NavLink>
        <NavLink to="/contacto" onClick={handleMenuCollapse}>
          Contacto
        </NavLink>
      </nav>
      <button
        className="lg:hidden absolute top-4 left-4 w-28 rounded bg-green-neutral/20 border text-green-neutral hover:text-green-dark border-green-neutral hover:border-green-dark"
        onClick={() => {
          setCollapsed(!collapsed);
        }}
      >
        Menu
      </button>
    </>
  );
}

export default Navigation;
