import "./Connect.css";

function Connect() {
  return (
    <div className="connect">
      <span className="connect__eyebrow text-label">
        Let's Connect
      </span>

      <p className="connect__description text-body">
        I'm always open to new opportunities
        and interesting projects.
      </p>

      <div className="connect__links">
        <a
          href="#"
          className="connect__link"
          target="_blank"
          rel="noreferrer"
        >
          <span className="connect__icon">GH</span>
          <span>GitHub</span>
        </a>

        <a
          href="#"
          className="connect__link"
          target="_blank"
          rel="noreferrer"
        >
          <span className="connect__icon">IN</span>
          <span>LinkedIn</span>
        </a>

        <a
          href="mailto:your@email.com"
          className="connect__link"
        >
          <span className="connect__icon">@</span>
          <span>Email</span>
        </a>
      </div>
    </div>
  );
}

export default Connect;