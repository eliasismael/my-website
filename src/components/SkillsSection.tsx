import SkillCard from "./SkillCard";

import {
  FRONTEND_TECHNOLOGIES,
  BLOCKCHAIN_TECHNOLOGIES,
  OTHER_TECHNOLOGIES,
} from "../constants/technologies";

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="w-full text-white flex flex-col items-center"
    >
      {/* TITLE */}
      <div>
        <h3 className="text-4xl tracking-wider font-semibold">Skills</h3>
      </div>

      {/* CARDS */}
      <div
        className="w-full flex flex-col py-10 gap-6
      
      "
      >
        <div className="w-full h-20 flex justify-center items-center text-center text-2xl">
          <p className="font-bold text-3xl tracking-wider">Frontend</p>
        </div>
        <SkillCard title="Frontend" technologies={FRONTEND_TECHNOLOGIES} />
        <div className="w-full h-20 flex justify-center items-center text-center text-2xl">
          <p className="font-bold text-3xl tracking-wider">Blockchain</p>
        </div>
        <SkillCard title="Blockchain" technologies={BLOCKCHAIN_TECHNOLOGIES} />
        <div className="w-full h-20 flex justify-center items-center text-center text-2xl">
          <p className="font-bold text-3xl tracking-wider">Others</p>
        </div>
        <SkillCard title="Others" technologies={OTHER_TECHNOLOGIES} />
      </div>
    </section>
  );
};

export default SkillsSection;
