import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <a className="navbar__logo" href="/" aria-label="Kash Ahmed home">
        KA<span>.</span>
      </a>

      <nav className="navbar__links" aria-label="Main navigation">
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