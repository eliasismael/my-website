import ProjectCard from "./ProjectCard";

import imgCryptoSurvey from "../assets/img/projects_pictures/crypto-survey.jpg";
import imgFindYourLoveApp from "../assets/img/projects_pictures/fylapp.jpg";
import imgDreamHouse from "../assets/img/projects_pictures/dreamhouse.jpg";
import imgSnakeGame from "../assets/img/projects_pictures/snake-game.jpg";
import imgRockPaperSccisors from "../assets/img/projects_pictures/rock-paper-sccisors.jpg";
import imgElectionSimulator from "../assets/img/projects_pictures/election-simulator.jpg";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="w-full text-white flex flex-col items-center"
    >
      <div>
        <h3 className="text-4xl tracking-wider font-semibold">Projects</h3>
      </div>

      <div
        className="w-full flex flex-col py-10 gap-6
        sm:flex-row
        sm:flex-wrap
        sm:justify-evenly
      "
      >
        <ProjectCard
          image={imgCryptoSurvey}
          title="Blockchain survey app"
          technologies={[
            "HTML",
            "CSS",
            "TypeScript",
            "Material UI",
            "Axios",
            "React.js",
            "Ethers.js",
            "Ract router dom",
          ]}
          date="jun-23 dec-23"
          info={`Survey app that rewards its users with tokens. Includes connection to virtual wallet, network verification, external data
            query, time registration per question, interaction with contracts in Ethereum
            and a simple and intuitive user experience. Uses Hexagonal architecture.`}
          deploy="https://crypto-survey-virid.vercel.app/"
          code="https://github.com/eliasismael/crypto-survey"
        />

        <ProjectCard
          image={imgFindYourLoveApp}
          title="Match maker app"
          technologies={[
            "HTML",
            "CSS",
            "TailwindCSS",
            "React.js",
            "TypeScript",
            "Vite.js",
          ]}
          date="jun-23 dec-23"
          info={
            "Web app where users find a partner. Includes functionality to add users and contact section. Visually appealing interface and intuitive user experience."
          }
          deploy="https://find-your-love-app.vercel.app/"
          code=""
        />

        <ProjectCard
          image={imgDreamHouse}
          title="Rent house platform"
          technologies={[
            "HTML",
            "CSS",
            "TailwindCSS",
            "React.js",
            "TypeScript",
            "React router dom",
            "Vite.js",
          ]}
          date="jun-23 dec-23"
          info={
            "House rental web platform from scratch. Includes registration and login, search filtering, agent communication, and property highlighting. Intuitive navigation with React Router routing."
          }
          deploy="https://real-estate-app-coral.vercel.app/"
          code=""
        />

        <ProjectCard
          image={imgSnakeGame}
          title="Snake Game"
          technologies={["HTML Canvas", "CSS", "JavaScript"]}
          date="jun-23 dec-23"
          info={`Video game based on the popular snake game. Includes point logging, pause functionality and collision detection. Strong logical work.`}
          deploy="https://snake-game-theta-seven.vercel.app/"
          code=""
        />

        <ProjectCard
          image={imgRockPaperSccisors}
          title="Rock paper scissors"
          technologies={["HTML", "CSS", "JavsScript"]}
          date="jun-23 dec-23"
          info={`Video game based on the game of rock, paper, scissors. It includes the registration of users and their victories and the possibility of
          being used with two players. Visually pleasing interface and simple user experience.`}
          deploy="https://rock-paper-scissors-two-zeta.vercel.app/"
          code=""
        />

        <ProjectCard
          image={imgElectionSimulator}
          title="Election simulator"
          technologies={["HTML", "CSS", "JavsScript"]}
          date="jun-23 dec-23"
          info={`Website that controls electoral processes. Includes creation of candidates and their proposals, voters and unique and
          identifiable personal data, ability to perform tiebreakers. Logical work for the grammatical rules of proper nouns in Spanish`}
          deploy="https://election-simulator.vercel.app/"
          code=""
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
