import { Card } from "./components/Card";
import { experienceInfo } from "./constants/experienceInfo";

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
    </section>
  );
};
