import ProjectCard from "./ProjectCard.jsx";
import "./SelectedWork.css";

const projects = [
  {
    number: "01",
    title: "Platinum Carwash",
    category: "Web Design & Development",
    description:
      "A responsive marketing website for a local car wash, designed to clearly present services and create a smooth experience across devices.",
    tools: "HTML · CSS · JavaScript · GA4",
    image: "/images/platinum-carwash.jpg",
    imageAlt: "Platinum Carwash website",
    link: "/projects/platinum-carwash",
  },

  {
    number: "02",
    title: "Floss Boss",
    category: "Alternative Controller Game",
    description:
      "A life-size underwater dentist game built around a custom physical controller and interactive web experience.",
    tools: "JavaScript · Arduino · Node.js · HTML Canvas",
    image: "/images/floss-boss.jpg",
    imageAlt: "Floss Boss alternative controller game",
    link: "/projects/floss-boss",
  },

  {
    number: "03",
    title: "Watchlist Maker",
    category: "Application Development",
    description:
      "A web application for discovering movies and shows, creating watchlists, and keeping track of what to watch next.",
    tools: "React · JavaScript · CSS",
    image: "/images/watchlist-maker.jpg",
    imageAlt: "Watchlist Maker application",
    link: "/projects/watchlist-maker",
  },

  {
    number: "04",
    title: "Sonic Hangman",
    category: "Interactive Web Game",
    description:
      "A Sonic-inspired hangman game combining responsive interface design with interactive gameplay.",
    tools: "TypeScript · JavaScript · CSS",
    image: "/images/sonic-hangman.jpg",
    imageAlt: "Sonic Hangman web game",
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