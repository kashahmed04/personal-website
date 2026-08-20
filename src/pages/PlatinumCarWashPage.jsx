import ProjectDetail from "../components/project/ProjectDetail.jsx";

const platinumCarwash = {
    number: "01",
    title: "Platinum Carwash",
    subtitle: "Web Design & Development",

    summary:
        "Placeholder summary for the Platinum Carwash project.",

    primaryAction: {
        label: "Visit Website",
        href: "#",
    },

    secondaryAction: null,

    overview:
        "Placeholder overview for the Platinum Carwash case study.",

    roles: [
        "Designer",
        "Front-End Developer",
    ],

    timeline:
        "Placeholder Timeline",

    links: [
        {
            label: "Website",
            href: "#",
        },
    ],

    technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "GA4",
    ],

    goal: {
        title:
            "Create a clear and responsive customer experience.",

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
        title: "Sonic Hangman",
        href: "/projects/sonic-hangman",
    },

    nextProject: {
        title: "Floss Boss",
        href: "/projects/floss-boss",
    },

};

function PlatinumCarwashPage() {
    return (
        <ProjectDetail
            project={platinumCarwash}
        />
    );
}

export default PlatinumCarwashPage;