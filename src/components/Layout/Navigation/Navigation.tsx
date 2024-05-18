import mf3Logo from "../../../assets/mf3-logo.svg";
import "./Navigation.css";

function Navigation() {
  return (
    <nav role="navigation" className="navigation">
      <a href="">Inicio</a>
      <a href="">Worlds 2024</a>
      <a href="">Afíliate</a>
      <img src={mf3Logo} className="h-20 px-8" />
      <a href="">Eventos</a>
      <a href="">Galería</a>
      <a href="">Contacto</a>
    </nav>
  );
}

export default Navigation;
