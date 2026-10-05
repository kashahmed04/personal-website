import ProjectDetail from "../components/project/ProjectDetail.jsx";
import sonicHangmanHero from "../assets/images/sonic-hangman-project-hero.png";
import sonicHangmanGameplay from "../assets/images/sonic-hangman-gameplay.png";
import sonicHangmanWinningScreen from "../assets/images/sonic-hangman-winning-screen.png";
import sonicHangmanLosingScreen from "../assets/images/sonic-hangman-losing-screen.png";
import sonicHangmanMobile from "../assets/images/sonic-hangman-mobile.png";
import sonicHangmanTablet from "../assets/images/sonic-hangman-tablet.png";

//sonic hangman project content and case study data
const sonicHangman = {
    number: "04",
    title: "Sonic Hangman",
    subtitle: "Interactive Game Development",
    heroImage: sonicHangmanHero,

    summary:
        "A Sonic-themed Hangman game where players choose a category and guess their way through characters, quotes, and shows from the Sonic universe.",

    primaryAction: {
        label: "Play Game",
        href: "https://kashahmed04.github.io/sonic-hangman-game/",
    },
    secondaryAction: {
        label: "View GitHub",
        href: "https://github.com/kashahmed04/sonic-hangman-game",
    },

    overview:
        "An interactive browser game built with TypeScript, HTML, CSS, Canvas, and Howler.js, with randomized words, sound effects, saved win and loss stats, and responsive gameplay.",

    roles: [
        "Game Developer",
    ],

    timeline:
        "April 2024 - May 2024",

    technologies: [
        "TypeScript",
        "HTML",
        "CSS",
        "Canvas",
        "Howler.js",
        "Vite",
    ],

    goal: {
        title:
            "Turn the classic Hangman game into a Sonic-themed experience.",

        description:
            "I wanted to take the basic idea of Hangman and make it feel more like its own game instead of just recreating the original. I built it around Sonic and gave players different categories to choose from, including characters, quotes, and shows. I also wanted the game to keep track of wins and losses and include sound and visual feedback as you played.",
    },

    planning: {
        label: "Game Development",

        title:
            "Building the game around player choices.",

        description:
            "I built the game so each round starts by letting the player choose between Sonic characters, quotes, or shows. The game then randomly chooses an answer from that category and creates the spaces for each letter. From there, players use the on-screen alphabet to guess the answer, with each letter updating the game depending on whether the guess was right or wrong.",

        images: [
            sonicHangmanGameplay,
        ],
    },

    development: {
        label: "Canvas & Game Logic",

        title:
            "Connecting each guess to the game itself.",

        description:
            "Most of the project was about handling the game logic and making everything respond to the player's guesses. Correct letters are revealed in the answer, while incorrect guesses draw another part of the Hangman figure on the Canvas. I also kept track of the player's wins and losses with local storage so their stats could stay saved between games.",

        details: [
            "Randomly selected answers based on the player's chosen category",
            "Generated letter buttons and hidden answers through TypeScript",
            "Revealed matching letters as players made correct guesses",
            "Used Canvas to draw the Hangman figure as incorrect guesses were made",
            "Saved win and loss totals with local storage",
            "Added background music and interaction sounds with Howler.js",
        ],

        images: [
            sonicHangmanWinningScreen,
            sonicHangmanLosingScreen,
        ],

        imageLayout: "wide",
    },

    testing: {
        label: "Testing & Refinement",

        title:
            "Making sure the game worked across different rounds and screen sizes.",

        description:
            "I tested the different parts of the game, including choosing categories, guessing letters, winning and losing rounds, starting a new game, saving stats, and controlling the audio. I also made the layout responsive so the game could still be played on smaller screens.",

        images: [
            sonicHangmanMobile,
            sonicHangmanTablet,
        ],
    },

    resultsTitle:
        "A complete Sonic-themed browser game.",

    results: [
        {
            label:
                "Built a playable Hangman game with three different Sonic-themed categories and randomized answers.",
        },
        {
            label:
                "Created the game logic for guesses, wins, losses, and starting new rounds.",
        },
        {
            label:
                "Used Canvas and Howler.js to add visual and audio feedback to the game.",
        },
        {
            label:
                "Saved player win and loss stats between sessions using local storage.",
        },
    ],

    takeaways:
        "Sonic Hangman gave me more experience building something interactive where a lot of different pieces had to respond to what the player was doing. I got more comfortable using TypeScript for game logic, working with Canvas to draw and update visuals, saving data with local storage, and adding audio with Howler.js. It also helped me think more about how smaller interactions can come together to make a browser game feel like a complete experience.",

    //previous and next project navigation
    previousProject: {
        title: "Watchlist Maker",
        href: "/projects/watchlist-maker",
    },

    nextProject: {
        title: "Anime Finder",
        href: "/projects/anime-finder",
    },
};

function SonicHangmanPage() {
    return (
        <ProjectDetail project={sonicHangman} />
    );
}

export default SonicHangmanPage;