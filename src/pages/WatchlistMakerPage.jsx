import ProjectDetail from "../components/project/ProjectDetail.jsx";

const watchlistMaker = {
    number: "03",
    title: "Watchlist Maker",
    subtitle: "Application Development",

    summary:
        "Placeholder summary for the Watchlist Maker project.",

    primaryAction: {
        label: "View Project",
        href: "#",
    },

    secondaryAction: null,

    overview:
        "Placeholder overview for the Watchlist Maker case study.",

    roles: [
        "Designer",
        "Developer",
    ],

    timeline:
        "Placeholder Timeline",

    links: [
        {
            label: "Project",
            href: "#",
        },
    ],

    technologies: [
        "React",
        "JavaScript",
        "CSS",
    ],

    goal: {
        title:
            "Make discovering and organizing media easier.",

        description:
            "Placeholder goal description for the project.",
    },

    results: [
        {
            value: "01",
            label: "Placeholder Result",
        },
        {
            value: "02",
            label: "Placeholder Result",
        },
        {
            value: "03",
            label: "Placeholder Result",
        },
        {
            value: "04",
            label: "Placeholder Result",
        },
    ],

    takeaways: [
        "Placeholder takeaway.",
        "Placeholder takeaway.",
        "Placeholder takeaway.",
    ],

    previousProject: {
        title: "Floss Boss",
        href: "/projects/floss-boss",
    },

    nextProject: {
        title: "Sonic Hangman",
        href: "/projects/sonic-hangman",
    },
};

function WatchlistMakerPage() {
    return (
        <ProjectDetail project={watchlistMaker} />
    );
}

export default WatchlistMakerPage;