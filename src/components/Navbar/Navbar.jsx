import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import navbarLogo from "../../assets/imagenaventur.png";
import "./Navbar.css";

function Navbar({ links }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a className="navbar__brand" href="#inicio" onClick={closeMenu}>
          <img className="navbar__logo" src={navbarLogo} alt="Aventur" />
        </a>

        <button
          className="navbar__toggle"
          type="button"
          onClick={toggleMenu}
          aria-label="Abrir menu de navegacion"
          aria-expanded={isOpen}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className={`navbar__links ${isOpen ? "is-open" : ""}`}>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
