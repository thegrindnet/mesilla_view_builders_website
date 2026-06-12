import "./Header.css";
import Navigation from "../Navigation/Navigation";
import logoImage from "../../assets/Logo.png";

function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="#home">
        <img
          className="header__logo-image"
          src={logoImage}
          alt="Mesilla View Builders Logo"
        />
        MESILLA VIEW BUILDER LLC
      </a>
      <Navigation />
    </header>
  );
}

export default Header;
