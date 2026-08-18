import DistortField from "./DistortField";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <DistortField />

      <div className="hero__content">
        <h1 className="hero__name">
          <span>Kash</span>
          <span>Ahmed</span>
        </h1>

        <div className="hero__statement">
          <span className="hero__statement-label">I Build</span>
          <span className="hero__statement-word">Websites.</span>
        </div>

        <p className="hero__description">
          Blending design, development, and interaction to turn ideas into
          engaging digital experiences.
        </p>

        <a className="hero__scroll" href="#selected-work">
          <span aria-hidden="true">↓</span>
          <span>Scroll to explore</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;