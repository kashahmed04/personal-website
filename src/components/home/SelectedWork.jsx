import ProjectCard from "./ProjectCard.jsx";
import platinumCarwashHero from "../../assets/images/platinum-wash-project-hero.png";
import flossBossHero from "../../assets/images/floss-boss-project-hero.png";
import sonicHangmanHero from "../../assets/images/sonic-hangman-project-hero.png";
import watchlistMakerHero from "../../assets/images/watchlist-maker-project-hero.png";
import "./SelectedWork.css";

const projects = [
  {
    number: "01",
    title: "Platinum Carwash",
    category: "Web Design & Development",
    description:
      "A website and digital presence redesign for a local car wash, combining UI/UX, branding, SEO, and social media.",
    tools: "HTML · CSS · JavaScript · Google Analytics",
    image: platinumCarwashHero,
    imageAlt: "Platinum Carwash website homepage",
    link: "/projects/platinum-carwash",
  },

  {
    number: "02",
    title: "Floss Boss",
    category: "Alternative Controller Game",
    description:
      "A life-size underwater dental game where players use a giant toothbrush and flosser to clean a massive set of monster teeth and defeat bacteria.",
    tools: "JavaScript · Node.js · C++ · Arduino",
    image: flossBossHero,
    imageAlt: "Floss Boss alternative controller game",
    link: "/projects/floss-boss",
  },

  {
    number: "03",
    title: "Watchlist Maker",
    category: "Full-Stack Application",
    description:
      "A full-stack web application for keeping track of movies and shows through personal watchlists, ratings, and watch statuses.",
    tools: "React · JavaScript · Node.js · MongoDB",
    image: watchlistMakerHero,
    imageAlt: "Watchlist Maker application",
    link: "/projects/watchlist-maker",
  },

  {
    number: "04",
    title: "Sonic Hangman",
    category: "Interactive Game Development",
    description:
      "A Sonic-themed Hangman game where players choose a category and guess their way through characters, quotes, and shows from the Sonic universe.",
    tools: "TypeScript · Canvas · Howler.js · Vite",
    image: sonicHangmanHero,
    imageAlt: "Sonic Hangman game",
    link: "/projects/sonic-hangman",
  },
];

function SelectedWork() {
  return (
    <section
      className="selected-work"
      id="selected-work"
    >
      <div className="selected-work__header">

        <h2 className="selected-work__title">
          Projects
        </h2>
      </div>

      <div className="selected-work__projects">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            number={project.number}
            title={project.title}
            category={project.category}
            description={project.description}
            tools={project.tools}
            image={project.image}
            imageAlt={project.imageAlt}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default SelectedWork;