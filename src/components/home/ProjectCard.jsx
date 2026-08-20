import { Link } from "react-router-dom";
import "./ProjectCard.css";

function ProjectCard({
    number,
    title,
    category,
    description,
    tools,
    image,
    imageAlt,
    link = "#",
}) {
    return (
        <article className="project-card">
            <div className="project-card__info">
                <span className="project-card__number">
                    {number}
                </span>

                <div className="project-card__text">
                    <h3 className="project-card__title">
                        {title}
                    </h3>

                    <p className="project-card__category">
                        {category}
                    </p>

                    <p className="project-card__description">
                        {description}
                    </p>

                    <p className="project-card__tools">
                        {tools}
                    </p>

                    <Link
                        to={link}
                        className="project-card__link"
                    >
                        View Project ↗
                    </Link>

                </div>
            </div>

            <div className="project-card__visual">
                <img
                    src={image}
                    alt={imageAlt}
                    className="project-card__image"
                />
            </div>
        </article>
    );
}

export default ProjectCard;