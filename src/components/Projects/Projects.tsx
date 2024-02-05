import Card from "./components/Card";
import { projectsInfo } from "./constants/projectsInfo";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full text-white flex flex-col items-center"
    >
      <div>
        <h3 className="text-4xl tracking-wider font-semibold">Projects</h3>
      </div>

      <div
        className="w-full flex flex-col py-10 gap-10
        sm:flex-row
        sm:flex-wrap
        sm:justify-between"
      >
        {projectsInfo.map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};
