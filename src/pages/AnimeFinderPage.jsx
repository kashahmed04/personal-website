
import ProjectDetail from "../components/project/ProjectDetail.jsx";
import animeFinderHero from "../assets/images/anime-finder-project-hero.png";
import animeFinderSearchResults from "../assets/images/anime-finder-cards.png";

//anime finder project content and case study data
const animeFinder = {
    number: "05",
    title: "Anime Finder",
    subtitle: "API Web Application",
    heroImage: animeFinderHero,

    summary:
        "A responsive web application that uses the Jikan API to search for anime, generate a random anime, and display anime information.",

    primaryAction: {
        label: "View GitHub",
        href: "https://github.com/kashahmed04/anime-finder",
    },

    overview:
        "A TypeScript web application that connects to the Jikan API to retrieve anime information. Users can search by title, generate a random anime, and explore results with cover images, ratings, available trailers, and links to MyAnimeList.",

    roles: [
        "Front-End Developer",
    ],

    timeline:
        "January 2024 - February 2024",

    technologies: [
        "TypeScript",
        "HTML",
        "CSS",
        "Jikan API",
        "Fetch API",
        "Vite",
    ],

    goal: {
        title:
            "Make it easy to search for and discover anime.",

        description:
            "I wanted to build a simple application where users could look up anime or discover something new without having to search through multiple pages. The main goal was to connect the interface to an external API and turn the information it returned into results that were easy to browse.",
    },

    planning: {
        label: "API Integration",

        title:
            "Connecting the application to real anime data.",

        description:
            "I used the Jikan API to retrieve anime information from MyAnimeList. The application builds a request based on the user's search term or uses the random anime endpoint to generate a result. I used the Fetch API to make the requests, process the JSON responses, and pass the returned information to the interface.",
    },

    development: {
        label: "Search & Data Handling",

        title:
            "Turning API responses into searchable results.",

        description:
            "I used TypeScript to handle search input, make API requests, and dynamically generate anime result cards. Each card displays the anime's title, cover image, rating, and a link to its MyAnimeList page. When a trailer is available, users can also open it. I added handling for empty searches, missing information, and unsuccessful API requests so the application can respond to different situations.",

        details: [
            "Encoded search terms before adding them to API requests",
            "Fetched anime data and processed JSON responses",
            "Dynamically generated result cards using the returned data",
            "Displayed available ratings, cover images, trailers, and MyAnimeList links",
            "Added a feature to generate one random anime at a time and a button to clear results",
            "Handled empty searches, missing data, and API errors",
        ],

        images: [
            animeFinderSearchResults,
        ],

    },

    testing: {
        label: "Responsive Design & Testing",

        title:
            "Making the interface work across different screen sizes.",

        description:
            "I refined the layout so the search controls and anime result cards adapt to desktop, tablet, and mobile screens. I also tested searching by clicking the Go button or pressing Enter, generating a random anime, clearing results, and the application's responses to missing information and failed requests.",
    },

    resultsTitle:
        "A responsive anime search application.",

    results: [
        {
            label:
                "Built an anime search interface that retrieves and displays information from the Jikan API.",
        },
        {
            label:
                "Added random anime generation to give users another way to discover anime.",
        },
        {
            label:
                "Created dynamic result cards with anime information, available trailers, and MyAnimeList links.",
        },
        {
            label:
                "Designed a responsive interface and added handling for empty searches, missing information, and API errors.",
        },
    ],

    takeaways:
        "Anime Finder gave me more experience working with TypeScript and integrating a third-party API into a web application. I learned more about fetching data from an API, working with JSON responses, and updating the interface based on the data returned. It also gave me experience turning external data into a responsive, interactive experience for users.",

    //previous and next project navigation
    previousProject: {
        title: "Sonic Hangman",
        href: "/projects/sonic-hangman",
    },

    nextProject: {
        title: "Platinum Carwash",
        href: "/projects/platinum-carwash",
    },
};

function AnimeFinderPage() {
    return (
        <ProjectDetail project={animeFinder} />
    );
}

export default AnimeFinderPage;
