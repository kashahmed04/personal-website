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
        <Link
            to={link}
            className="project-card"
            aria-label={`View ${title} project`}
        >
            <div className="project-card__info">
                <span className="project-card__number">
                    {number}
                </span>

                <div className="project-card__text">
                    <h3 className="project-card__title">
                        {title}
                    </h3>

                    <p className="project-card__category text-label">
                        {category}
                    </p>

                    <p className="project-card__description text-body">
                        {description}
                    </p>

                    <p className="project-card__tools">
                        {tools}
                    </p>

                    <span className="project-card__link">
                        View Project
                        <svg
                            className="project-card__arrow"
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
                    </span>

                </div>
            </div>

            <div className="project-card__visual">
                <img
                    src={image}
                    alt={imageAlt}
                    className="project-card__image"
                />
            </div>
        </Link>
    );
}

export default ProjectCard;