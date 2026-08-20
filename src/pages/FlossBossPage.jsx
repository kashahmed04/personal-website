import ProjectDetail from "../components/project/ProjectDetail.jsx";

const flossBoss = {
    number: "01",

    title: "Floss Boss",

    subtitle:
        "Underwater Dental Adventure",

    summary:
        "A short placeholder description explaining what the project is, what makes it interesting, and why it was created.",

    primaryAction: {
        label: "View Project",
        href: "#",
    },

    secondaryAction: {
        label: "Watch Trailer",
        href: "#",
    },

    overview:
        "Placeholder overview describing the project, its purpose, and the experience created for users.",

    roles: [
        "UI/UX Engineer",
        "Lead Developer",
    ],

    timeline:
        "September 2025 - May 2026",

    links: [
        {
            label: "GitHub",
            href: "#",
        },
        {
            label: "Website",
            href: "#",
        },
    ],

    technologies: [
        "JavaScript",
        "Node.js",
        "HTML",
        "CSS",
        "Arduino",
        "C++",
        "Rive",
        "Game Development",
    ],

    goal: {
        title:
            "Make the experience engaging and intuitive.",

        description:
            "Placeholder goal description explaining the main design problem and what the project set out to accomplish.",
    },

    results: [
        {
            value: "20K+",
            label: "Placeholder Metric",
        },
        {
            value: "01",
            label: "Award / Result",
        },
        {
            value: "9",
            label: "Team Members",
        },
        {
            value: "100%",
            label: "Placeholder Result",
        },
    ],

    takeaways: [
        "Placeholder takeaway about the design process.",
        "Placeholder takeaway about development.",
        "Placeholder takeaway about user feedback.",
        "Placeholder takeaway about future improvements.",
    ],

    previousProject: {
        title: "Platinum Carwash",
        href: "/projects/platinum-carwash",
    },

    nextProject: {
        title: "Watchlist Maker",
        href: "/projects/watchlist-maker",
    },
};

function FlossBossPage() {
    return (
        <ProjectDetail
            project={flossBoss}
        />
    );
}

export default FlossBossPage;