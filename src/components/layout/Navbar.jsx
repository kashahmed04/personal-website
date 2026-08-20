import "./Navbar.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  function toggleMenu() {
    setMenuOpen((currentState) => !currentState);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  const isHome =
    location.pathname === "/" &&
    location.hash !== "#selected-work";

  const isProjects =
    location.hash === "#selected-work" ||
    location.pathname.startsWith("/projects");

  const isAbout =
    location.pathname === "/about";

  const isResume =
    location.pathname === "/resume";

  return (
    <header className="navbar">
      <Link
        className="navbar__logo"
        to="/#top"
        aria-label="Back to top"
        onClick={closeMenu}
      >
        KA<span>.</span>
      </Link>

      <button
        className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""
          }`}
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
        className={`navbar__links ${menuOpen ? "navbar__links--open" : ""
          }`}
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className={`navbar__link ${isHome ? "navbar__link--active" : ""
            }`}
          onClick={closeMenu}
        >
          Home
        </Link>

        <Link
          to="/#selected-work"
          className={`navbar__link ${isProjects ? "navbar__link--active" : ""
            }`}
          onClick={closeMenu}
        >
          Projects
        </Link>

        <Link
          to="/about"
          className={`navbar__link ${isAbout ? "navbar__link--active" : ""
            }`}
          onClick={closeMenu}
        >
          About
        </Link>

        <Link
          to="/resume"
          className={`navbar__link ${isResume ? "navbar__link--active" : ""
            }`}
          onClick={closeMenu}
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;