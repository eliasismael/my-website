import { Card } from "./components/Card";

import {
  FRONTEND_TECHNOLOGIES,
  BLOCKCHAIN_TECHNOLOGIES,
  OTHER_TECHNOLOGIES,
} from "./constants/technologies";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full text-white flex flex-col items-center "
    >
      {/* TITLE */}
      <div className="w-full">
        <h3 className="text-5xl tracking-wider font-semibold text-start">
          Skills
        </h3>
      </div>

      {/* CARDS */}
      <div className="w-full flex flex-col xl:flex-row py-10 gap-8 ">
        <div className="min-h-full w-full xl:w-10/12">
          <p className="flex items-center font-bold text-3xl rounded-xl tracking-wider text-center xl:text-start  text-white mb-4">
            Frontend{" "}
            <img src={FRONTEND_TECHNOLOGIES[6].src} className="w-7 h-7 ml-2" />
          </p>
          <Card title="Frontend" technologies={FRONTEND_TECHNOLOGIES} />
        </div>

        <div className="">
          <p className="flex items-center font-bold text-3xl rounded-xl tracking-wider text-center xl:text-start  text-white mb-4">
            Blockchain
            <img
              src={BLOCKCHAIN_TECHNOLOGIES[0].src}
              className="w-7 h-7 ml-2"
            />
          </p>
          <Card title="Blockchain" technologies={BLOCKCHAIN_TECHNOLOGIES} />
        </div>

        <div className="">
          <p className="flex items-center font-bold text-3xl tracking-wider rounded-xl text-center xl:text-start text-white mb-4">
            Others
            <img src={OTHER_TECHNOLOGIES[1].src} className="w-7 h-7 ml-2" />
          </p>
          <Card title="Others" technologies={OTHER_TECHNOLOGIES} />
        </div>
      </div>
    </section>
  );
};
