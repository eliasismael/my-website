import ProjectCard from "./components/ProjectCard";
import { projectsInfo } from "./constants/projectsInfo";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full text-white flex flex-col items-center"
    >
      <div className="w-full mb-4">
        <h3 className="text-5xl tracking-wider font-semibold text-start">
          Personal Projects
        </h3>
      </div>

      <div
        className="w-full flex flex-col py-10 gap-10
        sm:flex-row
        sm:flex-wrap
        sm:justify-center"
      >
        {projectsInfo.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};
