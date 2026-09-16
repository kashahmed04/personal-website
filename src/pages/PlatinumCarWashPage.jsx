import ProjectDetail from "../components/project/ProjectDetail.jsx";
import platinumCarwashHero from "../assets/images/platinum-wash-project-hero.png";
import goalsProcess from "../assets/images/goals-process.png";
import platinumWashAudit from "../assets/images/platinum-wash-audit.png";
import platinumWashChecklist from "../assets/images/platinum-wash-checklist.png";

const platinumCarwash = {
    number: "01",
    title: "Platinum Carwash",
    subtitle: "Web Design & Development",
    heroImage: platinumCarwashHero,

    summary:
        "A full digital redesign for a local car wash, combining web development, UI/UX, branding, SEO, and social media.",

    primaryAction: {
        label: "Visit Website",
        href: "https://platinumwash.io/",
    },

    secondaryAction: {
        label: "GitHub",
        href: "https://github.com/kashahmed04/Platinum-Carwash-Website",
    },

    overview:
        "During my Digital Marketing & Web Development internship at Platinum Carwash, I redesigned and built the business's website while also working on its SEO, branding, analytics, and social media presence.",

    roles: [
        "Web Developer",
        "UI/UX Designer",
        "Digital Marketing Intern",
    ],

    timeline:
        "June 2026 - August 2026",

    technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Google Analytics",
        "Google Search Console",
        "Google Business Profile",
    ],

    goal: {
        title:
            "Build a stronger and more consistent digital presence.",

        description:
            "The goal was to make Platinum Carwash easier to find and use online, with a responsive website, clearer information, stronger branding, and a more consistent presence across search and social media.",

        image: goalsProcess,
    },

    planning: {
        label: "Research & Planning",

        title:
            "Finding what needed to improve.",

        description:
            "I started by auditing the existing website, looking at its design, usability, mobile experience, content, and SEO. I also reviewed the Google Business Profile and social media accounts, along with other local car wash websites to see how they presented their services and what features or information could improve Platinum Carwash's digital presence.",

        images: [
            platinumWashAudit,
            platinumWashChecklist,
        ],
    },

    development: {
        label: "Development",

        title:
            "Redesigning and building the website.",

        description:
            "I designed and built a new responsive website from the ground up using HTML, CSS, and JavaScript, focusing on making the business's services and important information clear and easy to find.",

        details: [
            "Built a responsive layout that works across desktop, tablet, and mobile devices.",
            "Organized the car wash, self-service, dog wash, location, and FAQ information into clear sections.",
            "Created interactive features including mobile navigation and FAQ accordions.",
            "Added SEO, analytics, and click tracking to better understand how customers find and use the website.",
        ],
    },

    marketing: {
        label: "Digital Marketing & SEO",

        title:
            "Building the brand beyond the website.",

        description:
            "Beyond the website, I worked on Platinum Carwash's Instagram, Facebook, SEO, and Google Business Profile while keeping the branding and messaging consistent across each platform.",

        details: [
            "Created and planned social media content for Instagram and Facebook.",
            "Maintained consistent branding and messaging across the website and social platforms.",
            "Improved on-page SEO and the site's search presence.",
            "Updated and optimized the Google Business Profile.",
            "Used Google Analytics and Google Search Console to monitor performance and guide improvements.",
        ],
    },

    testing: {
        label: "Testing & Refinement",

        title:
            "Testing, tracking, and improving the experience.",

        description:
            "I tested the site across different devices and had friends and family with different levels of technical experience try it out. I used their feedback, along with Google Analytics and Search Console data after launch, to find issues and keep improving the site.",
    },

    resultsTitle:
        "A stronger digital presence from end to end.",

    results: [
        {
            value: "01",
            label: "Launched a redesigned, responsive production website",
        },
        {
            value: "02",
            label: "Created a consistent brand presence across web and social media",
        },
        {
            value: "03",
            label: "Improved SEO and search performance tracking",
        },
        {
            value: "04",
            label: "Continued improving the site using feedback and real user data",
        },
    ],

    takeaways: [
        "I learned how development, design, branding, SEO, and marketing can all work together as one connected experience.",
        "Seeing real people use the site showed me how useful feedback and analytics are for deciding what to improve next.",
        "I got to take a real project from the initial audit through design, development, launch, and continued improvements.",
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