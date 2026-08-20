import "./Footer.css";

function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="footer">
      <p className="footer__copyright">
        © 2026 Kash Ahmed
      </p>

      <button
        className="footer__top"
        type="button"
        onClick={scrollToTop}
      >
        Back to Top
        <span aria-hidden="true">↑</span>
      </button>
    </footer>
  );
}

export default Footer;