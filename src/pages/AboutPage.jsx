import { Link } from "react-router-dom";
import kashAbout from "../assets/images/kash-about.jpeg";
import "../styles/typography.css";
import "./AboutPage.css";

function AboutPage() {
  return (
    <main className="about-page">
      {/*about me*/}
      <section className="about-section about-intro">
        <div className="about-section__heading">
          <span className="about-section__number">01</span>

          <span className="about-section__label text-label">
            About Me
          </span>
        </div>

        <div className="about-intro__content">
          <div className="about-intro__image">
            <img src={kashAbout} alt="Kash Ahmed" />
          </div>

          <div className="about-intro__copy">
            <h1 className="about-intro__title">
              Hey, I'm <span>Kash.</span>
            </h1>

            <p className="about-intro__lead">
              I'm a Creative Technologist who enjoys working across front-end development,
              UI/UX design, and interactive media.
            </p>

            <div className="about-intro__accent"></div>

            <p className="text-body">
              I like bringing different parts of art
              and technology together to
              create digital experiences, whether I'm designing, coding, or
              experimenting with something new.
            </p>

            <p className="text-body">
              I care about making things that work well, look good, and are easy for people to use.
            </p>
          </div>
        </div>
      </section>

      {/*experience*/}
      <section className="about-section about-experience">
        <div className="about-section__heading">
          <span className="about-section__number">02</span>

          <span className="about-section__label text-label">
            Experience
          </span>
        </div>

        <div className="about-experience__content">
          <div className="about-experience__company">
            <h2 className="about-experience__title">
              Platinum Car Wash
            </h2>

            <p className="about-experience__role">
              Digital Marketing & Web Development Intern
            </p>
          </div>

          <p className="about-experience__date">
            June 2026 - August 2026
          </p>

          <div className="about-experience__details">
            <p className="text-body">
              Designed and developed a responsive website while working across
              UI/UX, branding, SEO, analytics, and social media.
            </p>

            <Link
              to="/projects/platinum-carwash"
              className="about-experience__link"
            >
              View Project ↗
            </Link>
          </div>
        </div>
      </section>
    
      {/*education*/}
      <section className="about-section about-education">
        <div className="about-section__heading">
          <span className="about-section__number">03</span>

          <span className="about-section__label text-label">
            Education
          </span>
        </div>

        <div className="about-education__content">
          <div className="about-education__school">
            <h2 className="about-education__title">
              Rochester Institute of Technology
            </h2>

            <p className="about-education__degree">
              B.S. New Media Interactive Development
            </p>
          </div>

          <p className="about-education__date">
            2022 - 2026
          </p>

          <div className="about-education__details">
            <p className="text-body">
              Minor in Communication
            </p>
          </div>
        </div>
      </section>

      {/*skills*/}
      <section className="about-section about-skills">
        <div className="about-section__heading">
          <span className="about-section__number">04</span>

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
              <li>Kotlin</li>
              <li>C#</li>
              <li>C++</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Handlebars.js</li>
              <li>p5.js</li>
              <li>PixiJS</li>
              <li>howler.js</li>
              <li>A-Frame</li>
              <li>AR.js</li>
              <li>Three.js</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>Redis</li>
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
              <li>Accessibility Design</li>
              <li>Design Systems</li>
              <li>Axure</li>
              <li>Adobe Illustrator</li>
              <li>Adobe Photoshop</li>
              <li>Canva</li>
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
              <li>Git/GitHub</li>
              <li>VS Code</li>
              <li>Arduino</li>
              <li>Arduino IDE</li>
              <li>npm</li>
              <li>Vite</li>
              <li>Heroku</li>
              <li>Android Studio</li>
              <li>Playwright</li>
              <li>Google Analytics</li>
              <li>Google Search Console</li>
              <li>Google Business Profile</li>
              <li>Twine</li>
              <li>Unity</li>
            </ul>
          </div>
        </div>
      </section>

      {/*personal interests*/}
      <section className="about-section about-personal">
        <div className="about-section__heading">
          <span className="about-section__number">05</span>

          <span className="about-section__label text-label">
            A Little More About Me
          </span>
        </div>

        <p className="about-personal__description text-body">
          Outside of design and development, I enjoy a mix of active,
          creative, and laid-back hobbies.
        </p>

        <div className="about-personal__grid">
          <div className="about-personal__item">
            <span className="about-personal__icon">🏎️</span>
            <span>LEGO Car Builds</span>
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
            <span className="about-personal__icon">🌸</span>
            <span>Anime & K-Dramas</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;