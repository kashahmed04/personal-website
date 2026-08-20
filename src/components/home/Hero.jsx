import { useEffect, useState } from "react";
import DistortField from "./DistortField";
import "./Hero.css";

const words = [
  "Websites.",
  "Interfaces.",
  "Apps.",
  "Games.",
  "Experiences.",
];

function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsChanging(true);

      setTimeout(() => {
        setWordIndex((currentIndex) =>
          (currentIndex + 1) % words.length
        );

        setIsChanging(false);
      }, 300);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="top">
      <DistortField />

      <div className="hero__content">
        <h1 className="hero__name">
          <span>Kash</span>
          <span>Ahmed</span>
        </h1>

        <div className="hero__statement">
          <span className="hero__statement-label">
            I Build
          </span>

          <span
            className={`hero__statement-word ${
              isChanging
                ? "hero__statement-word--changing"
                : ""
            }`}
          >
            {words[wordIndex]}
          </span>
        </div>

        <p className="hero__description">
          Blending design, development, and interaction to turn ideas into
          engaging digital experiences.
        </p>

        <a
          className="hero__scroll"
          href="#selected-work"
        >
          <span aria-hidden="true">↓</span>
          <span>Scroll to explore</span>
        </a>
      </div>
    </section>
  );
}

export default Hero;