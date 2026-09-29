import ProjectDetail from "../components/project/ProjectDetail.jsx";

const watchlistMaker = {
    number: "03",
    title: "Watchlist Maker",
    subtitle: "Full-Stack Application Development",

    summary:
        "A full-stack web application for keeping track of movies and shows through personalized watchlists, user accounts, ratings, and watch statuses.",

    primaryAction: {
        label: "View GitHub",
        href: "https://github.com/kashahmed04/watchlist-maker",
    },

    secondaryAction: null,

    overview:
        "A full-stack watchlist application built with React, Node.js, Express, MongoDB, Redis, and Handlebars, with user authentication, database-driven watchlists, and end-to-end testing using Playwright.",

    roles: [
        "Full-Stack Developer",
    ],

    timeline:
        "November 2024 - December 2024",

    technologies: [
        "React",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Redis",
        "Handlebars.js",
        "Playwright",
        "bcrypt",
    ],

    goal: {
    title:
        "Build a full-stack application for managing a personal watchlist.",

    description:
        "The goal was to create an application where users could create an account and keep track of movies and shows in their own watchlist. Users can add titles, mark them as watched, watching, or want to watch, give them a rating, and remove them from their list. The application also includes a subscription system where standard users can save up to five items, while subscribed users can add more.",
},

    planning: {
        label: "Full-Stack Development",

        title:
            "Connecting the interface, server, and database.",

        description:
            "I built the application across both the frontend and backend. React handles interactive parts of the interface, while Node.js and Express handle routes and server-side logic. MongoDB and Mongoose store account and watchlist data, and Redis is used to store user sessions so each logged-in user can access their own watchlist.",

        images: [],
    },

    development: {
        label: "HTTP Requests & Data",

        title:
            "Connecting user actions to account and watchlist data.",

        description:
            "The application uses HTTP requests to communicate between the frontend and backend. GET requests retrieve watchlist, account, and subscription information, POST requests handle actions such as creating accounts, logging in, adding watchlist items, changing passwords, and changing subscription status, while DELETE requests remove individual watchlist items.",

        details: [
            "Created GET, POST, and DELETE routes with Express",
            "Stored user accounts and watchlist items in MongoDB using Mongoose",
            "Connected each watchlist item to the account that created it",
            "Protected account and watchlist routes with authentication middleware",
            "Hashed account passwords using bcrypt",
            "Stored login sessions using Redis",
        ],

        images: [],
    },

    testing: {
        label: "End-to-End Testing",

        title:
            "Testing the complete user workflow with Playwright.",

        description:
            "I used Playwright to test the application from the user's perspective. The end-to-end test creates an account, changes the subscription status, adds and deletes a watchlist item, changes the account password, logs back in with the new password, and logs out to verify that the main workflow works across the frontend, server, and database.",

        images: [],
    },

    resultsTitle:
        "A working full-stack watchlist application.",

    results: [
        {
            label:
                "Built personalized watchlists where each user's saved movies and shows are connected to their account.",
        },
        {
            label:
                "Implemented account creation, login, logout, password changes, and Redis-backed user sessions.",
        },
        {
            label:
                "Connected frontend interactions to Express routes and MongoDB using GET, POST, and DELETE requests.",
        },
        {
            label:
                "Created a Playwright end-to-end test covering the application's main account and watchlist workflow.",
        },
    ],

    takeaways:
        "Watchlist Maker gave me experience building across multiple parts of a full-stack application instead of focusing only on the frontend. I learned how the interface, HTTP requests, Express routes, authentication, sessions, and MongoDB work together to manage data for individual users. It also gave me experience using end-to-end testing to make sure a complete user workflow worked across the application.",

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