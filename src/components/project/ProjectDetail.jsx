import { Link } from "react-router-dom";
import "./ProjectDetail.css";

function ProjectDetail({ project }) {
    return (
        <article className="project-detail">
            {/*project hero */}

            <section className="project-detail__hero">
                <Link
                    to="/#selected-work"
                    className="project-detail__back"
                >
                    ← Back to Projects
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

                        <div className="project-detail__actions">
                            {project.primaryAction && (
                                <a
                                    href={project.primaryAction.href}
                                    className="project-detail__button project-detail__button--primary"
                                >
                                    {project.primaryAction.label} ↗
                                </a>
                            )}

                            {project.secondaryAction && (
                                <a
                                    href={project.secondaryAction.href}
                                    className="project-detail__button project-detail__button--secondary"
                                >
                                    {project.secondaryAction.label} →
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="project-detail__hero-visual">
                        <div className="project-placeholder">
                            <span>Project Hero Image</span>
                        </div>
                    </div>
                </div>
            </section>

            {/*project meta*/}

            <section className="project-detail__meta">
                <div className="project-detail__meta-item project-detail__meta-item--overview">
                    <span className="project-detail__label">
                        Overview
                    </span>

                    <p>
                        {project.overview}
                    </p>
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

                <div className="project-detail__meta-item">
                    <span className="project-detail__label">
                        Links
                    </span>

                    <div className="project-detail__links">
                        {project.links.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                            >
                                {link.label} ↗
                            </a>
                        ))}
                    </div>
                </div>

                <div className="project-detail__meta-item project-detail__meta-item--technologies">
                    <span className="project-detail__label">
                        Technologies
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

            {/*goals*/}

            <section className="project-section">
                <div className="project-section__copy">
                    <span className="project-detail__label">
                        Goals
                    </span>

                    <h2 className="project-section__title">
                        {project.goal.title}
                    </h2>

                    <p className="project-section__description">
                        {project.goal.description}
                    </p>
                </div>

                <div className="project-section__visual">
                    <div className="project-placeholder">
                        <span>Goals / Research Image</span>
                    </div>
                </div>
            </section>

            {/*brainstorming */}

            <section className="project-section">
                <div className="project-section__copy">
                    <span className="project-detail__label">
                        Brainstorming
                    </span>

                    <h2 className="project-section__title">
                        Exploring the idea
                    </h2>

                    <p className="project-section__description">
                        Placeholder copy describing early ideas,
                        sketches, interaction concepts, research,
                        and initial design decisions.
                    </p>
                </div>

                <div className="project-section__gallery project-section__gallery--two">
                    <div className="project-placeholder">
                        <span>Brainstorming 01</span>
                    </div>

                    <div className="project-placeholder">
                        <span>Brainstorming 02</span>
                    </div>
                </div>
            </section>

            {/*development*/}

            <section className="project-section">
                <div className="project-section__copy">
                    <span className="project-detail__label">
                        Development
                    </span>

                    <h2 className="project-section__title">
                        Building the experience
                    </h2>

                    <p className="project-section__description">
                        Placeholder copy explaining how the
                        project moved from concept into a working
                        product.
                    </p>

                    <ul className="project-section__list">
                        <li>Placeholder development detail</li>
                        <li>Placeholder technical challenge</li>
                        <li>Placeholder implementation detail</li>
                    </ul>
                </div>

                <div className="project-section__gallery project-section__gallery--two">
                    <div className="project-placeholder">
                        <span>Development 01</span>
                    </div>

                    <div className="project-placeholder">
                        <span>Development 02</span>
                    </div>
                </div>
            </section>

            {/*playtesting*/}

            <section className="project-section">
                <div className="project-section__copy">
                    <span className="project-detail__label">
                        Playtesting & Feedback
                    </span>

                    <h2 className="project-section__title">
                        Testing and refining
                    </h2>

                    <p className="project-section__description">
                        Placeholder content describing testing,
                        feedback, iteration, and improvements.
                    </p>
                </div>

                <div className="project-section__visual">
                    <div className="project-placeholder">
                        <span>Testing Image</span>
                    </div>
                </div>
            </section>

            {/*results*/}

            <section className="project-results">
                <div className="project-results__heading">
                    <span className="project-detail__label">
                        Results
                    </span>

                    <h2 className="project-section__title">
                        What came out of it
                    </h2>
                </div>

                <div className="project-results__grid">
                    {project.results.map((result, index) => (
                        <div
                            className="project-result"
                            key={`${result.label}-${index}`}
                        >
                            <span className="project-result__value">
                                {result.value}
                            </span>

                            <span className="project-result__label">
                                {result.label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/*takeaways*/}

            <section className="project-takeaways">
                <div>
                    <span className="project-detail__label">
                        Takeaways
                    </span>

                    <h2 className="project-section__title">
                        What I learned
                    </h2>
                </div>

                <ul className="project-takeaways__list">
                    {project.takeaways.map((takeaway, index) => (
                        <li key={`${takeaway}-${index}`}>
                            {takeaway}
                        </li>
                    ))}
                </ul>
            </section>

            {/*project navigation*/}

            <nav className="project-detail__navigation">
                {project.previousProject ? (
                    <Link
                        to={project.previousProject.href}
                        className="project-detail__previous"
                    >
                        <span>← Previous Project</span>
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
                        <span>Next Project →</span>
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