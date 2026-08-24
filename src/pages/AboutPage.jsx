import "../styles/typography.css";
import "./AboutPage.css";

function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-section about-intro">
        <div className="about-section__heading">
          <span className="about-section__number">01</span>

          <span className="about-section__label text-label">
            About Me
          </span>
        </div>

        <div className="about-intro__content">
          <div className="about-intro__image">
            <div className="about-intro__image-placeholder">
              Portrait Image
            </div>
          </div>

          <div className="about-intro__copy">
            <h1 className="about-intro__title">
              Hey, I'm <span>Kash.</span>
            </h1>

            <p className="about-intro__lead">
              I'm an interactive developer focused on building thoughtful,
              engaging digital experiences through design, development, and
              interaction.
            </p>

            <div className="about-intro__accent"></div>

            <p className="text-body">
              I enjoy turning ideas into clean, intuitive interfaces and
              interactive projects that connect design, code, and technology.
            </p>

            <p className="text-body">
              I'm especially interested in work that combines strong visual
              design with meaningful interaction and practical development.
            </p>
          </div>
        </div>
      </section>

      <section className="about-section about-skills">
        <div className="about-section__heading">
          <span className="about-section__number">02</span>

          <span className="about-section__label text-label">
            Skills
          </span>
        </div>

        <div className="about-skills__grid">
          <div className="about-skills__group">
            <span className="about-skills__icon" aria-hidden="true">
              /
            </span>

            <h2 className="about-skills__title">
              Development
            </h2>

            <ul className="about-skills__list">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Node.js</li>
              <li>p5.js</li>
              <li>Three.js</li>
            </ul>
          </div>

          <div className="about-skills__group">
            <span className="about-skills__icon" aria-hidden="true">
              ✎
            </span>

            <h2 className="about-skills__title">
              Design
            </h2>

            <ul className="about-skills__list">
              <li>UI/UX Design</li>
              <li>Interface Design</li>
              <li>Prototyping</li>
              <li>Wireframing</li>
              <li>User Research</li>
              <li>User Testing</li>
              <li>Accessibility</li>
              <li>Design Systems</li>
            </ul>
          </div>

          <div className="about-skills__group">
            <span className="about-skills__icon" aria-hidden="true">
              ⚙
            </span>

            <h2 className="about-skills__title">
              Tools & Technology
            </h2>

            <ul className="about-skills__list">
              <li>Figma</li>
              <li>Git / GitHub</li>
              <li>VS Code</li>
              <li>Arduino</li>
              <li>Unity</li>
              <li>Blender</li>
              <li>MongoDB</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="about-section about-personal">
        <div className="about-section__heading">
          <span className="about-section__number">03</span>

          <span className="about-section__label text-label">
            A Little More About Me
          </span>
        </div>

        <p className="about-personal__description text-body">
          Outside of design and development, I like staying active, exploring
          creative hobbies, and finding new things to learn.
        </p>

        <div className="about-personal__grid">
          <div className="about-personal__item">
            <span className="about-personal__icon">🛹</span>
            <span>Skateboarding</span>
          </div>

          <div className="about-personal__item">
            <span className="about-personal__icon">🏸</span>
            <span>Badminton</span>
          </div>

          <div className="about-personal__item">
            <span className="about-personal__icon">🥊</span>
            <span>Kickboxing</span>
          </div>

          <div className="about-personal__item">
            <span className="about-personal__icon">🎮</span>
            <span>Gaming</span>
          </div>

          <div className="about-personal__item">
            <span className="about-personal__icon">★</span>
            <span>Anime</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;