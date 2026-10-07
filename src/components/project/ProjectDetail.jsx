import { Link } from "react-router-dom";
import "./ProjectDetail.css";

function ProjectDetail({ project }) {
    return (
        <article
            className={`project-detail ${project.pageClass || ""}`}
        >
            {/*project hero*/}

            <section className="project-detail__hero">
                <Link
                    to="/#selected-work"
                    className="project-detail__back"
                >
                    <svg
                        className="project-detail__arrow"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            d="M19 12H5M11 6l-6 6 6 6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    Back to Projects
                </Link>

                <div className="project-detail__hero-layout">
                    <div className="project-detail__intro">
                        <span className="project-detail__number">
                            {project.number}
                        </span>

                        <h1 className="project-detail__title">
                            {project.title}
                        </h1>

                        <p className="project-detail__subtitle">
                            {project.subtitle}
                        </p>

                        <p className="project-detail__summary">
                            {project.summary}
                        </p>

                        {project.highlight && (
                            <p className="project-detail__highlight">
                                {project.highlight}
                            </p>
                        )}

                        <div className="project-detail__actions">
                            {project.primaryAction && (
                                <a
                                    href={project.primaryAction.href}
                                    className="project-detail__button project-detail__button--primary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.primaryAction.label}

                                    <svg
                                        className="project-detail__arrow project-detail__arrow--external"
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
                                </a>
                            )}

                            {project.secondaryAction && (
                                <a
                                    href={project.secondaryAction.href}
                                    className="project-detail__button project-detail__button--secondary"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.secondaryAction.label}

                                    <svg
                                        className="project-detail__arrow project-detail__arrow--external"
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
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="project-detail__hero-visual">
                        {project.heroVideo ? (
                            <iframe
                                src={project.heroVideo}
                                title={`${project.title} project video`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        ) : project.heroImage ? (
                            <img
                                src={project.heroImage}
                                alt={`${project.title} project`}
                            />
                        ) : (
                            <div className="project-placeholder">
                                <span>Project Hero Image</span>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/*project meta*/}

            <section className="project-detail__meta">
                <div className="project-detail__meta-item project-detail__meta-item--overview">
                    <span className="project-detail__label">
                        Overview
                    </span>

                    <p>{project.overview}</p>
                </div>

                <div className="project-detail__meta-item">
                    <span className="project-detail__label">
                        Role
                    </span>

                    {project.roles.map((role) => (
                        <p key={role}>
                            {role}
                        </p>
                    ))}
                </div>

                <div className="project-detail__meta-item">
                    <span className="project-detail__label">
                        Timeline
                    </span>

                    <p>{project.timeline}</p>
                </div>

                <div className="project-detail__meta-item project-detail__meta-item--technologies">
                    <span className="project-detail__label">
                        Tools & Technologies
                    </span>

                    <div className="project-detail__tags">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="project-detail__tag"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/*case study layout*/}

            <div className="project-detail__case-study">
                {/* sidebar*/}

                <aside className="project-detail__sidebar">
                    <nav
                        className="project-detail__section-nav"
                        aria-label="Case study sections"
                    >
                        <span className="project-detail__section-nav-label">
                            Case Study
                        </span>

                        <a href="#goals">
                            <span>01</span>
                            Goals
                        </a>

                        <a href="#planning">
                            <span>02</span>
                            {project.planning.label}
                        </a>

                        <a href="#development">
                            <span>03</span>
                            {project.development.label}
                        </a>

                        {project.marketing && (
                            <a href="#marketing">
                                <span>04</span>
                                {project.marketing.label}
                            </a>
                        )}

                        <a href="#testing">
                            <span>
                                {project.marketing ? "05" : "04"}
                            </span>
                            {project.testing.label}
                        </a>

                        <a href="#results">
                            <span>
                                {project.marketing ? "06" : "05"}
                            </span>
                            Results
                        </a>

                        <a href="#takeaways">
                            <span>
                                {project.marketing ? "07" : "06"}
                            </span>
                            Takeaways
                        </a>
                    </nav>
                </aside>

                {/*case study content*/}

                <div className="project-detail__case-study-content">
                    {/*goals*/}

                    <section id="goals" className="project-section">
                        <div className="project-section__copy">
                            <span className="project-detail__label">Goals</span>

                            <h2 className="project-section__title">
                                {project.goal.title}
                            </h2>

                            <p className="project-section__description">
                                {project.goal.description}
                            </p>
                        </div>

                        {project.goal.images?.length > 0 ? (
                            <div className="project-section__gallery project-section__gallery--two">
                                {project.goal.images.map((image, index) => (
                                    <img
                                        key={`${image}-${index}`}
                                        src={image}
                                        alt={`${project.title} goals ${index + 1}`}
                                    />
                                ))}
                            </div>
                        ) : project.goal.image ? (
                            <div className="project-section__visual">
                                <img
                                    src={project.goal.image}
                                    alt={`${project.title} goals`}
                                />
                            </div>
                        ) : null}
                    </section>

                    {/*planning*/}

                    <section
                        id="planning"
                        className="project-section"
                    >
                        <div className="project-section__copy">
                            <span className="project-detail__label">
                                {project.planning.label}
                            </span>

                            <h2 className="project-section__title">
                                {project.planning.title}
                            </h2>

                            <p className="project-section__description">
                                {project.planning.description}
                            </p>
                        </div>

                        {project.planning.images?.length > 0 && (
                            <div
                                className={`project-section__gallery ${project.planning.images.length > 1
                                    ? "project-section__gallery--two"
                                    : ""
                                    } ${project.planning.imageLayout === "wide"
                                        ? "project-section__gallery--wide"
                                        : ""
                                    }`}
                            >
                                {project.planning.images.map((image, index) => (
                                    <img
                                        key={`${image}-${index}`}
                                        src={image}
                                        alt={`${project.title} ${project.planning.label.toLowerCase()} ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}

                        {project.planning.timelineImage && (
                            <div className="project-section__visual">
                                <img
                                    src={project.planning.timelineImage}
                                    alt={`${project.title} project timeline`}
                                />
                            </div>
                        )}
                    </section>

                    {/*development*/}

                    <section
                        id="development"
                        className="project-section"
                    >
                        <div className="project-section__copy">
                            <span className="project-detail__label">
                                {project.development.label}
                            </span>

                            <h2 className="project-section__title">
                                {project.development.title}
                            </h2>

                            <p className="project-section__description">
                                {project.development.description}
                            </p>

                            <ul className="project-section__list">
                                {project.development.details.map(
                                    (detail, index) => (
                                        <li key={`${detail}-${index}`}>
                                            {detail}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>

                        {project.development.images?.length > 0 && (
                            <div
                                className={`project-section__gallery ${project.development.images.length > 1
                                    ? "project-section__gallery--two"
                                    : ""
                                    } ${project.development.imageLayout === "wide"
                                        ? "project-section__gallery--wide"
                                        : ""
                                    }`}
                            >
                                {project.development.images.map(
                                    (image, index) => (
                                        <img
                                            key={`${image}-${index}`}
                                            src={image}
                                            alt={`${project.title} development ${index + 1}`}
                                        />
                                    )
                                )}
                            </div>
                        )}

                        {project.development.debugImage && (
                            <div className="project-section__visual">
                                <img
                                    src={project.development.debugImage}
                                    alt={`${project.title} hardware input debugging`}
                                />
                            </div>
                        )}
                    </section>

                    {/*marketing*/}

                    {project.marketing && (
                        <section
                            id="marketing"
                            className="project-section"
                        >
                            <div className="project-section__copy">
                                <span className="project-detail__label">
                                    {project.marketing.label}
                                </span>

                                <h2 className="project-section__title">
                                    {project.marketing.title}
                                </h2>

                                <p className="project-section__description">
                                    {project.marketing.description}
                                </p>

                                <ul className="project-section__list">
                                    {project.marketing.details.map(
                                        (detail, index) => (
                                            <li key={`${detail}-${index}`}>
                                                {detail}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>

                            <div className="project-section__gallery project-section__gallery--two">
                                {project.marketing.images?.[0] ? (
                                    <img
                                        src={project.marketing.images[0]}
                                        alt={`${project.title} social media content plan`}
                                    />
                                ) : (
                                    <div className="project-placeholder">
                                        <span>Marketing 01</span>
                                    </div>
                                )}

                                {project.marketing.images?.[1] ? (
                                    <img
                                        src={project.marketing.images[1]}
                                        alt={`${project.title} Instagram profile and social media content`}
                                    />
                                ) : (
                                    <div className="project-placeholder">
                                        <span>Marketing 02</span>
                                    </div>
                                )}
                            </div>
                        </section>
                    )}

                    {/*testing*/}
                    <section
                        id="testing"
                        className="project-section"
                    >
                        <div className="project-section__copy">
                            <span className="project-detail__label">
                                {project.testing.label}
                            </span>

                            <h2 className="project-section__title">
                                {project.testing.title}
                            </h2>

                            <p className="project-section__description">
                                {project.testing.description}
                            </p>
                        </div>

                        {project.testing.images?.length > 0 ? (
                            <div
                                className={`project-section__gallery ${project.testing.images.length > 1
                                    ? "project-section__gallery--two"
                                    : ""
                                    } ${project.testing.imageLayout === "wide"
                                        ? "project-section__gallery--wide"
                                        : ""
                                    }`}
                            >
                                {project.testing.images.map((image, index) => (
                                    <img
                                        key={`${image}-${index}`}
                                        src={image}
                                        alt={`${project.title} testing and refinement ${index + 1}`}
                                    />
                                ))}
                            </div>
                        ) : project.testing.image ? (
                            <div className="project-section__visual">
                                <img
                                    src={project.testing.image}
                                    alt={`${project.title} testing and refinement`}
                                />
                            </div>
                        ) : null}
                    </section>

                    {/*results*/}

                    <section
                        id="results"
                        className="project-results"
                    >
                        <div className="project-results__heading">
                            <span className="project-detail__label">
                                Results
                            </span>

                            <h2 className="project-section__title">
                                {project.resultsTitle}
                            </h2>
                        </div>

                        <ul className="project-results__list">
                            {project.results.map((result, index) => (
                                <li key={`${result.label}-${index}`}>
                                    {result.label}
                                </li>
                            ))}
                        </ul>
                        {project.resultsImages?.length > 0 && (
                            <div className="project-section__gallery project-section__gallery--two">
                                {project.resultsImages.map((image, index) => (
                                    <img
                                        key={`${image}-${index}`}
                                        src={image}
                                        alt={`${project.title} final result ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </section>

                    {/*takeaways*/}

                    <section id="takeaways" className="project-section">
                        <div className="project-section__copy">
                            <span className="project-detail__label">
                                Takeaways
                            </span>

                            <h2 className="project-section__title">
                                What I learned
                            </h2>

                            <p className="project-section__description">
                                {project.takeaways}
                            </p>
                        </div>

                        {project.takeawaysImages?.length > 0 && (
                            <div className="project-section__gallery project-section__gallery--two">
                                {project.takeawaysImages.map((image, index) => (
                                    <img
                                        key={`${image}-${index}`}
                                        src={image}
                                        alt={`${project.title} team ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </section>
                </div>
            </div>

            {/*project navigation*/}

            <nav className="project-detail__navigation">
                {project.previousProject ? (
                    <Link
                        to={project.previousProject.href}
                        className="project-detail__previous"
                    >
                        <span>
                            <svg
                                className="project-detail__arrow"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    d="M19 12H5M11 6l-6 6 6 6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            Previous Project
                        </span>
                        <strong>{project.previousProject.title}</strong>
                    </Link>
                ) : (
                    <div />
                )}

                <span
                    className="project-detail__nav-marker"
                    aria-hidden="true"
                />

                {project.nextProject ? (
                    <Link
                        to={project.nextProject.href}
                        className="project-detail__next"
                    >
                        <span>
                            Next Project

                            <svg
                                className="project-detail__arrow"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    d="M5 12h14M13 6l6 6-6 6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <strong>{project.nextProject.title}</strong>
                    </Link>
                ) : (
                    <div />
                )}
            </nav>
        </article>
    );
}

export default ProjectDetail;