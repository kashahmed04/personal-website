import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__message">
        <p className="footer__closing">
          End of the page.
        </p>

        <p className="footer__cta">
          Not the conversation.
        </p>
      </div>

      <div className="footer__contact">
        <a
          href="https://www.linkedin.com/in/kashaf-ahmed-dev"
          className="footer__contact-link"
          target="_blank"
          rel="noreferrer"
        >
          <span
            className="footer__icon footer__icon--linkedin"
            aria-hidden="true"
          >
            in
          </span>

          <span>LinkedIn</span>
        </a>
        <a
          href="mailto:kash.ahmed84@gmail.com"
          className="footer__contact-link"
        >
          <span
            className="footer__icon"
            aria-hidden="true"
          >
            ✉
          </span>

          <span>Email</span>
        </a>
      </div>

      <div className="footer__meta">
        <a
          href="https://github.com/kashahmed04/personal-website"
          className="footer__source"
          target="_blank"
          rel="noreferrer"
        >
          Portfolio Source
          <span aria-hidden="true">↗</span>
        </a>

        <p className="footer__copyright">
          © 2026 Kash Ahmed
        </p>
      </div>
    </footer>
  );
}

export default Footer;