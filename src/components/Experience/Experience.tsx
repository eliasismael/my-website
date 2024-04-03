import { Card } from "./components/Card";
import { experienceInfo } from "./constants/experienceInfo";
import imgKrittie from "../../assets/img/experiencie/Logo-Kritties-Photoroom.png-Photoroom.png";
export const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full text-white flex flex-col items-center"
    >
      <div className="w-full">
        <h3 className="text-5xl tracking-wider font-semibold text-start">
          Experience
        </h3>
      </div>

      <div className="w-full flex flex-col py-10 gap-6 sm:flex-row sm:flex-wrap sm:justify-evenly">
        {experienceInfo.map((exp) => (
          <Card {...exp} />
        ))}
      </div>

      <div className="w-full">
        <h3 className="text-4xl tracking-wider font-semibold text-end">
          Free Lance
        </h3>
      </div>

      <div className="w-full flex flex-col py-10 gap-6 sm:flex-row sm:flex-wrap sm:justify-evenly">
        <Card
          position="Blockchain Developer"
          img={imgKrittie}
          company="Kritties"
          period="Octuber 2023 - November 2023"
          technologies="React - TypeScript - Tailwind - Next.js - Vite.js - Web3 Auth"
          // link?= string;
          description={`Krittie is a public good that uses blockchain to improve pet adoption, vaccine
  registration, feeding and tracking, using non-fungible tokens. I implement the
  UI, the connection to the wallet and the development of smart contracts.`}
        />
      </div>
    </section>
  );
};
