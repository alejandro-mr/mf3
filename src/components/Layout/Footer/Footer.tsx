import mf3Logo from "../../../assets/mf3-logo.svg";
import facebookLogo from "../../../assets/facebook.svg";
import instagramLogo from "../../../assets/instagram.svg";
import tiktokLogo from "../../../assets/tiktok.svg";
import "./Footer.css";
import FacebookLink from "../../FacebookLink/FacebookLink";
import InstagramLink from "../../InstagramLink/InstagramLink";
import TiktokLink from "../../TiktokLink/TiktokLink";

function Footer() {
  return (
    <footer className="footer">
      <div className="flex gap-x-[3.25rem]">
        <img src={mf3Logo} className="select-none" />
        <span className="h-[8.75rem] w-px bg-[#7A8087]" />
        <div className="self-end">
          <ul className="footer-navigation">
            <li>
              <a href="">Aviso de Privacidad</a>
            </li>
            <li>
              <a href="">Términos y Condiciones</a>
            </li>
          </ul>
          <div className="text-[#7A8087] pt-7">
            México Funcional Fitness Federación | Todos los Derechos Reservados
            2024.
          </div>
        </div>
      </div>
      <ul className="social-navigation">
        <li>
          <FacebookLink iconOnly />
        </li>
        <li>
          <InstagramLink iconOnly />
        </li>
        <li>
          <TiktokLink iconOnly />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
