import imgCryptoSurvey from "../../../assets/img/projects_pictures/crypto-survey.jpg";
import imgFindYourLoveApp from "../../../assets/img/projects_pictures/fylapp.jpg";
import imgDreamHouse from "../../../assets/img/projects_pictures/dreamhouse.jpg";
import imgSnakeGame from "../../../assets/img/projects_pictures/snake-game.jpg";
// import imgRockPaperSccisors from "../../../assets/img/projects_pictures/rock-paper-sccisors.jpg";
// import imgElectionSimulator from "../../../assets/img/projects_pictures/election-simulator.jpg";
import imgZurf from "../../../assets/img/projects_pictures/zurf.jpg";

export const projectsInfo = [
  {
    image: imgZurf,
    title: "Multi Wallet App",
    technologies: [
      "HTML",
      "TypeScript",
      "React.js",
      "Next.js",
      "TailwindCSS",
      "walletConnect SDK",
    ],
    date: "jan-24 feb-23",
    info: `App where you can connect your wallet using Wallet Connect, this allows you to interact with the app either with your desktop or with a wallet on your mobile. Here you can see the ZRF token price, the amount you have and get the current price. The app also detects which network you are on and responds accordingly`,
    deploy: "https://zurf-challenge.vercel.app/",
    code: "https://github.com/eliasismael/zurf-challenge",
  },
  {
    image: imgCryptoSurvey,
    title: "Blockchain Survey App",
    technologies: [
      "HTML",
      "CSS",
      "TypeScript",
      "Material UI",
      "Axios",
      "React.js",
      "Ethers.js",
      "React router dom",
    ],
    date: "jun-23 dec-23",
    info: `Survey app that rewards its users with tokens. Includes connection to virtual wallet, network verification, external data
            query, time registration per question, interaction with contracts in Ethereum
            and a simple and intuitive user experience. Uses Hexagonal architecture.`,
    deploy: "https://crypto-survey-virid.vercel.app/",
    code: "https://github.com/eliasismael/crypto-survey",
  },
  {
    image: imgFindYourLoveApp,
    title: "Match Maker App",
    technologies: [
      "HTML",
      "CSS",
      "TailwindCSS",
      "React.js",
      "TypeScript",
      "Vite.js",
    ],
    date: "jun-23 dec-23",
    info: "Web app where users find a partner. Includes functionality to add users and contact section. Visually appealing interface and intuitive user experience.",
    deploy: "https://find-your-love-app.vercel.app/",
    code: "https://github.com/eliasismael/find-your-love-ts",
  },
  {
    image: imgDreamHouse,
    title: "Rent House Platform",
    technologies: [
      "HTML",
      "CSS",
      "TailwindCSS",
      "React.js",
      "TypeScript",
      "React router dom",
      "Vite.js",
    ],
    date: "jun-23 dec-23",
    info: "House rental web platform from scratch. Includes registration and login, search filtering, agent communication, and property highlighting. Intuitive navigation with React Router routing.",
    deploy: "https://real-estate-app-coral.vercel.app/",
    code: "https://github.com/eliasismael/real-estate-app",
  },
  {
    image: imgSnakeGame,
    title: "Snake Game",
    technologies: ["HTML Canvas", "CSS", "JavaScript"],
    date: "jun-23 dec-23",
    info: `Video game based on the popular snake game. Includes point logging, pause functionality and collision detection. Strong logical work.`,
    deploy: "https://snake-game-theta-seven.vercel.app/",
    code: "https://github.com/eliasismael/snake-game",
  },
  // {
  //   image: imgRockPaperSccisors,
  //   title: "Rock Paper Scissors",
  //   technologies: ["HTML", "CSS", "JavaScript"],
  //   date: "jun-23 dec-23",
  //   info: `Video game based on the game of rock, paper, scissors. It includes the registration of users and their victories and the possibility of being used with two players. Visually pleasing interface and simple user experience.`,
  //   deploy: "https://rock-paper-scissors-two-zeta.vercel.app/",
  //   code: "https://github.com/eliasismael/rock-paper-scissors",
  // },
  // {
  //   image: imgElectionSimulator,
  //   title: "Election Simulator",
  //   technologies: ["HTML", "CSS", "JavaScript"],
  //   date: "jun-23 dec-23",
  //   info: `Website that controls electoral processes. Includes creation of candidates and their proposals, voters and unique and
  //         identifiable personal data, ability to perform tiebreakers. Logical work for the grammatical rules of proper nouns in Spanish`,
  //   deploy: "https://election-simulator.vercel.app/",
  //   code: "https://github.com/eliasismael/election-simulator",
  // },
];
