import ProjectDetail from "../components/project/ProjectDetail.jsx";
import flossBossInteractionSketch from "../assets/images/floss-boss-interaction-sketch.png";
import flossBossScaleSketch from "../assets/images/floss-boss-scale-sketch.png";
import flossBossTimeline from "../assets/images/floss-boss-schedule.png";
import flossBossGoalsBrushingGDC from "../assets/images/floss-boss-goals-gdc.png";
import flossBossGoalsFlossingGDC from "../assets/images/floss-boss-goals-gdc-two.png";
import flossBossWorkingOnBrushing from "../assets/images/working-on-hardware.jpg";
import flossBossFlossingHardware from "../assets/images/flossing-hardware.jpeg";
import flossBossBrushingHardware from "../assets/images/brushing-hardware.jpeg";
import flossBossEarlyBrushingPrototype from "../assets/images/early-brushing-prototype.png";
import flossBossProto from "../assets/images/floss-boss-proto.gif";
import flossBossProtoTwo from "../assets/images/floss-boss-proto-two.gif";
import flossBossTerminal from "../assets/images/floss-boss-terminal.png";
import flossBossTestingBrush from "../assets/images/testing-brushing.png";
import flossBossTesting from "../assets/images/gdc-testing.png";
import flossBossGDCOne from "../assets/images/brushing-gdc.jpg";
import flossBossGDCTwo from "../assets/images/flossing-gdc.jpg";
import flossBossGDCThree from "../assets/images/brushing-gdc-two.jpg";
import flossBossGDCFour from "../assets/images/flossing-gdc-two.jpg";
import flossBossTakeaways from "../assets/images/floss-boss-takeaways.JPEG";
import flossBossTakeawaysTwo from "../assets/images/floss-boss-takeaways-two.jpg";

//floss boss project content and case study data
const flossBoss = {
    number: "02",

    title: "Floss Boss",

    subtitle:
        "Alternative Controller Game",

    heroVideo:
        "https://www.youtube.com/embed/3P0t6EmyHPo",

    summary:
        "A life-size underwater dental game where players use a giant toothbrush and flosser to clean a massive set of monster teeth and defeat bacteria.",

    highlight:
        "Presented at the GDC Festival of Gaming to 20,000+ attendees · alt.ctrl.GDC competition finalist",

    primaryAction: {
        label: "View Website",
        href: "https://flossboss.framer.website/",
    },

    secondaryAction: {
        label: "View GitHub",
        href: "https://github.com/chrissye0/floss-boss",
    },

    overview:
        "Created by a team of 4 developers and 6 designers, Floss Boss is a two-player alternative controller game where players become tiny shrimp and use a giant toothbrush and flosser to clean a lake monster's teeth and fight bacteria in real time.",

    roles: [
        "Project Manager",
        "Lead Developer",
    ],

    timeline:
        "September 2025 - May 2026",

    technologies: [
        "JavaScript",
        "Node.js",
        "HTML",
        "CSS",
        "C++",
        "Arduino",
        "Web Development",
        "Game Development",
    ],

    goal: {
        title:
            "Create an engaging alternative controller experience.",

        description: (
            <>
                Our goal was to create a unique alternative controller experience
                designed for both{" "}
                <a
                    href="https://gdconf.com/alt-ctrl-gdc/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    alt.ctrl.GDC
                </a>{" "}
                and{" "}
                <a
                    href="https://www.rit.edu/imagine/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Imagine RIT
                </a>
                . With audiences ranging from game developers to students and
                families, we wanted the experience to be easy to understand,
                engaging to play, and memorable for people with different levels
                of gaming experience.
            </>
        ),

        images: [
            flossBossGoalsBrushingGDC,
            flossBossGoalsFlossingGDC,
        ],
    },

    planning: {
        label:
            "Prototyping",

        title:
            "Turning the idea into a physical experience.",

        description:
            "We wanted to create an immersive experience that brought a sense of childlike wonder to something ordinary, which led us to the idea of brushing and flossing teeth, but massive. From there, we explored how players would physically interact with the giant dental tools and the game. As Project Manager, I organized our early development timeline around prototyping, testing, and development milestones leading up to our GDC submission deadline. After submitting, development continued as we refined the project for our final exhibitions.",

        images: [
            flossBossInteractionSketch,
            flossBossScaleSketch,
        ],

        timelineImage:
            flossBossTimeline,
    },

    development: {
        label:
            "Hardware & Arduino",

        title:
            "Making physical actions readable by the game.",

        description:
            "As Lead Developer, I worked on the Arduino and hardware behind the physical controllers. Brushing was detected using photoresistors and light, while flossing used capacitive sensing. I worked on making those physical interactions reliable enough to become real-time inputs for the game.",

        details: [
            "Worked with Arduino and the sensors used by the physical controllers.",
            "Used photoresistors and light detection to track brushing.",
            "Used capacitive sensing to detect flossing interactions.",
            "Tested and adjusted sensor detection to make the physical inputs more reliable.",
        ],

        images: [
            flossBossFlossingHardware,
            flossBossBrushingHardware,
            flossBossWorkingOnBrushing,
            flossBossTesting,
        ],

        debugImage:
            flossBossTerminal,
    },

    integration: {
        label:
            "Game Integration",

        title:
            "Connecting the physical controllers to the game.",

        description:
            "I was responsible for getting the data from our physical hardware into the game. Sensor readings from the Arduino were passed through the backend and sent to the browser, where the frontend could interpret them and update the game in real time.",

        details: [
            "Connected Arduino sensor data to the backend.",
            "Created the data flow between the hardware, server, and browser-based game.",
            "Provided the frontend with brushing and flossing data it could use as gameplay input.",
            "Worked with the other developers to debug communication between the physical and digital parts of the experience.",
        ],

    },

    testing: {
        label:
            "Testing & Refinement",

        title:
            "Refining the experience through playtesting.",

        description:
            "We regularly playtested Floss Boss with RIT students and faculty, setting up the physical controllers and game to see how people interacted with the experience. Feedback from playtesters and professors helped us refine both the physical controls and gameplay. We improved photoresistor detection, made brushing and enemy animations easier to notice, shortened the game from 90 to 60 seconds for larger audiences, and adjusted brushing and flossing rates to create a more balanced experience for both players.",

        images: [
            flossBossProto,
            flossBossProtoTwo,
            flossBossEarlyBrushingPrototype,
            flossBossTestingBrush,
        ],
    },

    resultsTitle:
        "From prototype to a full-scale exhibition experience.",

    results: [
        {
            label:
                "Built a working two-player alternative controller game using a giant toothbrush and flosser.",
        },
        {
            label:
                "Connected Arduino hardware and sensor data to a browser-based game for real-time physical interaction.",
        },
        {
            label:
                "Coordinated a multidisciplinary team of developers and designers throughout development.",
        },
        {
            label:
                "Presented Floss Boss at alt.ctrl.GDC and Imagine RIT.",
        },
    ],

    resultsImages: [
        flossBossGDCOne,
        flossBossGDCTwo,
        flossBossGDCThree,
        flossBossGDCFour,
    ],

    takeaways:
        "Floss Boss taught me how to manage a project where hardware, software, design, and physical elements all had to come together as one experience. As Project Manager and Lead Developer, I had to balance keeping the team organized with solving technical problems across the Arduino, backend, and game. Seeing people physically interact with something we had spent months designing, building, testing, and debugging made me appreciate how much iteration and teamwork goes into creating an experience at this scale.",

    takeawaysImages: [
        flossBossTakeawaysTwo,
        flossBossTakeaways,
    ],

    //previous and next project navigation
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