import ProjectDetail from "../components/project/ProjectDetail.jsx";

const sonicHangman = {
    number: "04",
    title: "Sonic Hangman",
    subtitle: "Interactive Web Game",

    summary:
        "Placeholder summary for the Sonic Hangman project.",

    primaryAction: {
        label: "View Project",
        href: "#",
    },

    secondaryAction: null,

    overview:
        "Placeholder overview for the Sonic Hangman case study.",

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
        "TypeScript",
        "JavaScript",
        "CSS",
    ],

    goal: {
        title:
            "Create a responsive and playful web game.",

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
        title: "Watchlist Maker",
        href: "/projects/watchlist-maker",
    },

    nextProject: {
        title: "Platinum Carwash",
        href: "/projects/platinum-carwash",
    },
};

function SonicHangmanPage() {
    return (
        <ProjectDetail project={sonicHangman} />
    );
}

export default SonicHangmanPage;