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
          <svg
            className="footer__icon footer__icon--email"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="2"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M4 7l8 6 8-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

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

          <svg
            className="footer__source-arrow"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M7 17L17 7M9 7h8v8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        <p className="footer__copyright">
          © 2026 Kash Ahmed
        </p>
      </div>
    </footer>
  );
}

export default Footer;