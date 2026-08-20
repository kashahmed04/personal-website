import { Link } from "react-router-dom";
import Connect from "./Connect.jsx";
import "./AboutPreview.css";

function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="about-preview__about">
        <span className="about-preview__eyebrow text-label">
          About Me
        </span>

        <div className="about-preview__content">
          <div className="about-preview__image-placeholder">
            Portrait Image
          </div>

          <div className="about-preview__copy">
            <p className="text-body">
              I'm a developer and designer based in Buffalo, NY.
              I love turning ideas into interactive experiences
              and building things that live on the web, mobile
              devices, and beyond.
            </p>

            <Link
              to="/about"
              className="about-preview__link"
            >
              Learn More About Me
            </Link>
          </div>
        </div>
      </div>

      <Connect />
    </section>
  );
}

export default AboutPreview;