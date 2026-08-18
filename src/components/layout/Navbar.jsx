import "./Navbar.css";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((currentState) => !currentState);
  }

  return (
    <header className="navbar">
      <a className="navbar__logo" href="/" aria-label="Kash Ahmed home">
        KA<span>.</span>
      </a>

      <button
        className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}
        aria-label="Main navigation"
      >
        <a className="navbar__link navbar__link--active" href="/">
          Home
        </a>

        <a className="navbar__link" href="/projects">
          Projects
        </a>

        <a className="navbar__link" href="/about">
          About
        </a>

        <a className="navbar__link" href="/resume">
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Navbar;