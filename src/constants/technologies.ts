import html from "../assets/img/technologies_logos/HTML5_logo_and_wordmark.svg.png";
import css from "../assets/img/technologies_logos/CSS3_logo_and_wordmark.svg.png";
import javascript from "../assets/img/technologies_logos/JavaScript-logo.png";
import typescript from "../assets/img/technologies_logos/Typescript_logo_2020.svg.png";
import tailwind from "../assets/img/technologies_logos/tailwind-css-logo-5AD4175897-seeklogo.com.png";
import mui from "../assets/img/technologies_logos/mui.png";
import react from "../assets/img/technologies_logos/react.png";
import vite from "../assets/img/technologies_logos/Vitejs-logo.svg.png";
import next from "../assets/img/technologies_logos/next.webp";
import node from "../assets/img/technologies_logos/2560px-Node.js_logo.svg.png";
import redux from "../assets/img/technologies_logos/redux.svg";
import reactRouter from "../assets/img/technologies_logos/react-router.png";
import reactQuery from "../assets/img/technologies_logos/react-query.png";

import solidity from "../assets/img/technologies_logos/solidity-logo.svg";
import hardhat from "../assets/img/technologies_logos/hardhat.png";
import foundry from "../assets/img/technologies_logos/foundry.png";
import ethers from "../assets/img/technologies_logos/ethers.png";
import web3 from "../assets/img/technologies_logos/web3js.png";

import git from "../assets/img/technologies_logos/git-logo.png";
import github from "../assets/img/technologies_logos/github-icon.png";
import vsc from "../assets/img/technologies_logos/vsc.png";

export interface Technologie {
  name: string;
  src: string;
  alt: string;
  color: string;
}

export const FRONTEND_TECHNOLOGIES: Technologie[] = [
  {
    name: "HTML",
    src: html,
    alt: "HTML Logo",
    color: "#D15918",
  },
  {
    name: "CSS",
    src: css,
    alt: "CSS Logo",
    color: "#0043E8",
  },
  {
    name: "JavaScript",
    src: javascript,
    alt: "JavaScipt Logo",
    color: "#EEE93C",
  },
  {
    name: "TypeScript",
    src: typescript,
    alt: "TypeScript Logo",
    color: "#2E79DF",
  },
  {
    name: "TailwindCSS",
    src: tailwind,
    alt: "TailwindCSS Logo",
    color: "#00C6BA",
  },
  {
    name: "Material UI",
    src: mui,
    alt: "Material UI Logo",
    color: "blue",
  },
  {
    name: "React.js",
    src: react,
    alt: "React Logo",
    color: "#00C3DE",
  },
  {
    name: "Redux",
    src: redux,
    alt: "Redux Logo",
    color: "#7839E6",
  },
  {
    name: "Router",
    src: reactRouter,
    alt: "React Router Dom Logo",
    color: "red",
  },
  {
    name: "Query",
    src: reactQuery,
    alt: "React Query Logo",
    color: "#D53838",
  },
  {
    name: "Vite.js",
    src: vite,
    alt: "Vite Logo",
    color: "#E67FFF",
  },
  {
    name: "Next.js",
    src: next,
    alt: "Next Logo",
    color: "white",
  },
  {
    name: "Node.js",
    src: node,
    alt: "Node Logo",
    color: "#55A54B",
  },
];

export const BLOCKCHAIN_TECHNOLOGIES: Technologie[] = [
  {
    name: "Solidity",
    src: solidity,
    alt: "Solidity Logo",
    color: "#3F4344",
  },
  {
    name: "Hardhat",
    src: hardhat,
    alt: "Hardhat Logo",
    color: "#E9F31B",
  },
  {
    name: "Foundry",
    src: foundry,
    alt: "Foundry Logo",
    color: "white",
  },
  {
    name: "Ethers.js",
    src: ethers,
    alt: "Ethers.js Logo",
    color: "#20378E",
  },
  {
    name: "Web3.js",
    src: web3,
    alt: "Web3.js Logo",
    color: "#C4631F",
  },
];

export const OTHER_TECHNOLOGIES: Technologie[] = [
  {
    name: "GIT",
    src: git,
    alt: "GIT Logo",
    color: "orange",
  },
  {
    name: "GitHub",
    src: github,
    alt: "GitHub Logo",
    color: "white",
  },
  {
    name: "VSC",
    src: vsc,
    alt: "Visual Studio Code Logo",
    color: "#2674D1",
  },
];
